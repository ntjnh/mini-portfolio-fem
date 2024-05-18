import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Portfolio = ({ data }) => {
    return (
        <Layout>
            <section className="pt-12">
                {
                    data.allMdx.nodes.map(node => {
                        const thumb = getImage(node.frontmatter.thumbnail)

                        return (
                            <article className="flex mb-16 project-item" key={node.id}>
                                <div className="image-col w-1/2">
                                    <GatsbyImage class="w-[96%]" image={thumb} alt={`${node.frontmatter.title} thumbnail`} />
                                </div>

                                <div className="text-col w-1/2">
                                    <div className="border-b border-t border-slate-300 flex flex-wrap h-full items-center text-col-inner w-4/5">
                                        <div>
                                            <h2 className="mb-10 text-4.5xl text-slate-700">{node.frontmatter.title}</h2>
                                            <p className="font-medium leading-8 mb-6 text-slate-600 text-sm">{node.frontmatter.description}</p>
                                            <Link className="border border-slate-700 font-bold inline-block leading-none px-6 py-4 text-slate-700 text-xs tracking-widest uppercase" to={`/portfolio/${node.frontmatter.slug}`}>View Project</Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    title
                    description
                    slug
                    date(formatString: "MMMM D, YYYY")
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="Portfolio" />

export default Portfolio