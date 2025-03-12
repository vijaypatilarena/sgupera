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
      "Rules shall be displayed soon..."
    ],
    entryFee: "₹ per team | Contact - Mr. Chandrakant ~ +91 7219856833",
  },
  {
    name: "Football (W/M)",
    rules: [
      "Teams must have 11 players + 5 substitutes",
      "90 minutes game with two 45-minute halves",
      "Standard FIFA rules apply",
      "Rolling substitutions allowed",
    ],
    entryFee: "₹ per team | Contact - Mr. Vedant ~ +91 9423286779" ,
  },
  {
    name: "Basketball (W/M)",
    rules: [
      "Teams must have 5 players + 3 substitutes",
      "Four quarters of 10 minutes each",
      "24-second shot clock rule",
      "FIBA rules apply",
    ],
    entryFee: "₹ per team | Contact - Ms. Dhanashree ~ +91 7020523815",
  },
  {
    name: "Cricket (M)",
    rules: [
      "Teams must have 11 players + 4 substitutes",
      "20 overs per innings",
      "Power play rules apply for first 6 overs",
      "DLS method will be used if required",
    ],
    entryFee: "₹per team | Contact - Mr. Samuel ~ +91 9423286779",
  },
  {
    name: "Lawn Tennis (W/M)",
    rules: [
      "Rules shall be displayed shortly"
    ],
    entryFee: "₹ per team | Contact - Mr. Pranav ~ +91 7796674057",
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
                      <h4 className="font-semibold mb-2">Rules & Regulations:</h4>
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
                    <Button className="w-full mt-4">Register for {sport.name}</Button>
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