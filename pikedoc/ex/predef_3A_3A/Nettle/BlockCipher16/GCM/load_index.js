// Indirect loader of the symbol index for Nettle.BlockCipher16()->GCM.

// Inherit __builtin.Nettle.AEAD.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AEAD/load_index.js", "__builtin.Nettle.AEAD");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher16/GCM/index.js", false, ["__builtin.Nettle.AEAD"]);
