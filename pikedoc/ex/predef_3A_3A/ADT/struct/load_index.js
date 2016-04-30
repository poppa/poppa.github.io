// Indirect loader of the symbol index for ADT.struct.

// Inherit Stdio.Buffer.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Buffer/load_index.js", "Stdio.Buffer");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/struct/index.js", false, ["Stdio.Buffer"]);
