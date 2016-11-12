// Indirect loader of the symbol index for Crypto.None.

// Inherit Crypto.AE.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/AE/load_index.js", "Crypto.AE");

// Inherit Crypto.MAC.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/MAC/load_index.js", "Crypto.MAC");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/None/index.js", false, ["Crypto.AE","Crypto.MAC"]);
