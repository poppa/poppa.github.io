// Indirect loader of the symbol index for Crypto.AES.

// Inherit Nettle.AES.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/AES/load_index.js", "Nettle.AES");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AES/index.js", false, ["Nettle.AES"]);
