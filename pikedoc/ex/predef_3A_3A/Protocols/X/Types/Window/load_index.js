// Indirect loader of the symbol index for Protocols.X.Types.Window.

// Inherit Protocols.X.Types.Drawable.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/X/Types/Drawable/load_index.js", "Protocols.X.Types.Drawable");

// Inherit Protocols.X.KeySyms.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/X/KeySyms/load_index.js", "Protocols.X.KeySyms");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/X/Types/Window/index.js", false, ["Protocols.X.Types.Drawable","Protocols.X.KeySyms"]);
