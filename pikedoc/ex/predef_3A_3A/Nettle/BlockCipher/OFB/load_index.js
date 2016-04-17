// Indirect loader of the symbol index for Nettle.BlockCipher()->OFB.

// Inherit Nettle.BufferedCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/load_index.js", "Nettle.BufferedCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/OFB/index.js", false, ["Nettle.BufferedCipher"]);
