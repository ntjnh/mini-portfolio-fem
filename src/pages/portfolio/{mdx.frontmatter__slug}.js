import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Project = ({ data, children }) => {
    const images = {
        hero: getImage(data.mdx.frontmatter.image_hero),
        preview_1: getImage(data.mdx.frontmatter.image_preview_1),
        preview_2: getImage(data.mdx.frontmatter.image_preview_2)
    }

    return (
        <Layout>
            <article className="pb-16">
                <GatsbyImage image={images.hero} alt={`${data.mdx.frontmatter.title} project image`} />

                <div className="flex flex-wrap justify-between pt-28">
                    <div className="w-full lg:w-1/3">
                        <div className="border-b border-t border-slate-200 pr-2 py-12 lg:w-[95%]">
                            <h1 className="mb-8 text-4.5xl text-slate-700">{data.mdx.frontmatter.title}</h1>

                            <p className="font-medium leading-7 mb-8 text-slate-600 text-sm">{data.mdx.frontmatter.description}</p>
                            <p className="font-bold mb-4 text-cyan-700 text-sm">{data.mdx.frontmatter.type}</p>
                            <p className="font-bold text-cyan-700 text-sm">{data.mdx.frontmatter.stack}</p>

                            <a className="border border-slate-700 font-bold inline-block mt-9 px-7 py-4 text-xs tracking-widest uppercase" href="/" target="_blank">Visit Website</a>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <h2 className="font-normal mb-6 text-3xl text-slate-700">Project Background</h2>
                        <div className="font-medium leading-8 mb-12 text-slate-600 text-sm">
                            {children}
                        </div>

                        <h2 className="font-normal mb-10 text-3xl text-slate-700">Static Previews</h2>

                        <GatsbyImage className="mb-7" image={images.preview_1} alt={`${data.mdx.frontmatter.title} desktop preview`} />
                        <GatsbyImage className="" image={images.preview_2} alt={`${data.mdx.frontmatter.title} mobile preview`} />
                    </div>
                </div>

            </article>

            <div className="border-b border-t border-slate-300 flex flex-wrap justify-between">
                <div className="border-r border-slate-300 pl-10 py-8 relative w-1/2">
                    <Link className="" to={`/portfolio/${data.mdx.frontmatter.prev_proj.toLowerCase()}`}>
                        <FontAwesomeIcon className="absolute left-0 top-[53px] text-xl text-slate-600" icon={faChevronLeft} />
                        <h3 className="font-normal leading-none mb-2 text-3xl text-slate-700">{data.mdx.frontmatter.prev_proj}</h3>
                        <span className="text-slate-400">Previous Project</span>
                    </Link>
                </div>
                <div className="pr-10 py-8 relative text-right w-1/2">
                    <Link className="" to={`/portfolio/${data.mdx.frontmatter.next_proj.toLowerCase()}`}>
                        <h3 className="font-normal leading-none mb-2 text-3xl text-slate-700">{data.mdx.frontmatter.next_proj}</h3>
                        <span className="text-slate-400">Next Project</span>
                        <FontAwesomeIcon className="absolute right-0 top-[53px] text-xl text-slate-600" icon={faChevronRight} />
                    </Link>
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
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                type
                stack
                website
                image_preview_1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                image_preview_2 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                prev_proj
                next_proj
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}></Seo>

export default Project
