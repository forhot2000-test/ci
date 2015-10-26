import os
from setuptools.command.easy_install import main as install

install(['--user', 'PyYAML'])

if os.system('ls -l') != 0:
	exit(1)
