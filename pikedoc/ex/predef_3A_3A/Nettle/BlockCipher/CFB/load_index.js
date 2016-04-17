// Indirect loader of the symbol index for Nettle.BlockCipher()->CFB.

// Inherit Nettle.BufferedCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/load_index.js", "Nettle.BufferedCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/CFB/index.js", false, ["Nettle.BufferedCipher"]);
