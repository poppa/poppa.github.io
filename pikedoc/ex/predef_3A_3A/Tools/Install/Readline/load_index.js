// Indirect loader of the symbol index for Tools.Install.Readline.

// Inherit Stdio.Readline.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Readline/load_index.js", "Stdio.Readline");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/Install/Readline/index.js", false, ["Stdio.Readline"]);
