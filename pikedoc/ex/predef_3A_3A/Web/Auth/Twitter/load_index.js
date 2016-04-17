// Indirect loader of the symbol index for Web.Auth.Twitter.

// Inherit Web.Auth.OAuth.Authentication.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth/Authentication/load_index.js", "Web.Auth.OAuth.Authentication");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/Twitter/index.js", false, ["Web.Auth.OAuth.Authentication"]);
