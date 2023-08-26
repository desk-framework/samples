import { JSX, UIColor } from "desk-frame";
import styles from "~/styles/styles";

export default (
  <cell style={styles.settingsDialog}>
    <h3>Settings</h3>
    <spacer height={32} />
    <column spacing={8}>
      <row>
        <expandedlabel>Multiply up to</expandedlabel>
        <textfield
          style={styles.settingsNumberInputField}
          formField="maxNumber"
          type="tel"
          requestFocus
          onEnterKeyPress="Confirm"
        />
      </row>
      <row>
        <expandedlabel>Timer (seconds)</expandedlabel>
        <textfield
          style={styles.settingsNumberInputField}
          formField="seconds"
          type="tel"
          onEnterKeyPress="Confirm"
        />
      </row>
    </column>
    <separator margin={32} color={UIColor.Text} />
    <oppositerow>
      <borderlessbutton onClick="Confirm">Confirm</borderlessbutton>
    </oppositerow>
  </cell>
);
