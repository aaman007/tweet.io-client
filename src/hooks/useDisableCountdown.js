import { useEffect, useState } from "react";

let initial = true;

export const useDisableCountdown = milliseconds => {
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        if (initial) {
            initial = false;
            return;
        }

        const timeout = setTimeout(() => {
            setDisable(false);
        }, milliseconds);

        return () => clearTimeout(timeout);
    }, [disable, milliseconds]);

    return [disable, setDisable];
};
