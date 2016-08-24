#!/usr/bin/env pike81

int main(int argc, array(string) argv)
{
  if (argc < 2) {
    exit(1);
  }

  auto o = Tools.Standalone.pike_to_html();
  write("%s", o->convert(argv[1]));

  return 0;
}