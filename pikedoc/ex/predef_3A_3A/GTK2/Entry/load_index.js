// Indirect loader of the symbol index for GTK2.Entry.

// Inherit GTK2.CellEditable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellEditable/load_index.js", "GTK2.CellEditable");

// Inherit GTK2.Editable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Editable/load_index.js", "GTK2.Editable");

// Inherit GTK2.Widget.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Widget/load_index.js", "GTK2.Widget");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Entry/index.js", false, ["GTK2.CellEditable","GTK2.Editable","GTK2.Widget"]);
