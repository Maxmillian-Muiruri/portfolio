import { Code, Database, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'C#']
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'NestJS', 'Express.js', 'Prisma ORM']
    },
    {
      icon: Code,
      title: 'Frontend',
      skills: ['Angular', 'React', 'HTML', 'CSS']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      skills: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Render', 'Neon']
    },
    {
      icon: Wrench,
      title: 'Testing & Methods',
      skills: ['Manual E2E Testing', 'Waterfall Development']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Skills & Competencies</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
