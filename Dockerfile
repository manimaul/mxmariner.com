# Stage 1 --------------------------------------------------------------------------------------------------------------
FROM rust:1.46.0-slim-buster as build

RUN mkdir build_dir
WORKDIR /build_dir

COPY ./server/Cargo.lock /build_dir/Cargo.lock
COPY ./server/Cargo.toml /build_dir/Cargo.toml
COPY ./server/src /build_dir/src

RUN cargo build --release

## Stage 2 --------------------------------------------------------------------------------------------------------------
FROM debian:buster-slim

COPY --from=build /build_dir/target/release/server /usr/bin/server
COPY build /mxweb

CMD server /mxweb
