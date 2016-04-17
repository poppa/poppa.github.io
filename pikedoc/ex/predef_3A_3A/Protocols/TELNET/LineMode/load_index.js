// Indirect loader of the symbol index for Protocols.TELNET.LineMode.

// Inherit Protocols.TELNET.protocol.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/TELNET/protocol/load_index.js", "Protocols.TELNET.protocol");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/TELNET/LineMode/index.js", false, ["Protocols.TELNET.protocol"]);
