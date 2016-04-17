// Indirect loader of the symbol index for Nettle.BlockCipher()->PCBC.

// Inherit Nettle.BlockCipher()->CBC.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/CBC/load_index.js", "Nettle.BlockCipher()->CBC");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/PCBC/index.js", false, ["Nettle.BlockCipher()->CBC"]);
