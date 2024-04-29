import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
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
                    <div className="border-y border-slate-300 max-w-[350px] mx-auto pb-10 pt-12">
                        <h2 className="mb-7 text-4xl">About Me</h2>
                        <p className="leading-[30px] mb-8">Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Sapien eget proin sed. Morbi tincidunt ornare massa eget eges tas purus. Faucibus interdum posuere lorem ipsum dolor sit amet. Dictum at tempor comm odo a lacus. Risus commodo viverra maec enas accum san lacus vel facilisis. Aliquet nibh praesent tris tique magna sit amet purus. Mattis velit sed ullam corper morbi tincidunt ornare massa eget. Fusce ut placerat orci nulla digni ssim enim. Risus nec feugiat in fer men tum posuere urna nec tinc idunt praesent.</p>

                        <Link className="border border-black inline-block leading-none px-3 py-4 font-semibold text-xs tracking-widest uppercase" to="/portfolio/">Go to Portfolio</Link>
                    </div>
                </article>
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

export const Head = () => <Seo title="Home" />

export default IndexPage
