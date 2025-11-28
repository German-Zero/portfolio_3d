import { Analytics } from '@vercel/analytics/next'

import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import SkillTech from './sections/SkillTech'

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillTech />
      <Projects />
      <Contact />
      <Analytics />
    </>
  )
}


export default App
