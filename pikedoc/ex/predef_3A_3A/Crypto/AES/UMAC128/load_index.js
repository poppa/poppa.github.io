// Indirect loader of the symbol index for Crypto.AES.UMAC128.

// Inherit Nettle.UMAC128_AES.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/UMAC128_AES/load_index.js", "Nettle.UMAC128_AES");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AES/UMAC128/index.js", false, ["Nettle.UMAC128_AES"]);
