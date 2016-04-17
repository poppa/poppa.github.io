// Indirect loader of the symbol index for Filesystem.Tar._TarFS.

// Inherit Filesystem.System.
PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/System/load_index.js", "Filesystem.System");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Tar/_TarFS/index.js", false, ["Filesystem.System"]);
