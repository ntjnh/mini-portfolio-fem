import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import heroPhoto from '../images/home-hero.jpg'
import natePhoto from '../images/nate.jpg'

const IndexPage = () => {
    const heroBg = {
        backgroundImage: `url(${heroPhoto})`
    }

    return (
        <Layout>
            <section className="aspect-[37/20] bg-cover bg-center bg-no-repeat mb-36 relative w-full" style={heroBg}>
                <div className="absolute bg-white bottom-0 pb-24 px-8 pt-12 w-[41%]">
                    <h1 className="font-semibold leading-tight text-5xl">Hey, I'm Nate and I love solving problems with code.</h1>

                    <button className="absolute bg-neutral-800 bottom-0 h-12 font-semibold inline-block left-0 pl-12 text-white text-xs tracking-widest uppercase w-[200px]">
                        <span className="absolute bg-black bottom-0 h-full left-0 w-12"></span>
                        About Me
                    </button>
                </div>
            </section>

            <section className="flex justify-between">
                <div className="pr-4 w-1/2">
                    <img className="max-w-full" src={natePhoto} alt="Nate" />
                </div>

                <article className="w-1/2">
                    <div className="border-y border-slate-300 max-w-[350px] mx-auto pb-12 pt-14">
                        <h2 className="mb-8 text-4xl">About Me</h2>
                        <p className="leading-[30px] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus. A scelerisque purus semper eget. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Sit amet nisl suscipit adipiscing bibendum est. Egestas congue quisque egestas diam in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. At in tellus integer feugiat scelerisque varius.</p>

                        <Link className="border border-black inline-block leading-none px-2.5 py-4 font-semibold text-xs tracking-widest uppercase" to="/portfolio">Go to Portfolio</Link>
                    </div>
                </article>
            </section>

            <section className="py-36">
                <div>
                    <h2>Interested in doing a project together?</h2>
                </div>

                <div>
                    <button>Contact Me</button>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>NATE</title>
