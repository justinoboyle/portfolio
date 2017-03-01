#!/bin/bash
# Run as root
userdel portfoliosite
adduser --disabled-password --gecos "" portfoliosite
pm2 start start.sh --name="portfolio-justinoboyle"
