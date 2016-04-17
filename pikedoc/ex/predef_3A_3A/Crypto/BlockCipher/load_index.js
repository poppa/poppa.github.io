// Indirect loader of the symbol index for Crypto.BlockCipher.

// Inherit Nettle.BlockCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/load_index.js", "Nettle.BlockCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/BlockCipher/index.js", false, ["Nettle.BlockCipher"]);
