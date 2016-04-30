// Indirect loader of the symbol index for Stdio.FILE.

// Inherit Stdio.File.
PikeDoc.loadScript("ex/7.8_3A_3A/Stdio/File/load_index.js", "Stdio.File");

PikeDoc.loadScript("ex/7.8_3A_3A/Stdio/FILE/index.js", false, ["Stdio.File"]);
