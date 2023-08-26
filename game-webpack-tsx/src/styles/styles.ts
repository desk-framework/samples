import { UIColor, UIStyle } from "desk-frame";

export default {
  gameIconButton: UIStyle.BorderlessButton.extend({
    dimensions: { minWidth: "2em" },
  }),
  timerLabel: UIStyle.Label.extend({
    textStyle: { align: "center" },
    dimensions: { minWidth: "5em" },
  }),
  sumText: UIStyle.Label.extend({
    textStyle: { fontSize: "3em" },
  }),
  operandText: UIStyle.Label.extend({
    textStyle: { fontSize: "3.5em", align: "center" },
    dimensions: { minWidth: "2em" },
  }),
  answerText: UIStyle.Label.extend({
    textStyle: { fontSize: "3.5em", align: "center" },
    dimensions: { minWidth: "3em" },
  }),
  answerField: UIStyle.BorderlessTextField.extend({
    textStyle: { fontSize: "3.5em", align: "center" },
    decoration: { borderColor: UIColor.Text, borderThickness: { bottom: 2 } },
    dimensions: { maxWidth: "3em" },
  }),
  settingsDialog: UIStyle.Cell.extend({
    dimensions: { width: "100%", maxWidth: 400 },
    position: { gravity: "center" },
    decoration: {
      background: UIColor.Background,
      dropShadow: 0.5,
      padding: 32,
    },
  }),
  settingsNumberInputField: UIStyle.TextField.extend({
    textStyle: { align: "end" },
    dimensions: { maxWidth: "4em" },
  }),
};
