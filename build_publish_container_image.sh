#!/usr/bin/env bash

yarn global add create-react-app
yarn global add react-scripts
yarn add rx-lite
yarn add react-router
yarn add react-router-dom
yarn build
tag_postfix="$(date +"%m-%d-%y")_r0"
docker build -t "manimaul/mxmariner.com:${tag_postfix}" .
docker tag "manimaul/mxmariner.com:${tag_postfix}" "manimaul/mxmariner.com:latest"
docker push "manimaul/mxmariner.com:latest"
docker push "manimaul/mxmariner.com:${tag_postfix}"
