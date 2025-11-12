import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: '360 Web2',
      subtitle: 'Full-Stack E-Commerce Platform',
      description: 'Developed a complete e-commerce system where users can browse products, add them to a cart, check out, and make secure payments. Includes an admin dashboard for managing products, orders, users, and site content.',
      tech: ['NestJS', 'Angular', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Maxmillian-Muiruri/360-web-main.git',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Send-IT',
      subtitle: 'Courier Tracking System',
      description: 'Internship project enabling real-time parcel tracking and order management. Built with modern full-stack technologies for seamless courier service operations.',
      tech: ['NestJS', 'Angular', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'RESTful APIs'],
      github: 'https://github.com/Maxmillian-Muiruri/sent-parcel.git',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Student Health & Counseling App',
      subtitle: 'Wellness Platform',
      description: 'Built a full-stack platform allowing students to book counseling sessions online, with secure authentication and role-based access. Includes real-time booking to prevent double-booking and confidential access to mental health resources.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'Nodemailer', 'MongoDB'],
      github: 'https://github.com/Maxmillian-Muiruri/Mind-Leap-Mentall-Wellness-Project-main.git',
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Projects</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-3">{project.subtitle}</p>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
