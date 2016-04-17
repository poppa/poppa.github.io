// Indirect loader of the symbol index for GTK2.FileChooserWidget.

// Inherit GTK2.FileChooser.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/FileChooser/load_index.js", "GTK2.FileChooser");

// Inherit GTK2.Vbox.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/Vbox/load_index.js", "GTK2.Vbox");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/FileChooserWidget/index.js", false, ["GTK2.FileChooser","GTK2.Vbox"]);
