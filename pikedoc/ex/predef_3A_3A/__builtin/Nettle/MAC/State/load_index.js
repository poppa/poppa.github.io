// Indirect loader of the symbol index for __builtin.Nettle.MAC()->State.

// Inherit __builtin.Nettle.__Hash()->State.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/__Hash/State/load_index.js", "__builtin.Nettle.__Hash()->State");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/MAC/State/index.js", false, ["__builtin.Nettle.__Hash()->State"]);
