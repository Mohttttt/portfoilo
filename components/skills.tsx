"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Layers, Terminal, Wrench } from "lucide-react";

const skills = [
  {
    icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
    title: "Networking",
    description:
      "Designing, configuring, and troubleshooting enterprise network infrastructure.",
    technologies: [
      "Cisco Certified Network Associate (CCNA)",
      "Red Hat System Administration I",
      "MCSA (Windows Server, Active Directory)",
    ],
  },
  {
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    title: "Cybersecurity",
    description:
      "Implementing defensive strategies and ethical hacking techniques.",
    technologies: [
      "SOC Essentials (Cisco CyberOps Associate)",
      "EC-Council Certified Security Analyst (CSA)",
      "Introduction to Cybersecurity & Ethical Hacking",
      "Cybercops",
    ],
  },
  {
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    title: "Security Tools ",
    description:
      "Deploying and managing threat detection/prevention systems.",
    technologies: ["FortiGate Security (NSE4)", "Cisco Firepower Next-Generation Firewall" , "IBM QRadar SIEM Foundation" , "IDS/IPS Configuration & Tuning"],
  },
  {
    icon: <Terminal className="h-8 w-8 mb-4 text-primary" />,
    title: "Automation & Scripting",
    description:
      "Streamlining workflows and security operations through code.\n" +
        "\n.",
    technologies: ["Python (Task Automation, Tool Integration)", "Bash Shell Scripting (System Administration, Log Analysis)"],
  },


];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4  max-w-2xl mx-auto">
            I've worked with a variety of technologies in front-end development.
            Here are some of my key areas of expertise:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className=" text-sm mb-4">{skill.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
