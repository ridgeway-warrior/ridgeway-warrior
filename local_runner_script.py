from subprocess import run

from os import chdir

chdir("./video-maker")
run(["pnpm", "remotion", "render", "MyComp", "../ig-reel-uploader/video.mp4"])
chdir("../ig-reel-uploader")
run(["node", "index.js"])
