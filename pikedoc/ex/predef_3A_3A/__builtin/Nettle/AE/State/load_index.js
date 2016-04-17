// Indirect loader of the symbol index for __builtin.Nettle.AE()->State.

// Inherit __builtin.Nettle.Cipher()->State.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/Cipher/State/load_index.js", "__builtin.Nettle.Cipher()->State");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AE/State/index.js", false, ["__builtin.Nettle.Cipher()->State"]);
