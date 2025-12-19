import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout hideCta={true}>
            <div className="border-t border-slate-300 flex flex-wrap lg:flex-nowrap mx-8 lg:mx-0 md:mt-14 pb-9 pt-6 lg:py-12">
                <div className="w-full lg:w-1/3">
                    <h1 className="mb-7 lg:mb-0 text-4xl">Get In Touch</h1>
                </div>

                <div className="w-full lg:w-2/3">
                    <p className="font-medium leading-7 lg:leading-8 mb-8 text-sm lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Tortor vitae purus faucibus ornare. Consequat semper viverra nam libero justo laoreet sit amet. Sit amet porttitor eget dolor morbi non arcu risus quis. Mattis pellentesque id nibh tortor. Phasellus faucibus scelerisque eleifend donec pretium. Bibendum neque egestas congue quisque. Senectus et netus et malesuada fames ac turpis egestas integer.
                    </p>

                    <ul>
                        <li className="inline-block">
                            <a className="font-medium leading-none text-slate-950 hover:text-cyan-700 text-2xl tracking-widest uppercase" href="https://github.com/ntjnh" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a className="font-medium leading-none pl-4 text-slate-950 hover:text-cyan-700 text-2xl tracking-widest uppercase" href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a className="font-medium leading-none pl-4 text-slate-950 hover:text-cyan-700 text-2xl tracking-widest uppercase" href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-300 flex flex-wrap lg:flex-nowrap lg:mt-4 mx-8 lg:mx-0 pb-16 pt-9 lg:py-12">
                <div className="mb-5 w-full lg:w-1/3">
                    <h1 className="text-4xl">Contact Me</h1>
                </div>

                <div className="w-full lg:w-2/3">
                    <form>
                        <div className="mb-6">
                            <label className="font-bold inline-block mb-4 text-sm" htmlFor="name">
                                Name
                            </label>
                            <input className="block bg-slate-200 p-3 placeholder:font-semibold placeholder:text-slate-400 placeholder:text-xs w-full" type="text" name="name" id="name" placeholder="Jane Appleseed" />
                        </div>

                        <div className="mb-6">
                            <label className="font-bold inline-block mb-4 text-sm" htmlFor="email">
                                Email Address
                            </label>
                            <input className="block bg-slate-200 p-3 placeholder:font-semibold placeholder:text-slate-400 placeholder:text-xs w-full" type="text" name="email" id="email" placeholder="email@example.com" />
                        </div>

                        <div className="mb-6">
                            <label className="font-bold inline-block mb-4 text-sm" htmlFor="message">
                                Message
                            </label>
                            <textarea className="block bg-slate-200 h-28 lg:h-64 p-3 placeholder:font-semibold placeholder:text-slate-400 placeholder:text-xs w-full" name="message" id="message" placeholder="How can I help?" cols="30"></textarea>
                        </div>

                        <div>
                            <button className="relative bg-slate-800 hover:bg-neutral-900 h-12 font-semibold inline-block pl-12 text-white text-xs tracking-widest uppercase w-50" type="submit">
                                <span className="absolute bg-slate-950 bottom-0 flex h-full items-center justify-center left-0 w-12">
                                    <FontAwesomeIcon className="text-slate-300 text-lg" icon={faAnglesDown} />
                                </span>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
