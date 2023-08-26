import { JSX } from "desk-frame";

export default (
  <cell>
    <h2>Hello from Electron!</h2>
    <centerrow>
      <primarybutton onClick="HelloClick">Say hello</primarybutton>
      <outlinebutton onClick="CloseWindow">Close</outlinebutton>
    </centerrow>
  </cell>
);
