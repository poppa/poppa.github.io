// Indirect loader of the symbol index for Filesystem.Zip._ZipFS.

// Inherit Filesystem.System.
PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/System/load_index.js", "Filesystem.System");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Zip/_ZipFS/index.js", false, ["Filesystem.System"]);
