import { useState, useEffect } from "react";

function useDebounce(value, deplay) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {

        const handler = setTimeout(() => {setDebounceValue(value)}, deplay)
        return () => clearTimeout(handler)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debounceValue
}

export default useDebounce;