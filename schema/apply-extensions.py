# Compare this file to:
# https://github.com/open-contracting/standard_profile_template/blob/master/schema/apply-extensions.py

import os
import sys

from ocds_documentation_support import apply_extensions

basedir = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.join(basedir, '..', 'docs'))

from conf import extension_registry_git_ref  # noqa

apply_extensions(basedir, extension_registry_git_ref, 'ppp', [
    'bids',
    'budget',
    'budget_project',
    'charges',
    'documentation_details',
    'finance',
    'location',
    'metrics',
    'milestone_documents',
    'performance_failures',
    'process_title',
    'qualification',
    'requirements',
    'risk_allocation',
    'shareholders',
    'signatories',
    'tariffs',
    'transaction_milestones',
])
