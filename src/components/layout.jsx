import { useState } from 'react'
import Header from './header'
import Cta from './cta'
import Footer from './footer'

export default function Layout({ children, isContact }) {
    const [ menuVisible, setMenuVisible ] = useState(false)
    const menuToggleClass = menuVisible ? 'block' : 'hidden'

    return (
        <div className="bg-slate-50">
            <Header
                menuToggleClass={menuToggleClass}
                menuVisible={menuVisible}
                handleClick={() => setMenuVisible(prev => !prev)} />

            <main className="container mx-auto">
                {children}
                {!isContact && <Cta />}
            </main>

            <Footer />
        </div>
    )
}
