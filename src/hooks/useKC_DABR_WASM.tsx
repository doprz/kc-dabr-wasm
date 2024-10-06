import init, { d_b64, KC } from '../pkg/kc_dabr_wasm.js';
import { useEffect, useState } from 'react';

/**
 * Custom hook for detecting KC_DABR_DOPRZ_WASM
 *
 * @returns {boolean} - Indicates whether the user has entered the KC
 */
export const useKC_DABR_WASM = () => {
    const [isKC, setIsKC] = useState<boolean>(false);

    useEffect(() => {
        let kc: KC;

        const initWasm = async () => {
            await init({});
            kc = KC.new();
        };

        initWasm();

        const DABR = () => {
            document.body.style.setProperty(
                d_b64('dHJhbnNpdGlvbg=='),
                d_b64('dHJhbnNmb3JtIDJz'),
            );
            document.body.style.setProperty(
                d_b64('dHJhbnNmb3Jt'),
                d_b64('cm90YXRlKDM2MGRlZyk='),
            );
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (kc.input(event.keyCode)) {
                setIsKC(true);
                DABR();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return isKC;
};
