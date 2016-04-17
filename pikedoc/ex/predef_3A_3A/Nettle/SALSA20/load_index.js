// Indirect loader of the symbol index for Nettle.SALSA20.

// Inherit Nettle.BlockCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/load_index.js", "Nettle.BlockCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SALSA20/index.js", false, ["Nettle.BlockCipher"]);
