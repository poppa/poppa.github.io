// Indirect loader of the symbol index for GTK2.CellView.

// Inherit GTK2.CellLayout.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellLayout/load_index.js", "GTK2.CellLayout");

// Inherit GTK2.Widget.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Widget/load_index.js", "GTK2.Widget");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellView/index.js", false, ["GTK2.CellLayout","GTK2.Widget"]);
