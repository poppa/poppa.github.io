// Indirect loader of the symbol index for Protocols.X.Requests.PolyLine.

// Inherit Protocols.X.Requests.PolyPoint.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/X/Requests/PolyPoint/load_index.js", "Protocols.X.Requests.PolyPoint");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/X/Requests/PolyLine/index.js", false, ["Protocols.X.Requests.PolyPoint"]);
