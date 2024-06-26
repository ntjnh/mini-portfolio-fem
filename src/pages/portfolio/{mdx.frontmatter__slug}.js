import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Project = ({ data, children }) => {
    const images = {
        hero: data.mdx.frontmatter.image_hero.publicURL,
        preview_1: data.mdx.frontmatter.image_preview_1.publicURL,
        preview_2: data.mdx.frontmatter.image_preview_2.publicURL
    }

    return (
        <Layout>
            <article className="mt-4 md:mt-16 lg:mt-6 pb-16 md:pb-20 lg:pb-16 px-8 md:px-0">
                <img src={images.hero} alt={`${data.mdx.frontmatter.title} project`} />

                <div className="flex flex-wrap justify-between pt-10 lg:pt-28">
                    <div className="w-full lg:w-1/3">
                        <div className="border-b border-t border-slate-300 lg:pr-2 py-6 md:pb-8 md:pt-10 lg:py-12 md:relative lg:w-[95%]">
                            <h1 className="mb-6 md:mb-5 lg:mb-8 text-4.5xl md:text-4xl lg:text-4.5xl text-slate-700">{data.mdx.frontmatter.title}</h1>

                            <p className="md:absolute lg:static font-medium leading-7 mb-8 md:mb-0 lg:mb-8 md:right-0 text-slate-600 text-sm md:text-[15px] lg:text-sm md:top-14 md:w-1/2 lg:w-full">{data.mdx.frontmatter.description}</p>
                            <p className="font-bold mb-4 md:mb-2 lg:mb-4 text-cyan-700 text-[13px] lg:text-sm">{data.mdx.frontmatter.type}</p>
                            <p className="font-bold text-cyan-700 text-[13px] lg:text-sm">{data.mdx.frontmatter.stack}</p>

                            <a className="hover:bg-slate-700 border border-slate-700 font-bold inline-block mt-9 md:mt-6 lg:mt-9 px-7 py-4 text-slate-700 hover:text-slate-50 text-xs tracking-widest uppercase" href="/" target="_blank">Visit Website</a>
                        </div>
                    </div>

                    <div className="pt-12 lg:pt-0 w-full lg:w-7/12">
                        <h2 className="font-normal mb-6 text-3xl text-slate-700">Project Background</h2>
                        <div className="project-bg font-medium leading-[1.875rem] lg:leading-8 mb-10 lg:mb-12 text-slate-600 text-sm">
                            {children}
                        </div>

                        <h2 className="font-normal mb-7 lg:mb-10 text-3xl text-slate-700">Static Previews</h2>

                        <img className="mb-7" src={images.preview_1} alt={`${data.mdx.frontmatter.title} desktop preview`} />
                        <img src={images.preview_2} alt={`${data.mdx.frontmatter.title} mobile preview`} />
                    </div>
                </div>

            </article>

            <div className="px-8 md:px-0">
                <div className="border-b border-t border-slate-300 flex flex-wrap justify-between py-6 md:py-0">
                    <div className="border-r border-slate-300 md:pl-10 pt-6 pb-2 md:py-8 relative w-1/2">
                        <Link to={`/portfolio/${data.mdx.frontmatter.prev_proj.toLowerCase()}`}>
                            <FontAwesomeIcon className="relative md:absolute left-0 -top-5 md:top-[53px] text-xl text-slate-600" icon={faChevronLeft} />
                            <h3 className="font-normal leading-none mb-2 text-[1.75rem] md:text-3xl text-slate-700">{data.mdx.frontmatter.prev_proj}</h3>
                            <span className="text-slate-400">Previous Project</span>
                        </Link>
                    </div>

                    <div className="md:pr-10 pt-6 pb-2 md:py-8 relative text-right w-1/2">
                        <Link to={`/portfolio/${data.mdx.frontmatter.next_proj.toLowerCase()}`}>
                            <FontAwesomeIcon className="relative md:absolute right-0 -top-5 md:top-[53px] text-xl text-slate-600" icon={faChevronRight} />
                            <h3 className="font-normal leading-none mb-2 text-[1.75rem] md:text-3xl text-slate-700">{data.mdx.frontmatter.next_proj}</h3>
                            <span className="text-slate-400">Next Project</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            id
            frontmatter {
                title
                description
                image_hero {
                    publicURL
                }
                type
                stack
                website
                image_preview_1 {
                    publicURL
                }
                image_preview_2 {
                    publicURL
                }
                prev_proj
                next_proj
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}></Seo>

export default Project
