import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { HeadingH2, HeadingH3 } from '../Typography/Typography';
import { FaStar, FaQuoteLeft } from 'react-icons/fa'; // ✅ Import quote icon here

const testimonials = [
  {
    name: 'Donald Jackman',
    role: 'Founder, MarketHive',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100',
    text: "iKnow's marketing strategies helped our brand grow online rapidly. Their workflow is efficient and results-driven.",
  },
  {
    name: 'Richard Nelson',
    role: 'CEO, NovaTech',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100',
    text: "Working with iKnow has been a game-changer for our content marketing and lead generation efforts.",
  },
  {
    name: 'James Washington',
    role: 'Owner, Café Bliss',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
    text: "The team at iKnow understands small business needs deeply. Their support has been invaluable for our online visibility.",
  },
  {
    name: 'Samantha Lee',
    role: 'Marketing Director, BloomTech',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=100',
    text: "A true partner in our growth. iKnow’s creative direction and ad strategy delivered results beyond expectations.",
  },
  {
    name: 'Carlos Alvarez',
    role: 'Entrepreneur',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100',
    text: "I couldn’t have launched my online brand without iKnow. Their training and support made everything easier.",
  },
  {
    name: 'Lisa Thompson',
    role: 'Founder, SheBuilds',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100',
    text: "Professional, passionate, and punctual. iKnow helped me find my brand voice and connect with my audience.",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonial" className="pb-5 scroll-mt-24">
      <HeadingH3 headingH3={'What Our Clients Say'} />
      <HeadingH2 headingH2={'Testimonial'} />

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-3 px-4"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <article className="mx-auto h-[270px] p-5 rounded-md flex flex-col justify-between items-start shadow-white-3 gradient-box">
              <div className="flex flex-col h-full w-full">
                {/* React Icon for Quote */}
                <FaQuoteLeft size={44} className="text-[var(--deepColor)]" />

                {/* Stars */}
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={16} className="text-[var(--primaryColor)]" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="mt-3 text-sm text-gray-500 flex-grow">{t.text}</p>
              </div>

              {/* Client Info */}
              <div className="mt-4 flex items-center gap-3">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={t.image}
                  alt={t.name}
                />
                <div className="text-left">
                  <h3 className="text-lg font-medium text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
