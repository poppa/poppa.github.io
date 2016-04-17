// Indirect loader of the symbol index for SSL.Port.

// Inherit Stdio.Port.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Port/load_index.js", "Stdio.Port");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Port/index.js", false, ["Stdio.Port"]);
