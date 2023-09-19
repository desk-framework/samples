import { JSX } from "@desk-framework/frame-core";

export default (
  <cell>
    <h2>Hello from Electron!</h2>
    <spacer height={16} />
    <row align="center">
      <primarybutton onClick="HelloClick">Say hello</primarybutton>
      <button onClick="CloseWindow">Close</button>
    </row>
  </cell>
);
