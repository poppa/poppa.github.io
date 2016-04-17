// Indirect loader of the symbol index for Protocols.Line.smtp_style.

// Inherit Protocols.Line.simple.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Line/simple/load_index.js", "Protocols.Line.simple");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Line/smtp_style/index.js", false, ["Protocols.Line.simple"]);
