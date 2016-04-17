// Indirect loader of the symbol index for Geography.GeoIP.IPv4.

// Inherit Geography.GeoIP.IP.
PikeDoc.loadScript("ex/predef_3A_3A/Geography/GeoIP/IP/load_index.js", "Geography.GeoIP.IP");

PikeDoc.loadScript("ex/predef_3A_3A/Geography/GeoIP/IPv4/index.js", false, ["Geography.GeoIP.IP"]);
