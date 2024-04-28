import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = () => {
    return (
        <Layout>
            <div className="border-t border-slate-300 flex mt-14 py-14">
                <div className="w-1/3">
                    <h1 className="text-4xl">Get In Touch</h1>
                </div>

                <div className="w-2/3">
                    <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque molestias quis esse voluptatibus. Suscipit asperiores repellendus officia distinctio nam, excepturi sunt quibusdam itaque exercitationem omnis iste earum debitis eius.</p>

                    <ul>
                        <li className="inline-block">
                            <a className="font-medium leading-none text-black hover:text-cyan-700 text-2xl tracking-widest uppercase" href="https://github.com/ntjnh" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a className="font-medium leading-none pl-4 text-black hover:text-cyan-700 text-2xl tracking-widest uppercase" href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a className="font-medium leading-none pl-4 text-black hover:text-cyan-700 text-2xl tracking-widest uppercase" href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-300 flex mt-14 py-14">
                <div className="w-1/3">
                    <h1 className="text-4xl">Contact Me</h1>
                </div>

                <div className="w-2/3">
                    <form>
                        <div className="mb-7">
                            <label className="font-bold inline-block mb-4 text-sm" htmlFor="name">Name</label>
                            <input className="block bg-neutral-200 p-3 placeholder:text-neutral-400 w-full" type="text" name="name" id="name" placeholder="Jane Appleseed" />
                        </div>

                        <div className="mb-7">
                            <label className="font-bold inline-block mb-4 text-sm" htmlFor="email">Email Address</label>
                            <input className="block bg-neutral-200 p-3 placeholder:text-neutral-400 w-full" type="text" name="email" id="email" placeholder="email@example.com" />
                        </div>

                        <div className="mb-6">
                            <label className="font-bold inline-block mb-4 text-sm" htmlFor="message">Message</label>
                            <textarea className="block bg-neutral-200 p-3 placeholder:text-neutral-400 w-full" name="message" id="message" placeholder="How can I help?" cols="30" rows="10"></textarea>
                        </div>

                        <div>
                            <input className="bg-black hover:bg-transparent border border-black cursor-pointer inline-block leading-none px-6 py-4 font-semibold text-white hover:text-black text-xs tracking-widest uppercase" type="submit" name="" id="" />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact Me" />

export default Contact