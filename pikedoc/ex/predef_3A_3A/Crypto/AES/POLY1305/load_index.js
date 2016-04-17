// Indirect loader of the symbol index for Crypto.AES.POLY1305.

// Inherit Nettle.POLY1305_AES.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/POLY1305_AES/load_index.js", "Nettle.POLY1305_AES");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AES/POLY1305/index.js", false, ["Nettle.POLY1305_AES"]);
