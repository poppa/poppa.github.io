// Indirect loader of the symbol index for Nettle.UMAC64_AES.

// Inherit Nettle.MAC.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MAC/load_index.js", "Nettle.MAC");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/UMAC64_AES/index.js", false, ["Nettle.MAC"]);
