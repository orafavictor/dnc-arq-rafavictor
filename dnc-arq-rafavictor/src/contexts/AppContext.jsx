import { createContext, useState, useEffect, children } from "react";
import { getApiData } from "../services/apiServices";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const savedLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(savedLanguage ?? 'br')
    const [languages, setLanguages] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts)
            } catch {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        fetchLanguages()
    }, [])

    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language])

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    )
}
