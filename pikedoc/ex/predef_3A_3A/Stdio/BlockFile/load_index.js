// Indirect loader of the symbol index for Stdio.BlockFile.

// Inherit Stdio.Stream.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Stream/load_index.js", "Stdio.Stream");

PikeDoc.loadScript("ex/predef_3A_3A/Stdio/BlockFile/index.js", false, ["Stdio.Stream"]);
