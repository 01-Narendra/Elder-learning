
import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileNavLink, NavLink } from '../custom_components/Navlink';
import { useNavigate } from 'react-router-dom';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import AboutUs from '@/custom_components/About';
import heroImage from '../public/Learn_English.svg'
import Footer from '@/custom_components/footer';
import logo from '../public/logo.png'


const testimonials = [
  {
    name: "Ramesh, Shiksha Setu Learner",
    quote: "“At 65, I realized how much I had missed by not knowing how to read and write. Thanks to Shiksha Setu Mission, I can now read newspapers, write letters, and even sign my name with pride. Learning at this age has given me a new sense of independence and confidence. It’s never too late to start!”",
    src: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww"
  },
  {
    name: "Raj, Shiksha Setu Learner",
    quote: "“I never thought I could learn to read and write, especially at 18. I didn’t even know the alphabets, but thanks to Shiksha Setu Mission, I can now read and write in English, Hindi, and Gujarati. This has changed my life—I feel confident, independent, and ready for new opportunities. Education truly has no age limit!”",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwYW5kJTIwbWVufGVufDB8fDB8fHww"
  },
  {
    name: "Meera, Shiksha Setu Learner",
    quote: "“As a mother of two, I always prioritized my family, but deep down, I wished I could read and write. Joining Shiksha Setu Mission changed my life. At 32, I learned to read and write confidently, proving that it’s never too late to learn. Now, I can help my children with their studies and navigate the world with confidence.”",
    src: "https://plus.unsplash.com/premium_photo-1724762183347-a339003be107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdvbWVuJTIwYW5kJTIwbWVuJTIwaW5kaWFufGVufDB8fDB8fHww"
  },
  
];


export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const naviagte = useNavigate()

  return (
    <div className='h-auto'>
      <nav className={`bg-gray-100 border-grid sticky top-1 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-row gap-24 md:p-0 p-2 items-center">
            <div className="flex ml-1 items-center space-x-2">
              <img src={logo} alt="logo" className='h-14 w-14' />
              <span className="font-bold font-serif leading-none  text-black md:text-3xl text-[1rem]">
                Shiksha Setu
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex pt-1 p-5 ml-[8%] items-center space-x-5">
              <NavLink href="/" text="Home" />
              <NavLink href="/courses" text="Courses" />
              <NavLink href="#testimonials" text="Testimonials" />
              <NavLink href="#contact" text="Contact" />
            </div>

            <p className='ml-[10%] text-xl p-3 md:block hidden hover:bg-black hover:text-white cursor-pointer font-serif font-semibold'>SIGN UP</p>

            {/* Accessibility Controls */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden ml-16 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div onClick={() => setIsMenuOpen(false)} className={`px-2 pt-2 pb-3 space-y-1 bg-blue-950`}>
              <MobileNavLink href="/" text="Home" />
              <MobileNavLink href="/courses" text="Courses" />
              <MobileNavLink href="#testimonials" text="Testimonials" />
              <MobileNavLink href="#contact" text="Contact" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="px-4">
        <div className='grid md:grid-cols-2 relative z-10 mt-5 grid-cols-1 items-center justify-center h-96'>
          <div className="max-w-7xl flex flex-col gap-10 md:ml-5 md:pt-14 pt-5 mx-auto px-4">
              <p className='md:text-5xl text-4xl text-left font-bold font-suse '>Shiksha Setu – A New Path to Learning </p>
              <p className='text-left font-khand text-xl'>Learning has no age limit! Shiksha Setu empowers elders to explore new skills, embrace knowledge, and stay connected with the world. With simple and engaging lessons, make every day a step towards growth! 🚀 </p>
              <button onClick={() => naviagte('/courses')} className='rounded-md py-2 text-white text-xl md:text-2xl cursor-pointer shadow-lg shadow-red-500 bg-rose-700 md:w-[30%]'>Start Learning</button>
          </div>
          <img src={heroImage} draggable={false} className='absolute overflow-hidden mt-10 ml-5  opacity-[25%] -z-10 object-cover' />
        </div>

        {/* <div className="flex flex-col  md:mt-0 mt-[30%] overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Digital Learning
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={'https://plus.unsplash.com/premium_photo-1726862510695-ae9c2f0edc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxkZXJzJTIwZW5nbGlzaCUyMGxlYXJuaW5nfGVufDB8fDB8fHww'}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div> */}
      </header>
      
      <div className='mt-[50%]'>
        <AboutUs />
      </div>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 mb-5 px-4">
        <AnimatedTestimonials testimonials={testimonials} />
      </section>
      <div className='flex items-center justify-center mb-10'>
        <button onClick={() => naviagte('/courses')} className="bg-gradient-to-r shadow-blue-800 from-blue-500 to-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          Begin Your Journey 🚀
        </button>
      </div>
      <Footer />
    </div>
  );
}