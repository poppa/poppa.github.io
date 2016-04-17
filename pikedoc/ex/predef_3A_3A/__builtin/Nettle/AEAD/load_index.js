// Indirect loader of the symbol index for __builtin.Nettle.AEAD.

// Inherit __builtin.Nettle.AE.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AE/load_index.js", "__builtin.Nettle.AE");

// Inherit __builtin.Nettle.__Hash.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/__Hash/load_index.js", "__builtin.Nettle.__Hash");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AEAD/index.js", false, ["__builtin.Nettle.AE","__builtin.Nettle.__Hash"]);
