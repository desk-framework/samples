import { UIColumn, UIList, bound } from "desk-frame";
import _listItem from "./_list-item";

export default UIColumn.with(
  UIList.with(
    { items: bound.list("companies"), allowKeyboardFocus: true },
    _listItem
  )
);