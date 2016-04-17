// Indirect loader of the symbol index for Crypto.AES.UMAC64.

// Inherit Nettle.UMAC64_AES.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/UMAC64_AES/load_index.js", "Nettle.UMAC64_AES");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AES/UMAC64/index.js", false, ["Nettle.UMAC64_AES"]);
