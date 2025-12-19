import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function PortfolioNav({ prev, next }) {
    return (
        <div className="px-8 md:px-0">
            <div className="border-b border-t border-slate-300 flex flex-wrap justify-between py-6 md:py-0">
                <div className="border-r border-slate-300 md:pl-10 pt-6 pb-2 md:py-8 relative w-1/2">
                    <Link to={`/portfolio/${prev.slug}`}>
                        <FontAwesomeIcon
                            className="relative md:absolute left-0 -top-5 md:top-13.25 text-xl text-slate-600"
                            icon={faChevronLeft} />

                        <h3 className="font-normal leading-none mb-2 text-[1.75rem] md:text-3xl text-slate-700">
                            {prev.title}
                        </h3>

                        <span className="text-slate-400">
                            Previous Project
                        </span>
                    </Link>
                </div>

                <div className="md:pr-10 pt-6 pb-2 md:py-8 relative text-right w-1/2">
                    <Link to={`/portfolio/${next.slug}`}>
                        <FontAwesomeIcon
                            className="relative md:absolute right-0 -top-5 md:top-13.25 text-xl text-slate-600"
                            icon={faChevronRight} />

                        <h3 className="font-normal leading-none mb-2 text-[1.75rem] md:text-3xl text-slate-700">
                            {next.title}
                        </h3>

                        <span className="text-slate-400">
                            Next Project
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
