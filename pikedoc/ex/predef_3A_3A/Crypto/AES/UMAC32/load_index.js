// Indirect loader of the symbol index for Crypto.AES.UMAC32.

// Inherit Nettle.UMAC32_AES.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/UMAC32_AES/load_index.js", "Nettle.UMAC32_AES");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AES/UMAC32/index.js", false, ["Nettle.UMAC32_AES"]);
