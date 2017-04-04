from setuptools import setup, find_packages
import os

setup(
    name='jinja2-live-parser',
    version="2017.4",
    packages=find_packages(),
    url='https://github.com/qn7o/jinja2-live-parser',
    license='MIT',
    author='Antonin Bourguignon',
    author_email='antonin.bourguignon@gmail.com',
    description='Web-based Jinja template tester',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Web Environment',
        'Framework :: Flask',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: Unix',
        'Operating System :: Windows',
        'Operating System :: MacOS',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 2 :: Only'
    ],
    install_requires=[line.strip() for line in open(os.path.join(os.getcwd(),'requirements.txt')).readlines()],
    include_package_data=True,
    entry_points={},
    scripts=[]
)
