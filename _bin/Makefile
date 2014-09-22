
all:
	pike build.pike

nominify:
	pike -DNO_MINIFY build.pike

instagram:
	pike -DREGEN_INSTAGRAM build.pike

github:
	pike -DREGEN_GITHUB build.pike

linkedin:
	pike -DREGEN_LINKEDIN build.pike

fresh:
	@rm -f  ../*.html
	@rm -Rf ../assets
	@rm -Rf ../github
	@rm -Rf ../linkedin
	pike -DREGEN_INSTAGRAM -DREGEN_GITHUB -DREGEN_LINKEDIN build.pike
