// Indirect loader of the symbol index for Protocols.SNMP.protocol.

// Inherit Stdio.UDP.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/UDP/load_index.js", "Stdio.UDP");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/SNMP/protocol/index.js", false, ["Stdio.UDP"]);
