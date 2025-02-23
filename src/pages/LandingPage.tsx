
import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileNavLink, NavLink } from '../custom_components/Navlink';
import { useNavigate } from 'react-router-dom';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import AboutUs from '@/custom_components/About';
import heroImage from '../public/Learn_English.svg'


const testimonials = [
  {
    name: "Rajesh Kumar, 65",
    quote: "This platform helped me learn English at my own pace. Now I can confidently speak with my grandchildren abroad!",
    src: "https://images.unsplash.com/photo-1559963043-3d19915bec6b?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Prema Devi, 70",
    quote: "The lessons are so simple to understand. I love practicing English every day!",
    src: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Mohan Singh, 68",
    quote: "From basic words to full conversations, everything is taught so well. Thank you!",
    src: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=200&h=200"
  }
];


export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const naviagte = useNavigate()

  return (
    <div className='min-h-screen'>
      <nav className={`bg-gray-100 border-grid sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex ml-[5%] flex-row gap-24 md:p-0 p-2 items-center">
            <div className="flex items-center">
              <span className="font-bold font-serif  text-black text-3xl">Shiksha Setu</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex p-5 ml-[8%] items-center space-x-5">
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
                className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div onClick={() => setIsMenuOpen(false)} className={`px-2 pt-2 pb-3 space-y-1 bg-gray-600`}>
              <MobileNavLink href="/" text="Home" />
              <MobileNavLink href="/courses" text="Courses" />
              <MobileNavLink href="#testimonials" text="Testimonials" />
              <MobileNavLink href="#contact" text="Contact" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-4">

        <div className='grid md:grid-cols-2 mt-5 grid-cols-1 items-center justify-center h-96'>
          <div className="max-w-7xl flex flex-col gap-10 md:ml-5 md:pt-14 pt-5 mx-auto px-4">
              <p className='md:text-5xl text-4xl text-left font-bold font-suse leading-[1.2]'>Become comfortable with <br /> Shiksha Setu </p>
              <p className='text-left font-khand text-xl'>Good English gives you a significant advantage when looking for a job or traveling to a different country. You’ll need to learn English when seeking admission into institutions across Europe, Asia, Africa, and Oceania. And this is no surprise since English is the global language of business and communication. </p>
              <button onClick={() => naviagte('/courses')} className='rounded-md py-3 text-white text-xl md:text-2xl cursor-pointer bg-rose-700 md:w-[30%]'>Start Learning</button>
          </div>
          <img src={heroImage} draggable={false} className=' overflow-hidden object-cover h-[130%] w-[90%]' />
        </div>

        <div className="flex flex-col  md:mt-0 mt-[30%] overflow-hidden">
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
        </div>
      </section>
      
      <AboutUs />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 mb-5 px-4">
        <AnimatedTestimonials testimonials={testimonials} />
      </section>
      
    </div>
  );
}