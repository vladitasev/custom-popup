# custom-popup

Custom Popup with UI5 Web Components (tree with description) 


## How to run the project:
- `npm i`
- `npm run start`
- First popup: [http://localhost:8086/test-resources/pages/index.html](http://localhost:8086/test-resources/pages/index.html).
- Second popup: [http://localhost:8086/test-resources/pages/index2.html](http://localhost:8086/test-resources/pages/index2.html).

### `CustomPopup.js`
 - [http://localhost:8086/test-resources/pages/index.html](http://localhost:8086/test-resources/pages/index.html)
 - Minimal possible implementation
 - No template of its own, completely reuses the Popup template
 - Only implements `isModal` and has some CSS
 - All content is in the light DOM
 
 ### `AnotherCustomPopup.js`
  - [http://localhost:8086/test-resources/pages/index2.html](http://localhost:8086/test-resources/pages/index2.html)
  - Has a template with "close" button in the shadow root
  - Implements the `beforeContent` hook of `Popup.hbs`
    For the purpose: `{{>include "@ui5/webcomponents/src/Popup.hbs"}}`
