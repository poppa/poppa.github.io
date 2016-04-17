// Indirect loader of the symbol index for Crypto.AES.UMAC96.

// Inherit Nettle.UMAC96_AES.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/UMAC96_AES/load_index.js", "Nettle.UMAC96_AES");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AES/UMAC96/index.js", false, ["Nettle.UMAC96_AES"]);
