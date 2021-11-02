import { useEffect, useState } from "react";

export const useDisableCountdown = milliseconds => {
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        if (!disable) return;

        const timeout = setTimeout(() => {
            setDisable(false);
        }, milliseconds);

        return () => clearTimeout(timeout);
    }, [disable, milliseconds]);

    return [disable, setDisable];
};
