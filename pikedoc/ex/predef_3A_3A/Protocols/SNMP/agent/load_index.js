// Indirect loader of the symbol index for Protocols.SNMP.agent.

// Inherit Protocols.SNMP.protocol.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/SNMP/protocol/load_index.js", "Protocols.SNMP.protocol");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/SNMP/agent/index.js", false, ["Protocols.SNMP.protocol"]);
