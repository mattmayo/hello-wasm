# Web Assembly with Rust
Here lies an example of how to create a wasm (web assembly) module by compiling Rust code. It is based on the following set of tutorials from Mozilla, who is a major sponsor of wasm.
- https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm

## How to execute
1. Clone this repo
1. `cd site/`
1. `npm install`
1. `npm run serve`
1.  Use a modern browser to view http://localhost:8080/ (https://www.mozilla.org/en-US/firefox/new/)

## How to compile the web site
1. Install node
1. `cd site`
1. `npm install`
1. `npm run serve`

## How to compile the Rust module (this is a bit more involved)
1. Install rust https://www.rust-lang.org/tools/install
1. `cargo install wasm-pack`
1. `npm adduser` to publish the rust module to npm (remember to update the package name in package json if you are publishing to your account)
1. `wasm-pack build --scope mynpmusername`

