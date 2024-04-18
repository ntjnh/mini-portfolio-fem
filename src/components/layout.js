import React from 'react'
import logo from '../images/logo-ipsum.svg'
import logoWhite from '../images/logo-ipsum-white.svg'

const Layout = ({ children }) => {
  return (
    <div className="bg-neutral-50">
        <header>
            <div className="container flex items-center justify-between mx-auto py-12">
                <img className="h-[34px]" src={logo} alt="Logo" />

                <nav>
                    <a className="font-semibold text-xs tracking-widest uppercase" href="/">Home</a>
                    <a className="font-semibold pl-12 text-xs tracking-widest uppercase" href="/portfolio/">Portfolio</a>
                    <a className="font-semibold pl-12 text-xs tracking-widest uppercase" href="/contact/">Contact Me</a>
                </nav>
            </div>
        </header>

        <main className="container mx-auto">
            {children}
        </main>

        <footer className="bg-black py-6">
            <div className="container flex items-center justify-between mx-auto">
                <div className="flex items-center">
                    <img className="h-[28px] inline-block mr-8" src={logoWhite} alt="Logo" />

                    <ul>
                        <li className="inline-block"><a className="font-semibold pr-10 text-white text-xs tracking-widest uppercase" href="/">Home</a></li>
                        <li className="inline-block"><a className="font-semibold pr-10 text-white text-xs tracking-widest uppercase" href="/portfolio/">Portfolio</a></li>
                        <li className="inline-block"><a className="font-semibold text-white text-xs tracking-widest uppercase" href="/contact/">Contact Me</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className="inline-block"><a className="font-medium text-white text-xs tracking-widest uppercase" href="https://github.com/ntjnh" target="_blank" rel="noreferrer">github</a></li>
                        <li className="inline-block"><a className="font-medium pl-4 text-white text-xs tracking-widest uppercase" href="https://twitter.com" target="_blank" rel="noreferrer">twitter</a></li>
                        <li className="inline-block"><a className="font-medium pl-4 text-white text-xs tracking-widest uppercase" href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Layout