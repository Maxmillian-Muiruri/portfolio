import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl">
              MM
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Maxmillin Muiruri Njuguna
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Full-Stack Software Developer
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-slate-300">
            <a href="mailto:maxmillianmuiruri@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm">maxmillianmuiruri@gmail.com</span>
            </a>
            <a href="tel:+254710795876" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm">+254 710 795 876</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Chuka, Kenya</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg font-semibold"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <a
              href="https://linkedin.com/in/maxmillin-muiruri-njuguna"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Maxmillian-Muiruri"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
