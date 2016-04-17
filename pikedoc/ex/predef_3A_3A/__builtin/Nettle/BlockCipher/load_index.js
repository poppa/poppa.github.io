// Indirect loader of the symbol index for __builtin.Nettle.BlockCipher.

// Inherit __builtin.Nettle.Cipher.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/Cipher/load_index.js", "__builtin.Nettle.Cipher");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/BlockCipher/index.js", false, ["__builtin.Nettle.Cipher"]);
