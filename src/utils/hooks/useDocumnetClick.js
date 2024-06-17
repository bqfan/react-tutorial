import { useEffect } from "react"

export function useDocumentClick() {
    console.log("useDocumentClick");

    useEffect(() => {
        const handleDocumentClick = (e) => {
            console.log("Click document!");
        }
        window.addEventListener('click', handleDocumentClick);
        return () => {
            window.removeEventListener('click', handleDocumentClick);
        };
    }, []);
}
