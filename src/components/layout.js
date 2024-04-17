import React from 'react'
import logo from '../images/logo-ipsum.svg'

const Layout = ({ children }) => {
  return (
    <div>
        <header>
            <div className="container flex items-center justify-between mx-auto py-12">
                <img className="h-[34px]" src={logo} alt="Logo" />

                <nav className="">
                    <a className="font-medium pl-12 text-xs uppercase" href="/">Home</a>
                    <a className="font-medium pl-12 text-xs uppercase" href="/portfolio/">Portfolio</a>
                    <a className="font-medium pl-12 text-xs uppercase" href="/contact/">Contact Me</a>
                </nav>
            </div>
        </header>

        <main className="container mx-auto">
            {children}
        </main>

        <footer>
            <div>
                <img className="h-[34px]" src={logo} alt="Logo" />

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/portfolio/">Portfolio</a></li>
                    <li><a href="/contact/">Contact Me</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><a href="https://github.com/ntjnh" target="_blank" rel="noreferrer">github</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer">twitter</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin</a></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Layout