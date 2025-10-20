import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StaggeredMenu from './animations/StaggeredMenu'
import Componenyt1 from './components/Contetn1'

function App() {
  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Work', link: '#work' },
    { label: 'Contact', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className=''>
      <StaggeredMenu 
        items={menuItems}
        socialItems={socialItems}
        isFixed={true}
        leftContent={<Componenyt1 />}
      />
      <Hero />
    </div>
  )
}

export default App
