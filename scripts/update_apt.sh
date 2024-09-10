#!/bin/bash
set -e

# Install required package
sudo apt install -y reprepro

# Define variables
APT_SERVER="SolaceLabs/apt-stm.git"
pkg_version=$1

# Clone the APT Server
git clone https://x-access-token:$GITHUB_TOKEN@github.com/$APT_SERVER

# Prepare for APT update
reprepro -b apt-stm/ --priority 0 includedeb stm stm-linux_$pkg_version\_amd64.deb

#### TEST ####
cd apt-stm/
git status
#### TEST ####


# Commit and push changes
# git config --global user.email "community@solace.com"
# git config --global user.name "SollyBot"
# git commit -am "Update stm to v$pkg_version"
# git push
