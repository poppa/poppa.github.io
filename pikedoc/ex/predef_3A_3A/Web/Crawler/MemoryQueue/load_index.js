// Indirect loader of the symbol index for Web.Crawler.MemoryQueue.

// Inherit Web.Crawler.Queue.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Crawler/Queue/load_index.js", "Web.Crawler.Queue");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Crawler/MemoryQueue/index.js", false, ["Web.Crawler.Queue"]);
