// Indirect loader of the symbol index for Nettle.BlockCipher()->CFB.State.

// Inherit Nettle.Cipher()->State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Cipher/State/load_index.js", "Nettle.Cipher()->State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher/CFB/State/index.js", false, ["Nettle.Cipher()->State"]);
