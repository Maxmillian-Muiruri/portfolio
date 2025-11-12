import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Software Development Intern Certificate',
      issuer: 'Tech2Give',
      year: '2025'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      year: '2024'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      year: '2024'
    },
    {
      title: 'C# .NET Course',
      issuer: 'FreeCodeCamp',
      year: '2024'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Certifications & Awards</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-slate-200 dark:border-slate-600"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-full flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{cert.title}</h3>
                  <p className="text-blue-600 dark:text-cyan-400 font-semibold">{cert.issuer}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
