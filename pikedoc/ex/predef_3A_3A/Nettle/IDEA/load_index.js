// Indirect loader of the symbol index for Nettle.IDEA.

// Inherit Nettle.BlockCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/load_index.js", "Nettle.BlockCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/IDEA/index.js", false, ["Nettle.BlockCipher"]);
