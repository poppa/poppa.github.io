// Indirect loader of the symbol index for Search.Queue.Base.

// Inherit Web.Crawler.Queue.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Crawler/Queue/load_index.js", "Web.Crawler.Queue");

PikeDoc.loadScript("ex/predef_3A_3A/Search/Queue/Base/index.js", false, ["Web.Crawler.Queue"]);
