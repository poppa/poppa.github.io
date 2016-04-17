// Indirect loader of the symbol index for Protocols.X.Xlib.Display.

// Inherit Stdio.File.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/File/load_index.js", "Stdio.File");

// Inherit Protocols.X.Atom.atom_manager.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/X/Atom/atom_manager/load_index.js", "Protocols.X.Atom.atom_manager");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/X/Xlib/Display/index.js", false, ["Stdio.File","Protocols.X.Atom.atom_manager"]);
