// Indirect loader of the symbol index for Nettle.BlockCipher16()->CCM.

// Inherit __builtin.Nettle.AEAD.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AEAD/load_index.js", "__builtin.Nettle.AEAD");

// Inherit Nettle.BlockCipher()->CTR.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/CTR/load_index.js", "Nettle.BlockCipher()->CTR");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher16/CCM/index.js", false, ["__builtin.Nettle.AEAD","Nettle.BlockCipher()->CTR"]);
