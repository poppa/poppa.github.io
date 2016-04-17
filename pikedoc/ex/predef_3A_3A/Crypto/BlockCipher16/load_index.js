// Indirect loader of the symbol index for Crypto.BlockCipher16.

// Inherit Nettle.BlockCipher16.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher16/load_index.js", "Nettle.BlockCipher16");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/BlockCipher16/index.js", false, ["Nettle.BlockCipher16"]);
