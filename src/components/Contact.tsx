import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:maxmillianmuiruri@gmail.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="bg-slate-700 p-3 rounded-lg group-hover:bg-cyan-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>maxmillianmuiruri@gmail.com</span>
                </a>

                <a
                  href="tel:+254710795876"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="bg-slate-700 p-3 rounded-lg group-hover:bg-cyan-600 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+254 710 795 876</span>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Chuka, Kenya</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://linkedin.com/in/maxmillin-muiruri-njuguna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Maxmillian-Muiruri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-slate-700">
        <p className="text-slate-400">
          © 2025 Maxmillin Muiruri Njuguna. All rights reserved.
        </p>
      </div>
    </section>
  );
}
