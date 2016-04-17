// Indirect loader of the symbol index for Crypto.MAC.

// Inherit Nettle.MAC.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MAC/load_index.js", "Nettle.MAC");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/MAC/index.js", false, ["Nettle.MAC"]);
