// Indirect loader of the symbol index for Web.Auth.Github.

// Inherit Web.Auth.OAuth2.Client.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth2/Client/load_index.js", "Web.Auth.OAuth2.Client");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/Github/index.js", false, ["Web.Auth.OAuth2.Client"]);
