import { useParams } from 'react-router'
import PortfolioNav from './nav'
import projects from '../../data/portfolio.json'

export default function Project() {
    const params = useParams()
    const project = projects.find(proj => proj.slug === params.slug)
    const {
        images,
        title,
        description,
        type,
        stack,
        website,
        content,
        prev_proj,
        next_proj
    } = project
    const prev = projects.find(proj => proj.slug === prev_proj)
    const next = projects.find(proj => proj.slug === next_proj)

    return (
        <>
            <article className="mt-4 md:mt-16 lg:mt-6 pb-16 md:pb-20 lg:pb-16 px-8 md:px-0">
                <img src={images.hero} alt={`${title} project`} />

                <div className="flex flex-wrap justify-between pt-10 lg:pt-28">
                    <div className="w-full lg:w-1/3">
                        <div className="border-b border-t border-slate-300 lg:pr-2 py-6 md:pb-8 md:pt-10 lg:py-12 md:relative lg:w-[95%]">
                            <h1 className="mb-6 md:mb-5 lg:mb-8 text-5xl md:text-4xl lg:text-5xl text-slate-700">
                                {title}
                            </h1>

                            <p className="md:absolute lg:static font-medium leading-7 mb-8 md:mb-0 lg:mb-8 md:right-0 text-slate-600 text-sm md:text-[15px] lg:text-sm md:top-14 md:w-1/2 lg:w-full">
                                {description}
                            </p>
                            <p className="font-bold mb-4 md:mb-2 lg:mb-4 text-cyan-700 text-[13px] lg:text-sm">
                                {type}
                            </p>
                            <p className="font-bold text-cyan-700 text-[13px] lg:text-sm">
                                {stack}
                            </p>

                            <a className="hover:bg-slate-700 border border-slate-700 font-bold inline-block mt-9 md:mt-6 lg:mt-9 px-7 py-4 text-slate-700 hover:text-slate-50 text-xs tracking-widest uppercase"
                                href={website}
                                target="_blank"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>

                    <div className="pt-12 lg:pt-0 w-full lg:w-7/12">
                        <h2 className="font-normal mb-6 text-3xl text-slate-700">
                            Project Background
                        </h2>
                        <div className="project-bg font-medium leading-7.5 lg:leading-8 mb-10 lg:mb-12 text-slate-600 text-sm">
                            {content}
                        </div>

                        <h2 className="font-normal mb-7 lg:mb-10 text-3xl text-slate-700">
                            Static Previews
                        </h2>

                        <img
                            className="mb-7"
                            src={images.preview_1}
                            alt={`${title} desktop preview`} />
                        <img
                            src={images.preview_2}
                            alt={`${title} mobile preview`} />
                    </div>
                </div>
            </article>

            <PortfolioNav
                prev={{ title: prev.title, slug: prev.slug }}
                next={{ title: next.title, slug: next.slug }} />
        </>
    )
}
