import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Portfolio = ({ data }) => {
    return (
        <Layout>
            <h1 className="mb-6 text-center text-4xl">Portfolio</h1>

            <section className="py-12">
                {
                    data.allMdx.nodes.map(node => (
                        <article className="mb-16" key={node.id}>
                            <h2 className="mb-4 text-3xl">{node.frontmatter.title}</h2>
                            <p className="mb-6">{node.frontmatter.description}</p>
                            <Link className="border border-black inline-block leading-none px-6 py-4 font-semibold text-xs tracking-widest uppercase" to="/">View Project</Link>
                        </article>
                    ))
                }
            </section>

            <section className="py-36">
                <div className="flex items-center justify-between">
                    <div className="w-[30%]">
                        <h2 className="leading-[2.75rem] text-4xl">Interested in doing a project together?</h2>
                    </div>

                    <hr className="bg-slate-300 block h-px w-1/2" />

                    <div className="text-right w-[14%]">
                        <Link className="border border-black inline-block leading-none px-8 py-4 font-semibold text-xs tracking-widest uppercase" to="/contact/">Contact Me</Link>
                    </div>
                </div>
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
                    date(formatString: "MMMM D, YYYY")
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="Portfolio" />

export default Portfolio