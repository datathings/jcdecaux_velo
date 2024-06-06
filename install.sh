#!/bin/bash
set -e
export GREYCAT_DIR=${GREYCAT_HOME:-"$HOME/.greycat"}
export GREYCAT_ARCH="x64"
if [[ $(uname -m) == 'arm64' ]]; then
    GREYCAT_ARCH="arm64"
fi
export GREYCAT_OS="linux"
if [[ $(uname) == 'Darwin' ]]; then
    GREYCAT_OS="apple"
fi
export GREYCAT_TARGET="${GREYCAT_ARCH}-${GREYCAT_OS}"
export GREYCAT_BRANCH="stable"
export GREYCAT_CORE_VERSION="6.10/6.10.64-stable"
export GREYCAT_LANG_VERSION="6.10/6.10.45-stable"
export GREYCAT_EXPLORER_VERSION="6.10/6.10.23-stable"
export GREYCAT_CORE_VERSION_ARCH=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/${GREYCAT_TARGET}\//")

export GREYCAT_CORE_VERSION_ARM64_APPLE=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/arm64-apple\//")
export GREYCAT_CORE_VERSION_X64_APPLE=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/x64-apple\//")
export GREYCAT_CORE_VERSION_ARM64_WINDOWS=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/arm64-windows\//")
export GREYCAT_CORE_VERSION_X64_WINDOWS=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/x64-windows\//")
export GREYCAT_CORE_VERSION_ARM64_LINUX=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/arm64-linux\//")
export GREYCAT_CORE_VERSION_X64_LINUX=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/x64-linux\//")
curl -qsL https://get.greycat.io/files/core/${GREYCAT_BRANCH}/${GREYCAT_CORE_VERSION_ARCH}.zip -o tmp.zip && unzip -d ${GREYCAT_DIR} -oqq tmp.zip && rm tmp.zip
curl -qsL https://get.greycat.io/files/lang/${GREYCAT_BRANCH}/${GREYCAT_LANG_VERSION}.zip -o tmp.zip && unzip -d ${GREYCAT_DIR} -oqq tmp.zip && rm tmp.zip
curl -qsL https://get.greycat.io/files/apps/explorer/${GREYCAT_BRANCH}/${GREYCAT_EXPLORER_VERSION}.zip -o tmp.zip && unzip -d "$GREYCAT_DIR" -oqq tmp.zip && rm tmp.zip