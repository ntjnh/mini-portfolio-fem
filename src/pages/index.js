import React from 'react'
import Layout from '../components/layout'
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
                <div className="w-1/2">
                    <img className="max-w-full" src={natePhoto} alt="Nate" />
                </div>

                <article className="w-1/2">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus. A scelerisque purus semper eget. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Sit amet nisl suscipit adipiscing bibendum est. Egestas congue quisque egestas diam in. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. At in tellus integer feugiat scelerisque varius. Augue neque gravida in fermentum et sollicitudin ac. Sit amet consectetur adipiscing elit duis tristique. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Massa ultricies mi quis hendrerit dolor magna eget est. Vitae purus faucibus ornare suspendisse. Elementum pulvinar etiam non quam. Urna cursus eget nunc scelerisque. Elementum integer enim neque volutpat ac tincidunt vitae. Consectetur libero id faucibus nisl tincidunt eget nullam non.</p>

                    <a href="/portfolio/">Go to Portfolio</a>
                </article>
            </section>

            <section>
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
