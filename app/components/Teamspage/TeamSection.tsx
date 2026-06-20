import React from 'react';
import Image from 'next/image';

const teamData = [
  {
    name: "Veena Munganahalli",
    role: "Founder Director",
    description: "A serial entrepreneur since the age of 12, Veena has founded and exited multiple businesses in four countries across four continents. Apart from founding Sencirc Holding along with Deepak, she is also a founding board member of Angel Spark, an angel investing network in Dubai and is also on the board of few impact-oriented startups in India and GCC. She is passionate about mentoring and promoting women in business. Sencirc was born out of an opportunity that arose in 2021 and a realization that waste to value enterprises are a global requirement for a sustainable future. Veena is an accounts and economics graduate from Mount Carmel College in Bengaluru, India.",
    image: "/teamsection/team1.png",
    layout: 'horizontal'
  },
  {
    name: "Deepak Munganahalli",
    role: "Founder Director",
    description: "Deepak served as an independent director on the board of Valaris (NYSE:VAL) and chaired the Sustainability committee. Previously, he cofounded Joulon in partnership with KKR to create an energy industry asset management services company. Prior to that, Mr. Munganahalli had a 25 year career with Schlumberger and Transocean in various management and executive roles. Mr. Munganahalli is a graduate of the Indian Institute of Technology at Kanpur and the Harvard Business School General Management Program.",
    image: "/teamsection/team2.png",
    layout: 'horizontal'
  },
  {
    name: "Mohamed Nazim",
    role: "Manager",
    description: null,
    linkedin: "#",
    image: "/teamsection/team3.png",
    layout: 'vertical'
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 px-6 max-w-[1100px] mx-auto font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5ca35e] mb-12">
        Sencirc Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {teamData.map((member, idx) => (
          <div 
            key={idx} 
            className={`bg-[#f0fcf1] rounded-3xl p-8 lg:p-10 shadow-sm ${member.layout === 'vertical' ? 'flex flex-col items-center text-center' : ''}`}
          >
            {member.layout === 'horizontal' ? (
              <>
                <div className="flex items-center gap-5 mb-6">
                  {/* Portrait */}
                  <div className="relative w-[88px] h-[88px] rounded-full border-[3px] border-[#5ca35e] bg-white overflow-hidden shrink-0 flex items-center justify-center">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#104b36] mb-1">{member.name}</h3>
                    <p className="text-[#5ca35e] font-medium text-[15px]">{member.role}</p>
                  </div>
                </div>
                {member.description && (
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {member.description}
                  </p>
                )}
              </>
            ) : (
              <>
                {/* Portrait */}
                <div className="relative w-32 h-32 rounded-full border-[3px] border-[#5ca35e] bg-white overflow-hidden mb-6 flex items-center justify-center">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                </div>
                <h3 className="text-[26px] font-bold text-[#104b36] mb-1">{member.name}</h3>
                <p className="text-[#5ca35e] font-medium text-[16px] mb-8">{member.role}</p>
                
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] text-white rounded flex items-center justify-center w-10 h-10 hover:bg-[#005e93] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
