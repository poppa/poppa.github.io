// Indirect loader of the symbol index for Protocols.NNTP.client.

// Inherit Protocols.NNTP.protocol.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/NNTP/protocol/load_index.js", "Protocols.NNTP.protocol");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/NNTP/client/index.js", false, ["Protocols.NNTP.protocol"]);
