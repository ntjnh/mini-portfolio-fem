import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from '../images/logo-ipsum.svg'
import logoWhite from '../images/logo-ipsum-white.svg'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
  return (
    <div className="bg-neutral-50">
        <header>
            <div className="container flex items-center justify-between mx-auto py-12">
                <Link to="/">
                    <img className="h-[34px]" src={logo} alt="Logo" />
                </Link>

                <nav>
                    <a className="font-semibold inline-block px-5 py-2 text-cyan-700 text-xs tracking-widest uppercase" href="/">Home</a>
                    <a className="font-semibold inline-block px-5 py-2 hover:text-cyan-700 text-xs tracking-widest uppercase" href="/portfolio/">Portfolio</a>
                    <a className="font-semibold inline-block pl-5 py-2 hover:text-cyan-700 text-xs tracking-widest uppercase" href="/contact/">Contact Me</a>
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
                        <li className="inline-block">
                            <a className="font-semibold pr-10 text-white text-xs tracking-widest uppercase" href="/">Home</a>
                        </li>
                        <li className="inline-block">
                            <a className="font-semibold pr-10 text-white text-xs tracking-widest uppercase" href="/portfolio/">Portfolio</a>
                        </li>
                        <li className="inline-block">
                            <a className="font-semibold text-white text-xs tracking-widest uppercase" href="/contact/">Contact Me</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className="inline-block">
                            <a className="font-medium leading-none text-white text-2xl tracking-widest uppercase" href="https://github.com/ntjnh" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a className="font-medium leading-none pl-4 text-white text-2xl tracking-widest uppercase" href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a className="font-medium leading-none pl-4 text-white text-2xl tracking-widest uppercase" href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Layout