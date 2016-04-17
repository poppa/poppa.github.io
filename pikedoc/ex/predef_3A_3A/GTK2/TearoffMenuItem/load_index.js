// Indirect loader of the symbol index for GTK2.TearoffMenuItem.

// Inherit GTK2.Activatable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Activatable/load_index.js", "GTK2.Activatable");

// Inherit GTK2.MenuItem.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/MenuItem/load_index.js", "GTK2.MenuItem");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TearoffMenuItem/index.js", false, ["GTK2.Activatable","GTK2.MenuItem"]);
