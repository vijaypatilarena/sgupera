"use client";

import { motion } from "framer-motion";

export default function SGUAbout() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sanjay Ghodawat University</h2>
            <p className="text-lg mb-6">
            Sanjay Ghodawat University (SGU) was established as a State Private University in 2017, evolving from Sanjay Ghodawat Institutes (founded in 2009 by SG Group Chairman Sanjay Ghodawat). The institute had received NAAC A grade and NBA accreditation, leading to the formation of SGU to accommodate more students and offer diverse career options.

SGU provides UG, PG, and PhD programs in Technology, Management, Commerce, Science, Liberal Arts, Architecture, Pharmacy, and Computer Applications. Its curriculum aligns with industry needs and follows a choice-based credit system that encourages a multidisciplinary approach.

State-of-the-art facilities include the Tata Technology Centre, Mechatronics Lab Car, BOSCH Collaboration Centre, and Centre of Space and Atmospheric Science. The 165-acre campus features smart classrooms, a food court, an amphitheater, a stadium, a swimming pool, horse riding, and more.

SGU’s School of Commerce and Management was recognized as a Top Emerging B-School by the Times B-School Survey 2020, while the School of Technology ranked 4th among top emerging engineering institutes, 9th in placements, and 2nd in research capabilities. SGU also hosts the prestigious PERA Premier Sports Competition, showcasing athletic talent nationwide.
            </p>
            {/* <p className="text-lg mb-6">
              With state-of-the-art infrastructure, distinguished faculty, and a commitment to 
              holistic development, SGU offers a diverse range of undergraduate, postgraduate, 
              and doctoral programs across various disciplines.
            </p>
            <p className="text-lg">
              The university's focus on sports excellence and physical education has made it a 
              natural choice for hosting the prestigious PERA PREMIER SPORTS COMPETITION, 
              bringing together talented athletes from across the nation.
            </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <img
              src="https://www.sguk.ac.in/assets/images/about-university/image2.jpg"
              alt="SGU Campus"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}