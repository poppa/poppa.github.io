// Indirect loader of the symbol index for GTK2.RecentChooserWidget.

// Inherit GTK2.RecentChooser.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/RecentChooser/load_index.js", "GTK2.RecentChooser");

// Inherit GTK2.Vbox.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Vbox/load_index.js", "GTK2.Vbox");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/RecentChooserWidget/index.js", false, ["GTK2.RecentChooser","GTK2.Vbox"]);
