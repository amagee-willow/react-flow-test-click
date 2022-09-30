import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer'
import { act } from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Copied from https://reactflow.dev/docs/guides/testing/
// To make sure that the tests are working, it's important that you are using
// this implementation of ResizeObserver and DOMMatrixReadOnly
class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    this.callback([{ target }], this);
  }

  unobserve() {}

  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

class DOMMatrixReadOnly {
  constructor(transform) {
    const scale = transform?.match(/scale\(([1-9.])\)/)?.[1];
    this.m22 = scale !== undefined ? +scale : 1;
  }
}
// @ts-ignore
global.DOMMatrixReadOnly = DOMMatrixReadOnly;

Object.defineProperties(global.HTMLElement.prototype, {
  offsetHeight: {
    get() {
      return parseFloat(this.style.height) || 1;
    },
  },
  offsetWidth: {
    get() {
      return parseFloat(this.style.width) || 1;
    },
  },
});

global.SVGElement.prototype.getBBox = () => ({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
});
// End Copied from https://reactflow.dev/docs/guides/testing/

function Node() {
  return (
    <div
      onClick={(event) => {
        console.log("clicked");
        event.preventDefault();
        event.stopPropagation();
        return false;
      }}
      data-testid="mynode"
    >
      this is a node
    </div>
  );
}

const nodeTypes = {
  "myNode": Node
}

function MyComponent() {
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={[
          {
            id: "mynode",
            type: "myNode",
            position: {
              x: 0,
              y: 0
            }
          }
        ]}
      />
    </ReactFlowProvider>
  );
}


test("1", async () => {
  render(<MyComponent />);
  await act(async () => userEvent.click(await screen.findByTestId("mynode")));
});
