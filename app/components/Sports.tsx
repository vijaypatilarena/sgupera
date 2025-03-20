"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const SPORTS_DATA = [
  {
    name: "Kabaddi (W/M)",
    rules: [
      "Venue ~ SGU Stadium",
      "Accommodation facility will be provided by Sanjay Ghodawat University.",
      "Non AC Dormitory / Rooms are available on sharing basis.",
      "Food (Breakfast + Lunch + Dinner) is included with accommodation charges. Only vegetarian food will be served at SGU Campus.",
      "Charges - 1000/- per day per person.",
      "Details of the hotels nearby will be provided. (No transportation facility will be provided to these participants)",
      "Accommodation Student Coordinators ~ Mr. Sarthak Patil ~ +91 9028698848 | Ms. Tejaswini Kumbhar ~ +91 8861109939",
    ],
    entryFee: "₹2,500/per team | Contact - Mr. Chandrakant ~ +91 7219856833",
  },
  {
    name: "Football (W/M)",
    rules: [
      "Venue ~ SGU Football Stadium",
      "Accommodation facility will be provided by Sanjay Ghodawat University.",
      "Non AC Dormitory / Rooms are available on sharing basis.",
      "Food (Breakfast + Lunch + Dinner) is included with accommodation charges. Only vegetarian food will be served at SGU Campus.",
      "Charges - 1000/- per day per person.",
      "Details of the hotels nearby will be provided. (No transportation facility will be provided to these participants)",
      "Accommodation Student Coordinators ~ Mr. Sarthak Patil ~ +91 9028698848 | Ms. Tejaswini Kumbhar ~ +91 8861109939",
    ],
    entryFee: "₹4,000 per team | Contact - Mr. Vedant ~ +91 9423286779" ,
  },
  {
    name: "Basketball (W/M)",
    rules: [
      "Venue ~ SGU Basketball Court",
      "Accommodation facility will be provided by Sanjay Ghodawat University.",
      "Non AC Dormitory / Rooms are available on sharing basis.",
      "Food (Breakfast + Lunch + Dinner) is included with accommodation charges. Only vegetarian food will be served at SGU Campus.",
      "Charges - 1000/- per day per person.",
      "Details of the hotels nearby will be provided. (No transportation facility will be provided to these participants)",
      "Accommodation Student Coordinators ~ Mr. Sarthak Patil ~ +91 9028698848 | Ms. Tejaswini Kumbhar ~ +91 8861109939",
    ],
    entryFee: "₹2,500/per team | Contact - Ms. Dhanashree ~ +91 7020523815",
  },
  {
    name: "Cricket (M)",
    rules: [
      "Venue ~ SGU Cricket Stadium",
      "Accommodation facility will be provided by Sanjay Ghodawat University.",
      "Non AC Dormitory / Rooms are available on sharing basis.",
      "Food (Breakfast + Lunch + Dinner) is included with accommodation charges. Only vegetarian food will be served at SGU Campus.",
      "Charges - 1000/- per day per person.",
      "Details of the hotels nearby will be provided. (No transportation facility will be provided to these participants)",
      "Accommodation Student Coordinator ~ Mr. Sarthak Patil ~ +91 9028698848",
    ],
    entryFee: "₹4,000per team | Contact - Mr. Samuel ~ +91 9423286779",
  },
  {
    name: "Lawn Tennis (W/M)",
    rules: [
      "Venue ~ SGU Tennis Court",
      "Accommodation facility will be provided by Sanjay Ghodawat University.",
      "Non AC Dormitory / Rooms are available on sharing basis.",
      "Food (Breakfast + Lunch + Dinner) is included with accommodation charges. Only vegetarian food will be served at SGU Campus.",
      "Charges - 1000/- per day per person.",
      "Details of the hotels nearby will be provided. (No transportation facility will be provided to these participants)",
      "Accomodation Student Coordinators ~ Mr. Sarthak Patil ~ +91 9028698848 | Ms. Tejaswini Kumbhar ~ +91 8861109939",
    ],
    entryFee: "₹2,000/per team | Contact - Mr. Pranav ~ +91 7796674057",
  }
  // Add more sports here...
];

export default function Sports() {
  return (
    <section id="sports" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sports Categories</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {SPORTS_DATA.map((sport, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl">{sport.name}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-4">
                    <div>
                      <h4 className="font-semibold mb-2">Essentials:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {sport.rules.map((rule, idx) => (
                          <li key={idx}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Entry Fee:</h4>
                      <p>{sport.entryFee}</p>
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqeaWOH-41S4bfQ6JYsQyp6CvhFWZIxuwVgMoUIFeyXCROvg/viewform?usp=sharing"><Button className="w-full mt-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfqeaWOH-41S4bfQ6JYsQyp6CvhFWZIxuwVgMoUIFeyXCROvg/viewform?usp=sharing">Register For {sport.name}</a></Button></a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}