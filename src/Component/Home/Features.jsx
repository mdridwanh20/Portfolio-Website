import React from 'react'
import { HeadingH2, HeadingH3 } from '../Typography/Typography'
import { FaMobileAlt, FaRocket, FaUserFriends, FaChartLine } from 'react-icons/fa'

const features = [
  {
    Icon: FaMobileAlt,
    title: 'Responsive Design',
    description: 'Responsive layouts that adapt beautifully to any device or screen size.'
  },
  {
    Icon: FaRocket,
    title: 'Performance Optimization',
    description: 'Speed-tuned code and asset loading for lightning-fast user experiences.'
  },
  {
    Icon: FaUserFriends,
    title: 'User-Centered Interfaces',
    description: 'Intuitive UI designs focused on seamless, human-first interactions.'
  },
  {
    Icon: FaChartLine,
    title: 'Growth & Scalability',
    description: 'Scalable architecture and clean, maintainable code that evolves with your business.'
  },
]

export default function Features() {
  return (
    <div id='feature' className="scroll-mt-20 py-10 m-2">

     <div>
         <div className="pb-4">
        <HeadingH3 headingH3="Features" />
        <HeadingH2 headingH2="What I Do" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

        {features.map(({ Icon, title, description }) => (
          <div key={title} className="shadow-white-3 gradient-box p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <Icon className="text-[var(--primaryColor)] text-4xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
        
      </div>
     </div>

    </div>
  )
}
