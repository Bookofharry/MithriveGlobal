import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1">
            <Link href="/" className="font-bold text-2xl flex items-center gap-2 mb-4">
              <Image src="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx" alt="Mithrive Global Logo" width={300} height={128} className="h-32 w-auto object-contain bg-white p-2 rounded" />
            </Link>
            <p className="text-gray-300 max-w-md mt-4 text-sm leading-relaxed">
              A performance-focused consulting and capacity development firm 
              operating across Africa. Engineering Growth. Strengthening Systems. 
              Delivering Results.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-lime">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-brand-lime transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-brand-lime transition-colors">Our Team</Link></li>
              <li><Link href="/alliances" className="hover:text-brand-lime transition-colors">Strategic Alliances</Link></li>
              <li><Link href="/social-impact" className="hover:text-brand-lime transition-colors">Social Impact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-lime">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-brand-lime transition-colors">Our Services</Link></li>
              <li><Link href="/path" className="hover:text-brand-lime transition-colors">The Mithrive Path</Link></li>
              <li><Link href="/product" className="hover:text-brand-lime transition-colors">Our Product</Link></li>
              <li><Link href="/clients" className="hover:text-brand-lime transition-colors">Clients Served</Link></li>
              <li><Link href="/contact" className="hover:text-brand-lime transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-lime">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Enterprise Technology Center, Adjacent Eagle Square, Abuja</li>
              <li><a href="tel:+2348106310387" className="hover:text-white transition-colors">+234 810 631 0387</a></li>
              <li><a href="tel:+44842591984" className="hover:text-white transition-colors">+44 842 591 984</a></li>
              <li><a href="mailto:info@mithriveglobal.com" className="hover:text-white transition-colors">info@mithriveglobal.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mithrive Global Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

