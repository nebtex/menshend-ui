#!/usr/bin/env python
import yaml, json, sys
import os
import glob
files = [os.path.abspath(x) for x in glob.glob('*.yml')]
files += [os.path.abspath(x) for x in glob.glob('./**/*.yml')]
for _file in files:
    f = open(_file)
    j = open(_file.replace(".yml", ".json"), "w+")
    json.dump(yaml.load(f), j, sort_keys=True, indent=2)
print("ok")
#ys.stdout.write(json.dumps(yaml.load(sys.stdin), sort_keys=True, indent=2)) 