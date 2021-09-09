import { useState, useEffect, useRef } from "react";

const Loader = () => {
    const [dots, setDots] = useState(0);
    const mounted = useRef(true);

    useEffect(() => {
        const dotCycle = () => {
            if (mounted.current) {
                setDots(dots => (dots + 1) % 4);
                setTimeout(dotCycle, 300);
            }
        };

        dotCycle();
        
        return () => mounted.current = false;
    }, []);

    return <div className="info">Loading{".".repeat(dots)}</div>;
};

export default Loader;
