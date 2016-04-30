// Indirect loader of the symbol index for Protocols.IMAP.server.

// Inherit Protocols.Line.imap_style.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Line/imap_style/load_index.js", "Protocols.Line.imap_style");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/IMAP/server/index.js", false, ["Protocols.Line.imap_style"]);
