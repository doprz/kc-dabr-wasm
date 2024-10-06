/* tslint:disable */
/* eslint-disable */
/**
 * @param {string} b64_s
 * @returns {string}
 */
export function d_b64(b64_s: string): string;
/**
 */
export class KC {
    free(): void;
    /**
     * @returns {KC}
     */
    static new(): KC;
    /**
     * @param {number} key
     * @returns {boolean}
     */
    input(key: number): boolean;
}

export type InitInput =
    | RequestInfo
    | URL
    | Response
    | BufferSource
    | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly d_b64: (a: number, b: number, c: number) => void;
    readonly __wbg_kc_free: (a: number, b: number) => void;
    readonly kc_new: () => number;
    readonly kc_input: (a: number, b: number) => number;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (
        a: number,
        b: number,
        c: number,
        d: number,
    ) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(
    module: { module: SyncInitInput } | SyncInitInput,
): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init(
    module_or_path?:
        | { module_or_path: InitInput | Promise<InitInput> }
        | InitInput
        | Promise<InitInput>,
): Promise<InitOutput>;
