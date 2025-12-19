import { Link } from 'react-router'

export default function Cta() {
    return (
        <section className="px-8 md:px-0 py-20 md:py-18 lg:py-20 lg:pt-20 lg:pb-36">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
                <div className="mb-8 md:w-1/2 lg:w-[30%]">
                    <h2 className="leading-11 text-4xl text-center md:text-left">
                        Interested in doing a project together?
                    </h2>
                </div>

                <hr className="bg-slate-300 hidden md:block h-px md:w-1/5 lg:w-1/2" />

                <div className="text-right md:w-1/4 lg:w-[14%]">
                    <Link
                        className="hover:bg-slate-800 border border-slate-800 inline-block leading-none px-8 py-4 font-semibold text-slate-800 hover:text-slate-50 text-xs tracking-widest uppercase"
                        to="/contact"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    )
}
