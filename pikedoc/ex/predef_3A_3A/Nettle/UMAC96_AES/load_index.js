// Indirect loader of the symbol index for Nettle.UMAC96_AES.

// Inherit Nettle.MAC.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MAC/load_index.js", "Nettle.MAC");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/UMAC96_AES/index.js", false, ["Nettle.MAC"]);
