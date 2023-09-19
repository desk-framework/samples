import { JSX, UIColor } from "@desk-framework/frame-core";
import styles from "~/styles/styles";

export default (
	<cell cellStyle={styles.SettingsDialog} position={{ gravity: "center" }}>
		<h3>Settings</h3>
		<spacer height={32} />
		<column spacing={8}>
			<row>
				<label>Multiply up to</label>
				<spacer />
				<textfield
					textFieldStyle={styles.SettingsNumberInputField}
					formField="maxNumber"
					type="tel"
					requestFocus
					onEnterKeyPress="Confirm"
				/>
			</row>
			<row>
				<label>Timer (seconds)</label>
				<spacer />
				<textfield
					textFieldStyle={styles.SettingsNumberInputField}
					formField="seconds"
					type="tel"
					onEnterKeyPress="Confirm"
				/>
			</row>
		</column>
		<separator margin={32} color={UIColor["@text"]} />
		<row align="end">
			<plainbutton onClick="Confirm">Confirm</plainbutton>
		</row>
	</cell>
);
