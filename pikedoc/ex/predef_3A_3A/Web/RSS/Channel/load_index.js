// Indirect loader of the symbol index for Web.RSS.Channel.

// Inherit Web.RSS.Thing.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RSS/Thing/load_index.js", "Web.RSS.Thing");

PikeDoc.loadScript("ex/predef_3A_3A/Web/RSS/Channel/index.js", false, ["Web.RSS.Thing"]);
