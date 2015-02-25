
all:
	pike78 build.pike

nominify:
	pike78 -DNO_MINIFY build.pike

instagram:
	pike78 -DREGEN_INSTAGRAM build.pike

github:
	pike78 -DREGEN_GITHUB build.pike

linkedin:
	pike78 -DREGEN_LINKEDIN build.pike

fresh:
	@rm -f  ../*.html
	@rm -Rf ../assets
	@rm -Rf ../github
	@rm -Rf ../linkedin
	pike78 -DREGEN_INSTAGRAM -DREGEN_GITHUB -DREGEN_LINKEDIN build.pike
