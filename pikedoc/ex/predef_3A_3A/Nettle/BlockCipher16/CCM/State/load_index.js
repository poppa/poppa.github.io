// Indirect loader of the symbol index for Nettle.BlockCipher16()->CCM.State.

// Inherit Nettle.BlockCipher()->CTR.State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/CTR/State/load_index.js", "Nettle.BlockCipher()->CTR.State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher16/CCM/State/index.js", false, ["Nettle.BlockCipher()->CTR.State"]);
