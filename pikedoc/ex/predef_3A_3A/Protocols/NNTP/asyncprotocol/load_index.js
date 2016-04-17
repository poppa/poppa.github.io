// Indirect loader of the symbol index for Protocols.NNTP.asyncprotocol.

// Inherit Protocols.NNTP.protocolhelper.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/NNTP/protocolhelper/load_index.js", "Protocols.NNTP.protocolhelper");

// Inherit Stdio.File.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/File/load_index.js", "Stdio.File");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/NNTP/asyncprotocol/index.js", false, ["Protocols.NNTP.protocolhelper","Stdio.File"]);
