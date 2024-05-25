import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo-ipsum.svg'
import logoWhite from '../images/logo-ipsum-white.svg'

const Layout = ({ children, isContact }) => {
    const [ menuVisible, setMenuVisible ] = useState(false)
    const menuToggleClass = menuVisible ? 'block' : 'hidden'

    function handleClick() {
        setMenuVisible(prev => !prev)
    }

    const cta = (
        <section className="px-8 md:px-0 py-20 md:py-18 lg:py-20 lg:pt-20 lg:pb-36">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
                <div className="mb-8 md:w-1/2 lg:w-[30%]">
                    <h2 className="leading-[2.75rem] text-4xl text-center md:text-left">Interested in doing a project together?</h2>
                </div>

                <hr className="bg-slate-300 hidden md:block h-px md:w-1/5 lg:w-1/2" />

                <div className="text-right md:w-1/4 lg:w-[14%]">
                    <Link className="hover:bg-slate-800 border border-slate-800 inline-block leading-none px-8 py-4 font-semibold text-slate-800 hover:text-slate-50 text-xs tracking-widest uppercase" to="/contact/">Contact Me</Link>
                </div>
            </div>
        </section>
    )

    return (
        <div className="bg-slate-50">
            <header className="p-8 md:px-0 md:py-12 lg:py-0">
                <div className="container flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto lg:py-14">
                    <Link to="/">
                        <img className="h-[34px]" src={logo} alt="Logo" />
                    </Link>

                    <button className="font-light md:hidden leading-none text-slate-700 text-3xl" onClick={handleClick}>
                        <FontAwesomeIcon icon={menuVisible ? faXmark : faBars} />
                    </button>

                    <nav className={`${menuToggleClass} header-nav md:block bg-slate-800 md:bg-transparent relative md:static text-center md:text-left top-6 w-full md:w-auto`}>
                        <Link activeClassName="nav-current" className="hover:bg-cyan-800 md:hover:bg-transparent font-semibold block md:inline-block md:px-5 py-4 text-slate-50 md:text-slate-800 md:hover:text-cyan-700 text-xs tracking-widest uppercase" to="/">Home</Link>
                        <Link activeClassName="nav-current" className="hover:bg-cyan-800 md:hover:bg-transparent border-y border-slate-50 md:border-none font-semibold block md:inline-block md:px-5 py-4 text-slate-50 md:text-slate-800 md:hover:text-cyan-700 text-xs tracking-widest uppercase" to="/portfolio/" partiallyActive={true}>Portfolio</Link>
                        <Link activeClassName="nav-current" className="hover:bg-cyan-800 md:hover:bg-transparent font-semibold block md:inline-block md:pl-5 py-4 text-slate-50 md:text-slate-800 md:hover:text-cyan-700 text-xs tracking-widest uppercase" to="/contact/">Contact Me</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto">
                {children}

                {!isContact && cta}
            </main>

            <footer className="bg-slate-950 px-8 md:px-0 py-14 md:py-4 lg:py-6">
                <div className="container flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between mx-auto">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-normal w-full md:w-auto">
                        <img className="h-[28px] inline-block mb-4 md:mb-0 md:mr-12" src={logoWhite} alt="Logo" />

                        <ul className="mb-4 md:mb-0 w-full md:w-auto">
                            <li className="block md:inline-block text-center md:text-left">
                                <Link className="font-semibold inline-block py-4 md:pr-10 text-slate-50 hover:text-cyan-600 text-xs tracking-widest uppercase" to="/">Home</Link>
                            </li>
                            <li className="block md:inline-block text-center md:text-left">
                                <Link className="font-semibold inline-block py-4 md:pr-10 text-slate-50 hover:text-cyan-600 text-xs tracking-widest uppercase" to="/portfolio/">Portfolio</Link>
                            </li>
                            <li className="block md:inline-block text-center md:text-left">
                                <Link className="font-semibold inline-block py-4 text-slate-50 hover:text-cyan-600 text-xs tracking-widest uppercase" to="/contact/">Contact Me</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className="inline-block">
                                <a className="font-medium leading-none text-slate-50 hover:text-cyan-600 text-2xl tracking-widest uppercase" href="https://github.com/ntjnh" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                            <li className="inline-block">
                                <a className="font-medium leading-none pl-4 text-slate-50 hover:text-cyan-600 text-2xl tracking-widest uppercase" href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className="inline-block">
                                <a className="font-medium leading-none pl-4 text-slate-50 hover:text-cyan-600 text-2xl tracking-widest uppercase" href="https://linkedin.com" target="_blank" rel="noreferrer">
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