// Indirect loader of the symbol index for __builtin.Nettle.AEAD()->State.

// Inherit __builtin.Nettle.__Hash()->State.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/__Hash/State/load_index.js", "__builtin.Nettle.__Hash()->State");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AEAD/State/index.js", false, ["__builtin.Nettle.__Hash()->State"]);
