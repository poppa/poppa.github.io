// Indirect loader of the symbol index for GTK2.EntryCompletion.

// Inherit GTK2.CellLayout.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellLayout/load_index.js", "GTK2.CellLayout");

// Inherit GTK2.G.Object.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/G/Object/load_index.js", "GTK2.G.Object");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/EntryCompletion/index.js", false, ["GTK2.CellLayout","GTK2.G.Object"]);
