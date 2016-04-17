// Indirect loader of the symbol index for Filesystem.System.

// Inherit Filesystem.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Base/load_index.js", "Filesystem.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/System/index.js", false, ["Filesystem.Base"]);
