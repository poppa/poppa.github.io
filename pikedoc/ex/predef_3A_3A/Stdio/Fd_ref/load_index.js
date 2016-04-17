// Indirect loader of the symbol index for Stdio.Fd_ref.

// Inherit Stdio.Fd.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Fd/load_index.js", "Stdio.Fd");

PikeDoc.loadScript("ex/predef_3A_3A/Stdio/Fd_ref/index.js", false, ["Stdio.Fd"]);
