// Indirect loader of the symbol index for Process.TraceProcess.

// Inherit Process.create_process.
PikeDoc.loadScript("ex/predef_3A_3A/Process/create_process/load_index.js", "Process.create_process");

PikeDoc.loadScript("ex/predef_3A_3A/Process/TraceProcess/index.js", false, ["Process.create_process"]);
