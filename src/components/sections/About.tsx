'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-text-light">
              I am experienced Delivery Manager. I support companies with their projects and delivery process. 
              I have a strong foundation in project management, with a knowledge of Agile, Scrum and Kanban.
              My experience includes working with different technologies like Magento, Shopify Liquid, Shopify Hydrogen, SAP Hybris Spartacus, Medusa.
            </p>
            <p className="text-lg text-text-light">
              I am eager to learn new technologies. I am currently fascinated by AI and its applications.
              Seeing the potential of AI to transform businesses, I exploring how it can be used with the business aspects and projects delivery, to improve the efficiency and way of working.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Based in Wrocław, working remotely</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>16 years of development experience</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Certified Project Manager</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 