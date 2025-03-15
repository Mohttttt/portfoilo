"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

const workExperience = [
  {
    title: "Teaching Assistant",
    company: "El Salhia University",
    location: "OnSite",
    period: "Nov 2024 – Present",
    description: [
      "Supported over 100 students in Networking, Mathematics, and Introduction to Computer Science (CS) courses." ,
      "Assisted with 15+ tutorials and 10+ lab sessions per semester, enhancing hands-on learning experiences." ,
      "Graded and provided feedback on 200+ assignments, maintaining accuracy and consistency.\n" ,
      "Prepared instructional materials that improved student comprehension by 20%, as measured by exam performance." ,
    ],
  },
  {
    title: "IT Specialist",
    company: "Ideal System Comapny",
    location: "OnSite",
    period: "Feb 2024 – Oct 2024",
    description: [
      "Provided technical assistance and support to 50+ employees, resolving 90% of issues within the first call." ,
      "Troubleshot and resolved 100+ technical problems related to hardware, software, and networks, both remotely and on-site." ,
      "Maintained and updated IT systems, including installing and configuring 30+ software applications and 20+ hardware devices." ,
      "Conducted basic IT training sessions for 10+ new employees, increasing onboarding efficiency by 30%.",
      "Reduced downtime by 15% through proactive system maintenance and quick issue resolution."
    ],
  },


];

const education = [
  {
    degree: "CyberOps Associate | Network Security",
    institution: "NTI-CyberSecurity ",
    location: "Benha, Egypt",
    period: "Jan 2025 mar2025",
    description:"" +
        "Developed expertise in SIEM technologies for real-time monitoring, event correlation, and threat detection.  \n" +
        "• Acquired hands-on skills in incident response (IR), including analyzing security events, investigating breaches, and \n" +
        "implementing containment and recovery strategies"
  },
  {
    degree: "Bachelor's Degree in Information Technology",
    institution: "Zagazig University",
    location: "Zagazig, Egypt",
    period: "2023",
    description:" Grade: Excelant \n" +
        "• Graduation Project : A+ "
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4  max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Work Experience
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold">{job.title}</h4>
                    <div className="text-primary font-medium">
                      {job.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm  mb-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {job.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <div className="text-primary font-medium">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm  mb-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
