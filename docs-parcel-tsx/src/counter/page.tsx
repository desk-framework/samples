import { JSX } from "@desk-framework/frame-core";

export default (
  <cell>
    <label labelStyle={{ fontSize: 36, bold: true }}>%[count]</label>
    <spacer height={32} />
    <row align="center">
      <button onClick="CountDown">Down</button>
      <button onClick="CountUp">Up</button>
    </row>
  </cell>
);
