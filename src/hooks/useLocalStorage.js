import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key)
        
            return saved != null ? JSON.parse(saved) : initialValue
        } catch (err) {
            console.warn(`Could not read ${key}`, err)

            return initialValue
        }
        
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            console.warn('Could not save to local storage', err)
        }
    }, [key,value])

    return [value, setValue]
}