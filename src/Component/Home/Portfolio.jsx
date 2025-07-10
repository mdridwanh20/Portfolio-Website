import React from 'react';
import { HeadingH2, HeadingH3 } from '../Typography/Typography';

import img1 from '../../assets/Portfio website image/a (1).webp';
import img2 from '../../assets/Portfio website image/a (2).webp';
import img3 from '../../assets/Portfio website image/a (3).webp';
import img4 from '../../assets/Portfio website image/a (4).webp';

// Project data now uses the imported image variables
const projects = [
  {
    title: 'Dynamic Landing Page',
    category: 'Landing Pages',
    image: img1,
    link: '#',
  },
  {
    title: 'Static Business Website',
    category: 'Business Websites',
    image: img2,
    link: '#',
  },
  {
    title: 'Admin Dashboard (UI)',
    category: 'Web Applications',
    image: img3,
    link: '#',
  },
  {
    title: 'E‑commerce Website',
    category: 'Static E‑commerce',
    image: img4,
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mb-12  scroll-mt-24">
      {/* Heading */}
      <div className="mb-4">
        <HeadingH3 headingH3="Visit my portfolio" />
        <HeadingH2 headingH2="My Portfolio" />
      </div>

      {/* Project Grid */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map(({ title, category, image, link }, index) => (
          <div
            key={index}
            className="shadow-white-3 gradient-box  rounded-2xl"
          >
           
          <div className='p-5'>
               {/* Image */}
            <img
              src={image}
              alt={title}
              className="w-full rounded-md h-40 object-cover "
              loading="lazy"
            />

           

            {/* Content */}
            <div className="">

              <h3 className="text-lg pt-3 font-semibold text-[var(--deepColor)] leading-tight">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{category}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[var(--primaryColor)] font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}
