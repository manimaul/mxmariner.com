#!/usr/bin/env bash

function k8s_login() {
  kubectl create namespace mxmariner
  kubectl delete secret --namespace mxmariner ghreg
  kubectl create secret --namespace mxmariner docker-registry ghreg \
    --docker-server=ghcr.io --docker-username=$GH_USER --docker-password=$GH_TOKEN --docker-email=$GH_EMAIL
}

function print_token() {
  echo "user = $GH_USER"
  echo "token = $GH_TOKEN"
  echo "email = $GH_EMAIL"
}

function docker_login() {
  echo "$GH_TOKEN" | docker login ghcr.io -u manimaul --password-stdin
}

function istio_inject() {
  kubectl label namespace mxmariner istio-injection=enable
}

help() {
   echo "Login to the GitHub Container Registry"
   echo
   echo "arguments:"
   echo "print_token  Print the token"
   echo "docker_login Login to docker"
   echo "k8s_login    Add k8s container pull credential secret to the mga namespace"
   echo "help         Print this Help."
   echo
}

eval "$1"

