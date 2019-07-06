#!/bin/python

import os
import re

list = []
for f in os.listdir("."):
    if (re.match(r"20.*html", f)):
        list.insert(0, f)

with open('all.txt', 'w') as f:
    for item in list:
        f.write("%s\n" % item)

