import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
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

                    <a className="absolute bg-slate-800 bottom-0 h-12 font-semibold inline-block leading-12 left-0 pl-12 text-center text-slate-50 text-xs tracking-widest uppercase w-[200px]" href="#about">
                        <span className="absolute bg-slate-950 bottom-0 flex h-full items-center justify-center left-0 w-12">
                            <FontAwesomeIcon className="text-slate-300 text-lg" icon={faAnglesDown} />
                        </span>
                        About Me
                    </a>
                </div>
            </section>

            <section className="flex justify-between">
                <div className="pr-4 w-1/2">
                    <img className="max-w-full" src={natePhoto} alt="Nate" />
                </div>

                <article className="w-1/2" id="about">
                    <div className="border-y border-slate-300 max-w-[350px] mx-auto pb-10 pt-12">
                        <h2 className="mb-7 text-4xl">About Me</h2>
                        <p className="leading-[30px] mb-8">Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Sapien eget proin sed. Morbi tincidunt ornare massa eget eges tas purus. Faucibus interdum posuere lorem ipsum dolor sit amet. Dictum at tempor comm odo a lacus. Risus commodo viverra maec enas accum san lacus vel facilisis. Aliquet nibh praesent tris tique magna sit amet purus. Mattis velit sed ullam corper morbi tincidunt ornare massa eget. Fusce ut placerat orci nulla digni ssim enim. Risus nec feugiat in fer men tum posuere urna nec tinc idunt praesent.</p>

                        <Link className="border border-slate-950 inline-block leading-none px-3 py-4 font-semibold text-xs tracking-widest uppercase" to="/portfolio">Go to Portfolio</Link>
                    </div>
                </article>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
