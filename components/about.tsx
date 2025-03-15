"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                width={500}
                height={500}
                src="/profile.png"
                alt="Muhamemd Yasser"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Hello, I'm Muhammed Mahmoud Ghaleb
            </h3>
            <p className="text-muted-foreground">
              Dedicated SOC Analyst targeting a Tier1 role with proven expertise in identifying and analyzing security incidents. Committed to
              safeguarding organizational resources and mitigating cyber threats through proactive security strategies. Skilled in applying
              technical knowledge and collaborating with teams to uphold the integrity of information systems. ons that enhance user experience and business efficiency..
            </p>


            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div>
                <h4 className="font-medium">Name:</h4>
                <p className="text-muted-foreground">Muhammed Ghaleb</p>
              </div>
              <div>
                <h4 className="font-medium">Email:</h4>
                <p className="text-muted-foreground">
                  mohamoudmohammad9@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-medium">Location:</h4>
                <p className="text-muted-foreground">Cairo , Egypt</p>
              </div>
              <div>
                <h4 className="font-medium">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
