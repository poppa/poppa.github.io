// Indirect loader of the symbol index for GTK2.SourceBuffer.

// Inherit GTK2.TextBuffer.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TextBuffer/load_index.js", "GTK2.TextBuffer");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/SourceBuffer/index.js", false, ["GTK2.TextBuffer"]);
