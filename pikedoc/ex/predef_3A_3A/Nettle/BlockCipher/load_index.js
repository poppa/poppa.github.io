// Indirect loader of the symbol index for Nettle.BlockCipher.

// Inherit __builtin.Nettle.BlockCipher.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/BlockCipher/load_index.js", "__builtin.Nettle.BlockCipher");

// Inherit Nettle.BufferedCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/load_index.js", "Nettle.BufferedCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/index.js", false, ["__builtin.Nettle.BlockCipher","Nettle.BufferedCipher"]);
