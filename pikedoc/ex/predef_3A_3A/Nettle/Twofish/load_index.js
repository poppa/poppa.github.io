// Indirect loader of the symbol index for Nettle.Twofish.

// Inherit Nettle.BlockCipher16.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher16/load_index.js", "Nettle.BlockCipher16");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Twofish/index.js", false, ["Nettle.BlockCipher16"]);
