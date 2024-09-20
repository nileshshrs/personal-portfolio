import React from 'react'

const Footer = () => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Coded in
                <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300" target="_blank" rel="noreferrer noopener" >
                    &nbsp; Visual Studio Code
                </a>, Built with
                <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300" target="_blank" rel="noreferrer noopener">
                    &nbsp;Next.js</a>&nbsp;and
                <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300" target="_blank" rel="noreferrer noopener" >&nbsp;Tailwind CSS
                </a>
            </p>
        </footer>
    )
}

export default Footer