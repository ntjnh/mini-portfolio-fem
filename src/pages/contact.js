import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = () => {
    return (
        <Layout>
            <div className="flex">
                <div className="w-1/3">
                    <h1 className="text-3xl">Get In Touch</h1>
                </div>

                <div className="w-2/3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque molestias quis esse voluptatibus. Suscipit asperiores repellendus officia distinctio nam, excepturi sunt quibusdam itaque exercitationem omnis iste earum debitis eius.</p>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact Me" />

export default Contact