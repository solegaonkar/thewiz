#!/bin/python

import os
import re
import json

class Blog:
    fileName = ""
    title = ""
    intro = ""

    def __init__(self, fileName):
        self.fileName = fileName.strip()
        print(self.fileName)
        with open(self.fileName, 'r', encoding='utf-8') as f:
            html = f.read()
            self.title = html.split('title>')[1][:-2]
            self.intro = html.split('p>')[1][0:205]

    def get_json(self):
        return self.__dict__



class BlogList:
    index_file = ""

    def __init__(self, index_file):
        self.indexFile = index_file
        self.blog_list = []
        with open(self.indexFile, 'r') as f:
            for name in f.readlines():
                self.blog_list.insert(0, Blog(name).get_json())

    def save_json(self, f):
        with open(f, 'w') as a:
            a.write(str(json.dumps(self.blog_list)))


with open('all.txt', 'w') as a:
    for f in os.listdir("."):
        if (re.match(r"20.*html", f)):
            a.write(f + "\n")


BlogList('all.txt').save_json("all.json")
BlogList('programming.txt').save_json("programming.json")
BlogList('cloud.txt').save_json("cloud.json")
BlogList('ai.txt').save_json("ai.json")
BlogList('togaf.txt').save_json("togaf.json")
