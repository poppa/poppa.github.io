// Indirect loader of the symbol index for GTK2.ComboBox.

// Inherit GTK2.Bin.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Bin/load_index.js", "GTK2.Bin");

// Inherit GTK2.CellEditable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellEditable/load_index.js", "GTK2.CellEditable");

// Inherit GTK2.CellLayout.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellLayout/load_index.js", "GTK2.CellLayout");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/ComboBox/index.js", false, ["GTK2.Bin","GTK2.CellEditable","GTK2.CellLayout"]);
