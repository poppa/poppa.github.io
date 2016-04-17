// Indirect loader of the symbol index for GTK2.TreeViewColumn.

// Inherit GTK2.CellLayout.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellLayout/load_index.js", "GTK2.CellLayout");

// Inherit GTK2.Data.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Data/load_index.js", "GTK2.Data");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeViewColumn/index.js", false, ["GTK2.CellLayout","GTK2.Data"]);
