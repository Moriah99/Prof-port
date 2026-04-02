import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import profileImage from '../../imports/ChatGPT_Image_Mar_30,_2026,_02_29_44_PM.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight">Moriah Afolabi</h1>
            <h2 className="text-2xl text-blue-400 font-medium">AI Automation & Frontend Engineer</h2>
          </div>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            I transform complex business processes into seamless automated systems and beautiful web experiences. 
            By bridging the gap between intelligent automation and intuitive user interfaces, I empower organizations 
            to eliminate repetitive tasks, unlock operational efficiency, and build digital solutions that truly work, saving 
            time, reducing errors, and driving measurable impact.
          </p>

          <div className="space-y-3 text-slate-300">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Ibadan, Oyo State, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href="tel:+2348143653698" className="hover:text-blue-400 transition-colors">+234 814 365 3698</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:afolabimoriah@gmail.com" className="hover:text-blue-400 transition-colors">afolabimoriah@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-blue-400" />
              <a 
                href="https://linkedin.com/in/moriah-afolabi-87950b1b6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                linkedin.com/in/moriah-afolabi
              </a>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-slate-600 hover:border-blue-400 rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden border-4 border-blue-500/20 shadow-2xl bg-white">
            <img 
              src={profileImage}
              alt="Moriah Afolabi - Professional headshot"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}