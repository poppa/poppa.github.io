// Indirect loader of the symbol index for __builtin.Nettle.MAC.

// Inherit __builtin.Nettle.__Hash.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/__Hash/load_index.js", "__builtin.Nettle.__Hash");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/MAC/index.js", false, ["__builtin.Nettle.__Hash"]);
