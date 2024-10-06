# kc-dabr-wasm

A React hook with a WebAssembly-based Konami Code Easter Egg

`kc-dabr-wasm` is a fun and interactive React hook that adds a secret Konami Code Easter egg to your web application. When the correct sequence of keys is entered, it triggers a barrel roll animation on the page. This package uses WebAssembly for performance and includes obfuscation techniques for added security and hiding the easter egg.

## Features

-   Easy-to-use React hook
-   Implements the classic Konami Code
-   Triggers a smooth 360-degree rotation of the entire page
-   Built with WebAssembly for optimal performance
-   Obfuscated names and functions for added security and hiding the easter egg

## Installation

To install `kc-dabr-wasm`, run the following command in your project directory:

```bash
npm install kc-dabr-wasm
```

or if you're using Yarn:

```bash
yarn add kc-dabr-wasm
```

## Usage

1. Import the hook in your React component:

    ```tsx
    import useKC_DABR_WASM from 'kc-dabr-wasm';
    ```

2. Use the hook in your component:

    ```tsx
    function MyComponent() {
        useKC_DABR_WASM();

        return <Component />;
    }
    ```

3. That's it! Now, when a user enters the Konami Code (↑↑↓↓←→←→BA), the page will do a barrel roll.

## How it Works

The `useKC_DABR_WASM` hook initializes a WebAssembly module that listens for keydown events. When the correct sequence of keys is entered, it triggers a CSS transformation that rotates the entire page 360 degrees.

The package uses WebAssembly for several reasons:

1. Performance: WebAssembly runs at near-native speed, ensuring smooth execution.
2. Security: The core logic is compiled to WebAssembly, making it harder to reverse-engineer.
3. Cross-platform compatibility: WebAssembly runs in all modern browsers.

Additionally, the package employs obfuscation techniques:

-   Function and variable names are obfuscated to make the code more challenging to understand at a glance.
-   Some strings are base64 encoded to further obscure their meanings.

These obfuscation techniques add to the fun and challenge of discovering the Easter egg while also providing a degree of security against casual inspection.

## Dependencies

-   React 16.8+ (for Hooks support)
-   A modern web browser that supports WebAssembly

## License

`kc-dabr-wasm` is licensed under the MIT License

SPDX-License-Identifier: MIT
