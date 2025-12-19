import { Link } from 'react-router'
import Layout from '../components/layout'

export default function NotFound() {
    return (
        <Layout hideCta={true} notFound={true}>
            <div className="border-t md:border-b md:border-t-0 border-slate-300 px-10 md:h-full md:ml-auto lg:mx-auto py-12 md:pb-10 md:pt-12 lg:py-16 text-center">
                <h1 className="font-semibold leading-tight mb-7 md:mb-0 lg:mb-8 text-4xl lg:text-6xl">
                    Oops! Page not found
                </h1>

                <p className="max-w-[50ch] mb-10 md:mb-6 mx-auto">
                    Sorry 😔, we couldn&rsquo;t find what you were looking for. Click the button below to return to the home page.
                </p>

                <Link
                    className="bg-slate-800 hover:bg-transparent border border-slate-800 inline-block leading-none p-3 md:p-4 font-semibold hover:text-slate-800 text-slate-50 text-xs tracking-widest uppercase"
                    to="/"
                >
                    Go home
                </Link>
            </div>
        </Layout>
    )
}
