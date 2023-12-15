#!/usr/bin/env bash

export NODE_OPTIONS=--openssl-legacy-provider
npm install
npm run build
tag_postfix="$(date +"%m-%d-%y")_r0"
name="ghcr.io/manimaul/mxmariner.com"
docker build -t "${name}:${tag_postfix}" .
docker tag "${name}:${tag_postfix}" "${name}:latest"
docker push "${name}:latest"
docker push "${name}:${tag_postfix}"
