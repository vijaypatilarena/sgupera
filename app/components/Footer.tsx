import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PERA PREMIER</h3>
            <p className="text-muted-foreground">
              For FAQ's & Queries ~
              Mr. Suryajeet Ghorpade (Sports Officer)
              Contact ~ +91 9284485597 | 
              <a href="mailto:perasports2025@sguk.ac.in" className="text-blue-500 hover:underline">
                 perasports2025@sguk.ac.in
              </a>
            </p>
            <p>Student Coordinators ~</p>
            <p>Mr. Shivtej Khot ~ +91 9322471990</p>
            <p>Ms. Vaishnavi Patil ~ +91 8088454300</p>
            <p>Mr. Pranav Varute ~ +91 7796674057</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.sanjayghodawatuniversity.ac.in/" className="text-muted-foreground hover:text-primary transition-colors">
                  Visit Sanjay Ghodawat Univeristy!
                </Link>
              </li>
              <li>
                <Link href="https://www.sanjayghodawatuniversity.ac.in/contact-admission-cell" className="text-muted-foreground hover:text-primary transition-colors">
                  2025-2026 Admissions
                </Link>
              </li>
              <li>
                <Link href="https://www.sanjayghodawatuniversity.ac.in/tp-media-coverage" className="text-muted-foreground hover:text-primary transition-colors">
                  Glories of SGU
                </Link>
              </li>
              <li>
                <Link href="https://www.sanjayghodawatuniversity.ac.in/programme-ST" className="text-muted-foreground hover:text-primary transition-colors">
                  Programmes Offered
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="text-xl font-bold mb-4">Reach Us (Click on the address below for navigation!)</h3>
          <p><a href="https://www.google.com/maps/place/Sanjay+Ghodawat+University/@16.7425062,74.3796734,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc103227ffea19b:0xba598d42f62e8fc1!8m2!3d16.7425062!4d74.3822537!16s%2Fg%2F1tfh32rc?entry=tts&g_ep=EgoyMDI1MDExNC4wIPu8ASoASAFQAw%3D%3D">Sanjay Ghodawat University Kolhapur - Sangli Highway, A/p Atigre - 416 118 Tal. - Hatkanangale Dist. - Kolhapur Maharashtra, भारतम् (India)</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a> */}
              <a href="https://www.instagram.com/sanjayghodawatuniversity" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2025 PERA PREMIER CHAMPIONSHIPS. All rights reserved. Devised by <a href="https://en.wikipedia.org/wiki/Vishnu" className="text-blue-600">Almighty</a> through <a href="https://vijaypatilarena.netlify.app" className="text-blue-600">VPA</a>.</p>
        </div>
      </div>
    </footer>
  );
}