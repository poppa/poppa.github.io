// Indirect loader of the symbol index for Tools.Standalone.forkd()->ForkStream.

// Inherit Stdio.File.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/File/load_index.js", "Stdio.File");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/Standalone/forkd/ForkStream/index.js", false, ["Stdio.File"]);
