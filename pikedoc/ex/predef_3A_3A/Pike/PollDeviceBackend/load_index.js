// Indirect loader of the symbol index for Pike.PollDeviceBackend.

// Inherit Pike.__Backend.
PikeDoc.loadScript("ex/predef_3A_3A/Pike/__Backend/load_index.js", "Pike.__Backend");

PikeDoc.loadScript("ex/predef_3A_3A/Pike/PollDeviceBackend/index.js", false, ["Pike.__Backend"]);
