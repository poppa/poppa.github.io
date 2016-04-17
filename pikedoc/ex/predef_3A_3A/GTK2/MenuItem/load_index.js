// Indirect loader of the symbol index for GTK2.MenuItem.

// Inherit GTK2.Activatable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Activatable/load_index.js", "GTK2.Activatable");

// Inherit GTK2.Item.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Item/load_index.js", "GTK2.Item");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/MenuItem/index.js", false, ["GTK2.Activatable","GTK2.Item"]);
