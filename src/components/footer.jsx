import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logoWhite from '../assets/n-logo-white.svg'

export default function Footer() {
    return (
        <footer className="bg-slate-950 px-8 md:px-0 py-14 md:py-4 lg:py-6">
            <div className="container flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between mx-auto">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-normal w-full md:w-auto">
                    <img
                        className="h-7 inline-block mb-4 md:mb-0 md:mr-12"
                        src={logoWhite}
                        alt="Logo" />

                    <ul className="mb-4 md:mb-0 w-full md:w-auto">
                        <li className="block md:inline-block text-center md:text-left">
                            <NavLink
                                className="font-semibold inline-block py-4 md:pr-10 text-slate-50 hover:text-cyan-600 text-xs tracking-widest uppercase"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="block md:inline-block text-center md:text-left">
                            <NavLink
                                className="font-semibold inline-block py-4 md:pr-10 text-slate-50 hover:text-cyan-600 text-xs tracking-widest uppercase"
                                to="/portfolio"
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="block md:inline-block text-center md:text-left">
                            <NavLink
                                className="font-semibold inline-block py-4 text-slate-50 hover:text-cyan-600 text-xs tracking-widest uppercase"
                                to="/contact"
                            >
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className="inline-block">
                            <a
                                className="font-medium leading-none text-slate-50 hover:text-cyan-600 text-2xl tracking-widest uppercase"
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">GitHub (opens in a new tab)</span>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    aria-hidden="true" />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                className="font-medium leading-none pl-4 text-slate-50 hover:text-cyan-600 text-2xl tracking-widest uppercase"
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">Twitter (opens in a new tab)</span>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    aria-hidden="true" />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                className="font-medium leading-none pl-4 text-slate-50 hover:text-cyan-600 text-2xl tracking-widest uppercase"
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">LinkedIn (opens in a new tab)</span>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
