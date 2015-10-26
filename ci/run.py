import os
from setuptools.command.easy_install import main as install

install(['--user', 'PyYAML'])

import yaml

print yaml.load("""
language: node_js

before_script:
  - which python
  - python --version

script:
  - python ci/run.py

branches:
  only:
    - master
    - develop
    - /^feature\/.*$/

""")

print yaml.dump({'name': "The Cloak 'Colluin'", 'depth': 5, 'rarity': 45,
	'weight': 10, 'cost': 50000, 'flags': ['INT', 'WIS', 'SPEED', 'STEALTH']})
