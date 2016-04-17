// Indirect loader of the symbol index for NetUtils.IpRangeLookup()->Range.

// Inherit NetUtils.NetMask.
PikeDoc.loadScript("ex/predef_3A_3A/NetUtils/NetMask/load_index.js", "NetUtils.NetMask");

PikeDoc.loadScript("ex/predef_3A_3A/NetUtils/IpRangeLookup/Range/index.js", false, ["NetUtils.NetMask"]);
