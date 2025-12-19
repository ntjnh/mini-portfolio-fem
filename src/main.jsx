import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Portfolio from './pages/portfolio/index.jsx'
import ProjectLayout from './components/project-layout.jsx'
import Project from './components/portfolio/project.jsx'
import Contact from './pages/contact.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="portfolio">
                    <Route index element={<Portfolio />} />
                        <Route element={<ProjectLayout />}>
                        <Route path=":slug" element={<Project />} />
                    </Route>
                </Route>
                <Route path="contact" element={<Contact />} />
            </Routes>

            {/* 404 */}
        </BrowserRouter>
    </StrictMode>
)
