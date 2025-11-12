import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600">
            <div className="flex items-start gap-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Education</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">Chuka University</p>
                  <p className="text-slate-600 dark:text-slate-300">Bachelor of Science in Computer Science</p>
                  <p className="text-slate-500 dark:text-slate-400">Completed: April 2025</p>
                  <p className="text-slate-600 dark:text-slate-300">Chuka, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 prose prose-lg max-w-none">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a passionate full-stack software developer with a strong foundation in modern web technologies.
              I specialize in building scalable applications using JavaScript/TypeScript, with expertise in both
              frontend frameworks like React and Angular, and backend technologies including Node.js, NestJS, and Express.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              My experience ranges from e-commerce platforms to wellness applications, always focused on creating
              user-friendly solutions that solve real-world problems. I'm committed to writing clean, maintainable
              code and continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
