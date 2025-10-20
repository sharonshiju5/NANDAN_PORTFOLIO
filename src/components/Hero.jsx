import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import image1 from "../assets/hero/image1.png"
import image2 from "../assets/hero/image2.png"
import image3 from "../assets/hero/image3.png"
import image4 from "../assets/hero/image4.png"
import image5 from "../assets/hero/image5.png"
import image6 from "../assets/hero/image6.png"
import image7 from "../assets/hero/image7.png"
import StaggeredMenu from '../animations/StaggeredMenu';


export default function Hero() {
    const images = [image1, image2, image3, image4, image5, image6, image7];
    const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];
    return (
        <div style={{ height: '100vh' , background: '#1a1a1a' }}>
          {/* <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={['#B19EEF', '#5227FF']}
            logoUrl="/path-to-your-logo.svg"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          /> */}
        
        </div>
    )
}