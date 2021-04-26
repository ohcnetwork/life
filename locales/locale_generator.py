import sys
import os

args = sys.argv

if len(args) <= 1:
    raise Exception("Folder name should be provided")

folder_name = args[1]

new_folder = "locales/" + folder_name

def create_file(file_name):
    new_file = open(new_folder + file_name, "a")
    template_file = open("locales/en" + file_name, "r", encoding='utf-8')
    for line in template_file:
        new_file.write(line)

try:
    os.mkdir(new_folder)
    create_file("/about.js")
    create_file("/campaigns.js")
    create_file("/data.js")
    create_file("/home.js")
    create_file("/index.js")
    create_file("/stateSlug.js")
except Exception as e:
    print(e)