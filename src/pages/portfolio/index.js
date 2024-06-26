import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Portfolio = ({ data }) => {
    return (
        <Layout>
            <section className="px-8 md:px-0 pt-4 md:pt-0 lg:pt-12">
                {
                    data.allMdx.nodes.map(node => {
                        const thumb = node.frontmatter.thumbnail.publicURL

                        return (
                            <article className="flex flex-wrap lg:flex-nowrap mb-16 md:mb-18 project-item md:justify-between md:items-center lg:items-stretch" key={node.id}>
                                <div className="image-col mb-8 lg:mb-0 w-full md:w-1/2">
                                    <img className="lg:w-[96%]" src={thumb} alt={`${node.frontmatter.title} thumbnail`} />
                                </div>

                                <div className="text-col w-full md:w-5/12 lg:w-1/2">
                                    <div className="border-b border-t border-slate-300 flex flex-wrap h-full items-center py-7 md:pb-12 md:pt-9 lg:py-0 text-col-inner w-full lg:w-4/5">
                                        <div>
                                            <h2 className="mb-6 lg:mb-10 text-4.5xl text-slate-700">{node.frontmatter.title}</h2>
                                            <p className="font-medium leading-8 mb-6 text-slate-600 text-sm">{node.frontmatter.description}</p>
                                            <Link className="hover:bg-slate-700 border border-slate-700 font-bold inline-block leading-none px-6 py-4 text-slate-700 hover:text-slate-50 text-xs tracking-widest uppercase" to={`/portfolio/${node.frontmatter.slug}`}>View Project</Link>
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
                        publicURL
                    }
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="Portfolio" />

export default Portfolio