# Update this file from a profile with:
# curl -O https://github.com/open-contracting/standard_profile_template/blob/master/build-profile.py

import os
import sys

from ocdsdocumentationsupport import build_profile

basedir = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.join(basedir, '..', 'docs'))

from conf import standard_version, extension_versions  # noqa

build_profile(basedir, standard_version, extension_versions)
