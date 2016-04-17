// Indirect loader of the symbol index for Protocols.TELNET.Readline.

// Inherit Protocols.TELNET.LineMode.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/TELNET/LineMode/load_index.js", "Protocols.TELNET.LineMode");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/TELNET/Readline/index.js", false, ["Protocols.TELNET.LineMode"]);
