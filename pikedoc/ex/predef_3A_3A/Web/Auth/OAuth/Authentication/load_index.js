// Indirect loader of the symbol index for Web.Auth.OAuth.Authentication.

// Inherit Web.Auth.OAuth.Client.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth/Client/load_index.js", "Web.Auth.OAuth.Client");

// Inherit Web.Auth.OAuth2.Client.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth2/Client/load_index.js", "Web.Auth.OAuth2.Client");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth/Authentication/index.js", false, ["Web.Auth.OAuth.Client","Web.Auth.OAuth2.Client"]);
