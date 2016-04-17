// Indirect loader of the symbol index for GTK2.FileChooserButton.

// Inherit GTK2.FileChooser.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/FileChooser/load_index.js", "GTK2.FileChooser");

// Inherit GTK2.Hbox.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Hbox/load_index.js", "GTK2.Hbox");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/FileChooserButton/index.js", false, ["GTK2.FileChooser","GTK2.Hbox"]);
