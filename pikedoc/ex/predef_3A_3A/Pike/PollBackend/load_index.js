// Indirect loader of the symbol index for Pike.PollBackend.

// Inherit Pike.__Backend.
PikeDoc.loadScript("ex/predef_3A_3A/Pike/__Backend/load_index.js", "Pike.__Backend");

PikeDoc.loadScript("ex/predef_3A_3A/Pike/PollBackend/index.js", false, ["Pike.__Backend"]);
