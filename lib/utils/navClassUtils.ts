export const getNavLinkClass = (activeSection: string, sectionId: string) => {
    const baseClass = 'group flex items-center py-3'
    return activeSection === sectionId ? `${baseClass} active` : baseClass
}

export const getIndicatorClass = (activeSection: string, sectionId: string) => {
    const baseClass = 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'
    return activeSection === sectionId ? `${baseClass} w-16 bg-white group-hover:bg-slate-100` : baseClass
}

export const getTextClass = (activeSection: string, sectionId: string) => {
    const baseClass = 'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
    return activeSection === sectionId ? `nav-text text-xs font-bold uppercase tracking-widest text-white group-hover:text-slate-100 group-focus-visible:text-slate-100` : baseClass
}
