// Indirect loader of the symbol index for GTK2.ComboBoxEntry.

// Inherit GTK2.CellEditable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellEditable/load_index.js", "GTK2.CellEditable");

// Inherit GTK2.CellLayout.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellLayout/load_index.js", "GTK2.CellLayout");

// Inherit GTK2.ComboBox.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/ComboBox/load_index.js", "GTK2.ComboBox");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/ComboBoxEntry/index.js", false, ["GTK2.CellEditable","GTK2.CellLayout","GTK2.ComboBox"]);
