import { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key 

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
    })

    
    return (
        <div>
            
        </div>
    )
}
