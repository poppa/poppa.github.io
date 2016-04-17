// Indirect loader of the symbol index for Nettle.BlockCipher()->PCBC.State.

// Inherit Nettle.BlockCipher()->CBC.State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/CBC/State/load_index.js", "Nettle.BlockCipher()->CBC.State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/PCBC/State/index.js", false, ["Nettle.BlockCipher()->CBC.State"]);
