import { Link, NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/n-logo.svg'

export default function Header({ handleClick, menuVisible, menuToggleClass }) {
    return (
        <header className="p-8 md:px-0 md:py-12 lg:py-0">
            <div className="container flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto lg:py-14">
                <Link to="/">
                    <img className="h-8.5" src={logo} alt="Logo" />
                </Link>

                <button className="font-light md:hidden leading-none text-slate-700 text-3xl" onClick={handleClick}>
                    <FontAwesomeIcon icon={menuVisible ? faXmark : faBars} />
                </button>

                <nav className={`${menuToggleClass} header-nav md:block bg-slate-800 md:bg-transparent relative md:static text-center md:text-left top-6 w-full md:w-auto`}>
                    <NavLink
                        className="hover:bg-cyan-800 md:hover:bg-transparent font-semibold block md:inline-block md:px-5 py-4 text-slate-50 md:text-slate-800 md:hover:text-cyan-700 text-xs tracking-widest uppercase"
                        to="/"
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="hover:bg-cyan-800 md:hover:bg-transparent border-y border-slate-50 md:border-none font-semibold block md:inline-block md:px-5 py-4 text-slate-50 md:text-slate-800 md:hover:text-cyan-700 text-xs tracking-widest uppercase"
                        to="/portfolio"
                        end
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        className="hover:bg-cyan-800 md:hover:bg-transparent font-semibold block md:inline-block md:pl-5 py-4 text-slate-50 md:text-slate-800 md:hover:text-cyan-700 text-xs tracking-widest uppercase"
                        to="/contact"
                    >
                        Contact Me
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
