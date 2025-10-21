import GlassSurface from '../animations/GlassSurface'
import StaggeredMenu from '../animations/StaggeredMenu';
export default function Navbar() {

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
    <nav className="w-full py-4 px-8  fixed hidden z-10 md:block">

      <div className='flex items-center justify-center '>
        <GlassSurface
          width={730}
          height={60}
          borderRadius={28}
          className="my-custom-class"
        >
          <div className="flex items-center space-x-2">
            <img className="w-10 h-10 rounded-full" src="https://imgs.search.brave.com/u46HfEz3Hi8O49u0jVppb10sl8yzZ77Tp7M6yK1c3R4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/OS8xNy8xMS80Ny9t/YW4tNDQ5NDA2XzY0/MC5qcGc" alt="Profile" />
            <span className="text-white font-semibold text-lg mr-5">NANDHAN KS</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white">Company</a>
            <a href="#" className="text-gray-300 hover:text-white">Sign in</a>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">Connect</button>
          </div>
        </GlassSurface>
      </div>
    </nav>

    // Custom displacement effects
    // // {/* <GlassSurface
    // //   displace={15}
    // //   distortionScale={-150}
    // //   redOffset={5}
    // //   greenOffset={15}
    // //   blueOffset={25}
    // //   brightness={60}
    // //   opacity={0.8}
    // //   mixBlendMode="screen"
    // // >
    // //   <span>Advanced Glass Distortion</span>
    // // </GlassSurface> */}
  )
}



