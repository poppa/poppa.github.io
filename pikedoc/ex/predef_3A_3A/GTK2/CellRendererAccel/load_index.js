// Indirect loader of the symbol index for GTK2.CellRendererAccel.

// Inherit GTK2.CellRendererText.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellRendererText/load_index.js", "GTK2.CellRendererText");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/CellRendererAccel/index.js", false, ["GTK2.CellRendererText"]);
