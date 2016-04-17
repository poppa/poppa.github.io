// Indirect loader of the symbol index for Nettle.BlockCipher()->CBC.

// Inherit Nettle.BufferedCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/load_index.js", "Nettle.BufferedCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/CBC/index.js", false, ["Nettle.BufferedCipher"]);
