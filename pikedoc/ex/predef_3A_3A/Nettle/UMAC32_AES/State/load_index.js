// Indirect loader of the symbol index for Nettle.UMAC32_AES()->State.

// Inherit Nettle.MAC()->State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MAC/State/load_index.js", "Nettle.MAC()->State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/UMAC32_AES/State/index.js", false, ["Nettle.MAC()->State"]);
