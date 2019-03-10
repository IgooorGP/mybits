"""
Module with configuration hooks for pytest.
"""
import os
import shutil


def pytest_itemcollected(item):
    """
    Pytest hook which adds the collected pytest item docstring to the test node name
    in the test reports. Otherwise, adds the test function name as usual.
    """
    item_node = item.obj
    item_name = item_node.__doc__.strip() if item_node.__doc__ else item_node.__name__

    if item_name:
        item._nodeid = item_name


def pytest_sessionfinish(session, exitstatus):
    """
    Removes the media folder used only for the tests.
    """
    TEST_MEDIA_ROOT = "./backbits/tests/media/"
    shutil.rmtree(TEST_MEDIA_ROOT)
