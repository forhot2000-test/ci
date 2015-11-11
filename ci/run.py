import os
import site
import sys


# this makes it work
if not os.path.exists(site.USER_SITE):
    os.makedirs(site.USER_SITE)

sys.path.insert(0, site.USER_SITE)

try:
    import pip
    use_pip = True
except Exception as e:
    from setuptools.command.easy_install import main as install
    use_easyinstall = True

def install_pkg(pkg_name):
    if use_pip:
        pip.main(['install', '--user', pkg_name])
    elif use_easyinstall:
        install(['--user', pkg_name])

install_pkg('PyYAML')


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
