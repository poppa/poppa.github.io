// Indirect loader of the symbol index for SSL.Buffer.

// Inherit Stdio.Buffer.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Buffer/load_index.js", "Stdio.Buffer");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Buffer/index.js", false, ["Stdio.Buffer"]);
