import { useEffect, useState, useRef } from 'react';
import { Code, Briefcase, Award, Users } from 'lucide-react';

interface StatProps {
  end: number;
  label: string;
  icon: React.ElementType;
  suffix?: string;
}

function AnimatedStat({ end, label, icon: Icon, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-600 dark:text-slate-400 font-medium">{label}</div>
    </div>
  );
}

export default function Statistics() {
  const stats = [
    { end: 15, label: 'Technologies', icon: Code, suffix: '+' },
    { end: 3, label: 'Years Experience', icon: Briefcase, suffix: '' },
    { end: 10, label: 'Projects Completed', icon: Award, suffix: '+' },
    { end: 50, label: 'Developers Mentored', icon: Users, suffix: '+' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
