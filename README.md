Usage:

```
npm install
npm run test
```

Output:

```
    TypeError: Cannot read properties of null (reading 'document')

      at documentElement (node_modules/react-flow-renderer/node_modules/d3-drag/src/nodrag.js:5:28)
      at HTMLDivElement.h (node_modules/react-flow-renderer/node_modules/d3-drag/src/drag.js:59:19)
      at HTMLDivElement.__data__ (node_modules/react-flow-renderer/node_modules/d3-selection/src/selection/on.js:3:37)
      at HTMLDivElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLDivElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLDivElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLDivElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:47:43
      at node_modules/@testing-library/react/dist/pure.js:79:16
      at node_modules/@testing-library/react/dist/act-compat.js:64:24
      at act (node_modules/react/cjs/react.development.js:2512:16)
      at node_modules/@testing-library/react/dist/act-compat.js:63:25
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:78:28)
      at Object.wrapEvent (node_modules/@testing-library/user-event/dist/cjs/event/wrapEvent.js:8:28)
      at Object.dispatchEvent (node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:47:22)
      at Object.dispatchUIEvent (node_modules/@testing-library/user-event/dist/cjs/event/dispatchEvent.js:24:26)
      at Mouse.down (node_modules/@testing-library/user-event/dist/cjs/system/pointer/mouse.js:70:34)
      at PointerHost.press (node_modules/@testing-library/user-event/dist/cjs/system/pointer/index.js:27:24)
      at pointerAction (node_modules/@testing-library/user-event/dist/cjs/pointer/index.js:59:43)
      at Object.pointer (node_modules/@testing-library/user-event/dist/cjs/pointer/index.js:35:15)
      at Object.asyncWrapper (node_modules/@testing-library/react/dist/pure.js:71:14)
```
