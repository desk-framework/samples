import { JSX } from "desk-frame";

export default (
  <cell>
    <label textStyle={{ fontSize: 36, bold: true }}>%[count]</label>
    <spacer height={32} />
    <centerrow>
      <outlinebutton onClick="CountDown">Down</outlinebutton>
      <outlinebutton onClick="CountUp">Up</outlinebutton>
    </centerrow>
  </cell>
);
