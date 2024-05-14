import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
                {/* hero image */}
                <GatsbyImage image={images.hero} alt={`${data.mdx.frontmatter.title} project image`} />

                <div className="flex flex-wrap justify-between pt-24">
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
                        <h2>Project Background</h2>
                        {children}

                        <h2>Static Previews</h2>

                        <GatsbyImage image={images.preview_1} alt={`${data.mdx.frontmatter.title} desktop preview`} />
                        <GatsbyImage image={images.preview_2} alt={`${data.mdx.frontmatter.title} mobile preview`} />
                    </div>
                </div>

            </article>

            <div className="flex flex-wrap justify-between">
                <div className="w-1/2">
                    <Link to="/">
                        {/*  */}
                        <span>Previous Project</span>
                    </Link>
                </div>
                <div className="text-right w-1/2">
                    <Link to="/">
                        {/*  */}
                        <span>Next Project</span>
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
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}></Seo>

export default Project
