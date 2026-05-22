import { Card } from "./ui/card";
import { GraduationCap, Award, BookOpen, TrendingUp } from "lucide-react";

export function Credentials() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "PhD in Microbiology",
      description: "Advanced research expertise with multiple peer-reviewed publications in top scientific journals"
    },
    {
      icon: Award,
      title: "99th Percentile Score",
      description: "Achieved exceptional DAT results through proven study strategies and comprehensive preparation"
    },
    {
      icon: BookOpen,
      title: "UCSF Dental School",
      description: "Accepted to one of the most prestigious and competitive dental programs in the United States"
    },
    {
      icon: TrendingUp,
      title: "Research Background",
      description: "Applied scientific research methods to optimize DAT preparation and test-taking strategies"
    }
  ];

  return (
    <section id="learn-from-excellence" className="py-24 bg-gray-900/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-4xl tracking-tight text-white">
            Learn from Excellence
          </h2>
          <p className="text-lg text-white/80">
            Your guide is created by someone who has walked the path and achieved exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white/5 border-white/10">
              <achievement.icon className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="mb-2 text-white">{achievement.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
