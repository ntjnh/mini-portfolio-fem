import { Outlet } from 'react-router'
import Layout from './layout'

export default function ProjectLayout() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}
