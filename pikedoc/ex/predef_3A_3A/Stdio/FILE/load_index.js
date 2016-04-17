// Indirect loader of the symbol index for Stdio.File.

// Inherit Stdio.Fd.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Fd/load_index.js", "Stdio.Fd");

PikeDoc.loadScript("ex/predef_3A_3A/Stdio/File/index.js", false, ["Stdio.Fd"]);
