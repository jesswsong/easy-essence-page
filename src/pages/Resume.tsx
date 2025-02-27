
import { SectionHeader } from "@/components/section-header";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Resume() {
  const experience = [
    {
      position: "Senior Product Designer",
      company: "Design Studio Inc.",
      period: "2020 - Present",
      description: "Leading product design initiatives for key clients, focusing on creating intuitive, elegant interfaces for complex systems. Mentoring junior designers and contributing to design system development.",
    },
    {
      position: "UI/UX Designer",
      company: "Tech Solutions",
      period: "2017 - 2020",
      description: "Designed user interfaces for web and mobile applications, conducted user research, and created interactive prototypes. Collaborated closely with development teams to ensure design integrity.",
    },
    {
      position: "Visual Designer",
      company: "Creative Agency",
      period: "2015 - 2017",
      description: "Created visual designs for various digital products, including websites and marketing materials. Helped establish brand guidelines and visual identity for multiple clients.",
    },
  ];

  const education = [
    {
      degree: "Master of Design",
      institution: "Design Institute",
      period: "2013 - 2015",
      description: "Focused on interaction design and user experience. Graduate thesis explored minimalist approaches to complex interface problems.",
    },
    {
      degree: "Bachelor of Fine Arts",
      institution: "University of Arts",
      period: "2009 - 2013",
      description: "Majored in Graphic Design with minor in Digital Media. Graduated with honors.",
    },
  ];

  const skills = [
    {
      category: "Design",
      items: ["UI/UX Design", "Interaction Design", "Visual Design", "Prototyping", "User Research", "Design Systems"],
    },
    {
      category: "Development",
      items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Responsive Design"],
    },
    {
      category: "Tools",
      items: ["Figma", "Adobe Creative Suite", "Sketch", "Framer", "VS Code", "Abstract"],
    },
  ];

  return (
    <div className="container py-12 space-y-12 md:py-24 animate-fade-in relative overflow-hidden">
      {/* Red blob decorative elements */}
      <div className="red-blob-effect w-[300px] h-[300px] top-20 right-[-150px] animate-float"></div>
      <div className="red-blob-effect w-[250px] h-[250px] bottom-40 left-[-100px] animate-float animation-delay-1000"></div>
      
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <SectionHeader
          title="Resume"
          description="My professional experience, education, and skills."
        />
        <Button className="self-start flex items-center gap-2">
          <Download className="h-4 w-4" /> Download PDF
        </Button>
      </div>
      
      <section className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight">Work Experience</h3>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={job.position} className={`animate-fade-in animation-delay-${(index + 1) * 100}`}>
              <CardTitle>{job.position}</CardTitle>
              <CardDescription className="mt-1">
                {job.company} • {job.period}
              </CardDescription>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight">Education</h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={edu.degree} className={`animate-fade-in animation-delay-${(index + 1) * 100}`}>
              <CardTitle>{edu.degree}</CardTitle>
              <CardDescription className="mt-1">
                {edu.institution} • {edu.period}
              </CardDescription>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <Card key={skillSet.category} className={`animate-fade-in animation-delay-${(index + 1) * 100}`}>
              <CardTitle>{skillSet.category}</CardTitle>
              <CardContent>
                <ul className="space-y-2">
                  {skillSet.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
