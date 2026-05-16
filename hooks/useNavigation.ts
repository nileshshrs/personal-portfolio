import { useEffect, useCallback } from 'react'

export const useNavigation = (activeSection: string) => {
    useEffect(() => {
        globalThis.history.replaceState(null, '', `#${activeSection}`)
    }, [activeSection])

    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
            e.preventDefault()
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        },
        []
    )

    return { handleNavClick }
}
