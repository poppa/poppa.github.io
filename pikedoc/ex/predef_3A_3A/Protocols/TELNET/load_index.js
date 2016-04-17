// Indirect loader of the symbol index for Protocols.TELNET.

// Inherit Protocols.TELNET.TelnetCodes.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/TELNET/TelnetCodes/load_index.js", "Protocols.TELNET.TelnetCodes");

// Inherit Protocols.TELNET.Telopts.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/TELNET/Telopts/load_index.js", "Protocols.TELNET.Telopts");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/TELNET/index.js", false, ["Protocols.TELNET.TelnetCodes","Protocols.TELNET.Telopts"]);
