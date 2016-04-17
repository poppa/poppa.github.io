// Indirect loader of the symbol index for Nettle.BLOWFISH.

// Inherit Nettle.BlockCipher.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/load_index.js", "Nettle.BlockCipher");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BLOWFISH/index.js", false, ["Nettle.BlockCipher"]);
