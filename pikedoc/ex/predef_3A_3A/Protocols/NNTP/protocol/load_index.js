// Indirect loader of the symbol index for Protocols.NNTP.protocol.

// Inherit Protocols.NNTP.protocolhelper.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/NNTP/protocolhelper/load_index.js", "Protocols.NNTP.protocolhelper");

// Inherit Stdio.FILE.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/FILE/load_index.js", "Stdio.FILE");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/NNTP/protocol/index.js", false, ["Protocols.NNTP.protocolhelper","Stdio.FILE"]);
