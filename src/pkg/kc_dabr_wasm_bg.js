let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

const lTextDecoder =
    typeof TextDecoder === 'undefined'
        ? (0, module.require)('util').TextDecoder
        : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', {
    ignoreBOM: true,
    fatal: true,
});

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (
        cachedUint8ArrayMemory0 === null ||
        cachedUint8ArrayMemory0.byteLength === 0
    ) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(
        getUint8ArrayMemory0().subarray(ptr, ptr + len),
    );
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder =
    typeof TextEncoder === 'undefined'
        ? (0, module.require)('util').TextEncoder
        : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString =
    typeof cachedTextEncoder.encodeInto === 'function'
        ? function (arg, view) {
              return cachedTextEncoder.encodeInto(arg, view);
          }
        : function (arg, view) {
              const buf = cachedTextEncoder.encode(arg);
              view.set(buf);
              return {
                  read: arg.length,
                  written: buf.length,
              };
          };

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0()
            .subarray(ptr, ptr + buf.length)
            .set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7f) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, (len = offset + arg.length * 3), 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (
        cachedDataViewMemory0 === null ||
        cachedDataViewMemory0.buffer.detached === true ||
        (cachedDataViewMemory0.buffer.detached === undefined &&
            cachedDataViewMemory0.buffer !== wasm.memory.buffer)
    ) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}
/**
 * @param {string} b64_s
 * @returns {string}
 */
export function d_b64(b64_s) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(
            b64_s,
            wasm.__wbindgen_malloc,
            wasm.__wbindgen_realloc,
        );
        const len0 = WASM_VECTOR_LEN;
        wasm.d_b64(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

const KCFinalization =
    typeof FinalizationRegistry === 'undefined'
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((ptr) => wasm.__wbg_kc_free(ptr >>> 0, 1));
/**
 */
export class KC {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(KC.prototype);
        obj.__wbg_ptr = ptr;
        KCFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        KCFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_kc_free(ptr, 0);
    }
    /**
     * @returns {KC}
     */
    static new() {
        const ret = wasm.kc_new();
        return KC.__wrap(ret);
    }
    /**
     * @param {number} key
     * @returns {boolean}
     */
    input(key) {
        const ret = wasm.kc_input(this.__wbg_ptr, key);
        return ret !== 0;
    }
}

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}