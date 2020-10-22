import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="root" style="display:flex;">
<div class="col-1">
  <div>
    <button><span style='font-size:15px;'>&#11014;</span></button>
  </div>
  <div>
   <input maxlength="2" style="width:23px;height:23px;">: :
  </div>
  <div>
    <button><span style='font-size:15px;'>&#11015;</span></button>
  </div>
</div>
<div class="col-2">
  <div>
    <button><span style='font-size:15px;'>&#11014;</span></button>
  </div>
  <div>
   <input maxlength="2" style="width:23px;height:23px;">
  </div>
  <div>
    <button><span style='font-size:15px;'>&#11015;</span></button>
  </div>
</div>
<div class="col-3" style="padding-left:10px;">
  <div>
    <button style="visibility: hidden"><span style='font-size:15px;'>&#11014;</span></button>
  </div>
  <div>
    <button><span style='font-size:15px;'>AM</span></button>
    <button><span style='font-size:15px;'>PM</span></button>
  </div>
  <div>
    <button style="visibility: hidden"><span style='font-size:15px;'>&#11015;</span></button>
  </div>
</div>
</div>
`;

class Component {
  constructor(targetElement, properties, events) {
    this.componentValues = {};
    // extract and set initial values to the properties,
    // attach the UI component events and triger it based on the component Functionality.
    // mount the component to UI.-renderComponent
  }

  updateProperty(properties, events) {
    // to update the properties and evetns
  }
  removeComponent() {
    // add support to destroy the ui component wihout affecting the other components.
  }
  renderComponent(element) {
    // render the ui elements with proper events.
  }
}
