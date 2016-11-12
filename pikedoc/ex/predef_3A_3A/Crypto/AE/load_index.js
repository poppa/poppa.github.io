// Indirect loader of the symbol index for Crypto.AE.

// Inherit __builtin.Nettle.AE.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AE/load_index.js", "__builtin.Nettle.AE");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AE/index.js", false, ["__builtin.Nettle.AE"]);
