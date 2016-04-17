// Indirect loader of the symbol index for GTK2.RecentChooserMenu.

// Inherit GTK2.Activatable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Activatable/load_index.js", "GTK2.Activatable");

// Inherit GTK2.Menu.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Menu/load_index.js", "GTK2.Menu");

// Inherit GTK2.RecentChooser.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/RecentChooser/load_index.js", "GTK2.RecentChooser");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/RecentChooserMenu/index.js", false, ["GTK2.Activatable","GTK2.Menu","GTK2.RecentChooser"]);
