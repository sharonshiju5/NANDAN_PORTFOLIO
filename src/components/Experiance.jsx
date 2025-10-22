import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from ".././assets/experiance/image1.png"
import image2 from ".././assets/experiance/image2.png"
import image3 from ".././assets/experiance/image3.png"
import image4 from ".././assets/experiance/image4.png"
import image5 from ".././assets/experiance/image5.png"

import logo1 from ".././assets/experiance/logo1.png"
import logo2 from ".././assets/experiance/logo2.png"
import logo3 from ".././assets/experiance/logo3.png"
import logo4 from ".././assets/experiance/logo4.png"



export default function Experiance() {
    const [currentView, setCurrentView] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const experiences = [
        {
            company: "Seclob Technologies",
            role: "UI/UX Designer",
            period: "AUG 2024-PRESENT",
            location: "Cyberpark, Kozhikode",
            description: "Created Intuitive Designs For Web3 Projects And MLM Platforms, Enhancing User Experience. Helped Design User Interfaces For Web And Mobile Application.",
            image: image1,
            logo: logo1
        },
        {
            company: "Onstara",
            role: "UI/UX Designer",
            period: "JAN 2024 - MAR 2024",
            location: "Carnival Infopark Phase I, Kochi",
            description: "Turned Ideas Into Clear Designs For Newsletters, Ads, And Sales Materials. Designed Themes And Graphics For Marketing And Sales Presentations.",
            color: "bg-blue-600",
            image:image3,
            logo:logo2

        },
        {
            company: "Techmindz",
            role: "UI/UX Designer",
            period: "JAN 2024 - MAR 2024",
            location: "Carnival Infopark Phase I, Kochi",
            description: "Helped Redesign The Company's Mobile App, Leading To A Smoother User Experience. Designed Interfaces For Web And Mobile Apps. Made Sure Designs Matched The Company's Branding Rules.",
            color: "bg-red-700",
            image:image4,
            logo:logo3
        },
        {
            company: "Luminar Technolab",
            role: "Full Stack Developer",
            period: "JUN 2023 - DEC 2023",
            location: "Thrikkakara, Kochi",
            description: "Developed Responsive Web Interfaces Using React.Js (For MERN) Or Angular (For MEAN). Attended Workshops And Training Sessions To Enhance Skills In Full-Stack Development",
            color: "bg-purple-700",
            image:image5,
            logo:logo4

        }
    ];

    const allExperiences = [
        experiences[1], // Onstara
        experiences[2], // Techmindz  
        experiences[3]  // Luminar
    ];

    const nextSlide = () => {
        if (currentView === 0) {
            setCurrentView(1);
        } else {
            setCurrentIndex((prev) => (prev + 1) % experiences.length);
        }
    };

    const prevSlide = () => {
        if (currentView === 1) {
            setCurrentView(0);
        } else {
            setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
        }
    };

    const mobileNextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
    };

    const mobilePrevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    return (
        <div className="min-h-screen p-8">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-teal-500 text-2xl font-semibold mb-4">Experience</h2>
                    <p className="text-gray-500 text-lg mb-12 max-w-4xl">
                        Crafting Intuitive Digital Experiences Across Web And Mobile Platforms With A Focus On Usability, Aesthetics, And Brand Alignment.
                    </p>
                    
                    <AnimatePresence mode="wait">
                        {currentView === 0 ? (
                            <motion.div 
                                key="single-view"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="flex gap-8 items-stretch"
                            >
                                {/* Experience Card */}
                                <div className="relative h-[500px] text-white p-8 rounded-3xl flex-1 max-w-md">
                                    <img className='absolute left-0 top-0 -z-10 w-full h-full object-cover rounded-3xl' src={experiences[0].image} alt="" />

                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                                        <img src={experiences[0].logo} alt="" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold mb-8">{experiences[0].company}</h3>
                                    
                                    <p className="text-lg leading-relaxed mb-12">
                                        {experiences[0].description}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <p className="text-lg font-semibold">{experiences[0].period}</p>
                                        <p className="text-base opacity-90">{experiences[0].location}</p>
                                    </div>
                                </div>
                                
                                {/* CTA Section */}
                                <div className="text-white h-[500px] p-8 rounded-3xl flex-1 relative overflow-hidden">
                                    <img className='absolute -z-10 top-0 left-0 w-full h-full object-cover rounded-3xl' src={image2} alt="" />

                                    <h3 className="text-4xl font-bold mb-6">Let's Work Together</h3>
                                    <p className="text-lg mb-8 max-w-md">
                                        I'm Open To New Roles And Collaborations. Ready To Contribute Creative Ideas To Your Company's Next Project.
                                    </p>
                                    
                                    <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-900 transition-colors">
                                        Download CV
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="three-cards-view"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-3 gap-6"
                            >
                                {allExperiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.company}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="h-[500px] text-white p-8 rounded-3xl relative overflow-hidden"
                                    >
                                        <img className='absolute -z-10 top-0 left-0 w-full h-full object-cover rounded-3xl' src={exp.image} alt="" />

                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                                            <img src={exp.logo} alt="" />
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold mb-6">{exp.company}</h3>
                                        
                                        <p className="text-base leading-relaxed mb-8">
                                            {exp.description}
                                        </p>
                                        
                                        <div className="mt-auto">
                                            <p className="text-base font-semibold">{exp.period}</p>
                                            <p className="text-sm opacity-90">{exp.location}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Pagination */}
                    <div className="flex justify-end gap-4 mt-8">
                        <button 
                            onClick={prevSlide}
                            disabled={currentView === 0}
                            className={`w-12 h-12 border border-gray-300 text-white rounded-full flex items-center justify-center transition-colors ${
                                currentView === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                            }`}
                        >
                            ←
                        </button>
                        <button 
                            onClick={nextSlide}
                            disabled={currentView === 1}
                            className={`w-12 h-12 border border-gray-300 text-white rounded-full flex items-center justify-center transition-colors ${
                                currentView === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                            }`}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="max-w-sm mx-auto">
                    <h2 className="text-teal-500 text-2xl font-semibold mb-4">Experience</h2>
                    <p className="text-gray-500 text-lg mb-8">
                        Crafting Intuitive Digital Experiences Across Web And Mobile Platforms With A Focus On Usability, Aesthetics, And Brand Alignment.
                    </p>
                    
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-[500px] text-white p-6 rounded-3xl"
                        >
                            <img className='absolute left-0 top-0 -z-10 w-full h-full object-cover rounded-3xl' src={experiences[currentIndex].image} alt="" />

                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                                <img src={experiences[currentIndex].logo} alt="" className="w-8 h-8" />
                            </div>
                            
                            <h3 className="text-xl font-bold mb-6">{experiences[currentIndex].company}</h3>
                            
                            <p className="text-base leading-relaxed mb-8">
                                {experiences[currentIndex].description}
                            </p>
                            
                            <div className="mt-auto">
                                <p className="text-base font-semibold">{experiences[currentIndex].period}</p>
                                <p className="text-sm opacity-90">{experiences[currentIndex].location}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Mobile Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button 
                            onClick={mobilePrevSlide}
                            className="w-10 h-10 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors flex items-center justify-center"
                        >
                            ←
                        </button>
                        
                        <div className="flex gap-2">
                            {experiences.map((_, index) => (
                                <div 
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                        
                        <button 
                            onClick={mobileNextSlide}
                            className="w-10 h-10 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors flex items-center justify-center"
                        >
                            →
                        </button>
                    </div>
                    
                    {/* Mobile CTA Section */}
                    <div className="text-white h-[400px] p-6 rounded-3xl mt-8 relative overflow-hidden">
                        <img className='absolute -z-10 top-0 left-0 w-full h-full object-cover rounded-3xl' src={image2} alt="" />

                        <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
                        <p className="text-base mb-6">
                            I'm Open To New Roles And Collaborations. Ready To Contribute Creative Ideas To Your Company's Next Project.
                        </p>
                        
                        <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-900 transition-colors">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
