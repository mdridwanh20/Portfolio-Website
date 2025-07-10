import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

/* ======  Default data (ওভাররাইড‑যোগ্য) ====== */
const DEFAULT_SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaXTwitter /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://google.com", icon: <FaGoogle /> },
];

const DEFAULT_QUICK_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

/* ======  Footer component  ====== */
export default function Footer({
  email = "webridwan20@gmail.com",
  phone = "01876258020",
  socialLinks = DEFAULT_SOCIAL_LINKS,
  quickLinks = DEFAULT_QUICK_LINKS,
  aboutText = `Hi, I'm Ridwan, a passionate front‑end developer creating modern,
               responsive websites with React and Tailwind CSS.
               Let's build something amazing together!`,
}) {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--deepColor)]  font-normal text-[var(--lightColor)] py-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:border-0 border-b  pb-5 border-gray-800">
            <h3 className="text-lg mb-4">About Me</h3>
            <p>{aboutText}</p>
          </div>

          {/* Quick Links */}
          <div className="lg:border-0 border-b pb-5 border-gray-800">
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">

              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>

            <a
              href={`mailto:${email}`}
              className="flex items-center mb-2 hover:underline"
            >
              <FaEnvelope className="mr-2" />
              {email}
            </a>

            <a
              href={`tel:${phone}`}
              className="flex items-center hover:underline"
            >
              <FaPhone className="mr-2" />
              {phone}
            </a>

            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ href, icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition-colors hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>

            
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center border-t border-gray-700 pt-4">
          <p>© {currentYear} – All rights reserved by Ridwan</p>
        </div>
      </div>
    </footer>
  );
}
