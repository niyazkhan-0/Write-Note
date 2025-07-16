import { useEffect } from "react"

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `Write Note - ${title}`
    }, [title])
    return null
}
