// Indirect loader of the symbol index for Web.RSS.Textinput.

// Inherit Web.RSS.Thing.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RSS/Thing/load_index.js", "Web.RSS.Thing");

PikeDoc.loadScript("ex/predef_3A_3A/Web/RSS/Textinput/index.js", false, ["Web.RSS.Thing"]);
