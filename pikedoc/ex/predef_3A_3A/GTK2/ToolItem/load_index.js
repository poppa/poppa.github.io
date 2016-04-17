// Indirect loader of the symbol index for GTK2.ToolItem.

// Inherit GTK2.Activatable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Activatable/load_index.js", "GTK2.Activatable");

// Inherit GTK2.Bin.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Bin/load_index.js", "GTK2.Bin");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/ToolItem/index.js", false, ["GTK2.Activatable","GTK2.Bin"]);
