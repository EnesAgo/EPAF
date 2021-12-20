import { useEffect } from "react";

export default function useTimeout(func, ms) {
    function work(f,m) {
        setTimeout(() => {
            f();
        }, m);
    }
    useEffect(() => {
        work(func, ms)
    }, []);
}