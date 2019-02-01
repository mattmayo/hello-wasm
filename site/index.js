const js = import("./node_modules/@mattmayo/hello-wasm/hello_wasm.js");
js.then(js => {
    js.greet("WebAssembly");
});