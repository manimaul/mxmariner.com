FROM debian:buster

RUN apt update && apt install -y curl gnupg
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn
RUN yarn global add serve
COPY build /mxweb
CMD serve -l 80 /mxweb
