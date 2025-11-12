import { Briefcase, Award, Users } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Backend Software Developer',
      company: 'DHS Africa',
      period: 'Sep 2025 – Present',
      description: [
        'Contributing to healthcare technology solutions bridging the healthcare gap in East Africa',
        'Working with modern tech stack including NestJS, React, and Prisma',
        'Collaborating in a hybrid team environment following agile methodologies',
        'Participating in development of AI Chatbot and Telemedicine features'
      ]
    },
    {
      icon: Briefcase,
      title: 'Software Development Intern',
      company: 'Tech2Give',
      period: 'May – Aug 2025',
      description: [
        'Developed and deployed Send-IT, a courier platform for parcel delivery and tracking',
        'Built backend with Node.js + PostgreSQL + REST APIs for authentication and order management',
        'Worked in a collaborative team, used Git branching for version control, and integrated features from multiple contributors',
        'Earned a Certificate of Completion for outstanding participation'
      ]
    },
    {
      icon: Award,
      title: 'Contributor & Mentor',
      company: 'FreeCodeCamp',
      period: 'Ongoing',
      description: [
        'Contributed to open-source projects and guided junior developers in web development'
      ]
    },
    {
      icon: Users,
      title: 'Member & Mentor',
      company: 'Google Developer Student Club (GDSC)',
      period: 'Ongoing',
      description: [
        'Mentored peers in web development and collaborated on projects solving campus problems'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Work Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-full flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                        <p className="text-lg text-blue-600 dark:text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-blue-600 dark:text-cyan-400 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
