'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function About() {
  // Mock data for coaches
  const headCoach = {
    name: "Tim Allen",
    title: "Owner / Head Coach",
    image: "/staff/tim-allen.jpg",
    bio: "Coach Allen has coached for nearly 20 years. He began coaching at Flo Valley College and later moved on to Robert Morris University where he was an assistant coach. He coached at Grant middle school for 6 years where he won multiple state championships. He is currently the head coach of Sacred Heart Griffin Boys Varsity Basketball Team, where he has over 19 championships. His greatest accomplishment is making it to the final 4 in 2020 and winning a state championship in 2022. Coach Allen has been named IBCA coach of the year 6 times.He has been married for 15 years and has two children. He is most proud of his relationship with Christ.",
    link: "/coaches/head-coach"
  }

  const basketballCoaches = [
    { 
      name: "Cameron Manns", 
      title: "Co-Owner / Coach", 
      image: "/staff/cameron-manns.jpg",
      bio: "Coach Cameron Manns was born and raised in Decatur, Illinois. He graduated from MacArthur High School in 2002. He earned his Bachelor's Degree in Psychology in 2017, followed by his Master's Degree in Business Administration in 2019, both from Benedictine University. A devoted family man, he is a very proud father of two and a husband of 15 years and counting. He has a great passion for youth and the game of basketball. He combines the two in leading young men in a positive way through mentoring the youth through previous positions at Webster-Cantrell Hall, The YMCA, Decatur Park District and Team CREW. Coach Manns is a man of God and a believer in Christ and the power of prayer.",
      link: "/coaches/cameron-manns"
    },
    { 
      name: "Stephan Dawson", 
      title: "Co-Owner / Coach", 
      image: "/staff/stephan-dawson.jpg",
      bio: "Stefan Dawson was born in Decatur, Illinois. The 1997 MacArthur High School graduate played basketball and football. He attended Richland Community College, where he earned his associate of arts degree in sociology in 2002, followed by his bachelors of science in social work in 2005 from the University of Springfield. He received his leadership youth mental health certificate in 2017. With over 28 years of experience in mentoring, career and job coaching, developing and implementing strategic youth programs and high-level refereeing experience. A believer and disciple of Jesus Christ, and a devoted husband and father. ",
      link: "/coaches/stephan-dawson"
    },
    { 
      name: "Jed Walker", 
      title: "Co-Owner / Coach", 
      image: "/staff/jed-walker.jpg",
      bio: "Coach Walker was born in Decatur, IL. He graduated from Decatur St. Teresa in 2008 and played basketball and football. He was recognized as an all-conference player and an all-Macon County. He earned his associate of arts degree from Parkland Community College in 2013, followed by his bachelor's in criminal justice from Greenville University. Married for 12 years and counting, he has two beautiful children. With a dedication to coaching, he emphasizes teamwork, sportsmanship and resilience to his young athletes. Not only improving their skills and confidence on the court and field but strives to make every young player feel valued and motivates them to reach their full potential in all of life.",
      link: "/coaches/jed-walker"
    },
  ]

  const staff = [
    { name: "JQ Williams", title: "Product Designer", image: "/staff/jq-williams.jpg", email: "jq.williams@teamcrew.com", phone: "(555) 123-4567" },
    { name: "Kevin Nye", title: "Customer Support Lead", image: "/staff/kevin-nye.jpg", email: "kevin.nye@teamcrew.com", phone: "(555) 123-4568" },
    { name: "Noah Doss", title: "Art Director", image: "/staff/noah-doss.jpg", email: "noah.doss@teamcrew.com", phone: "(555) 123-4569" },
    { name: "Derek Jackson", title: "Tech Lead", image: "/staff/derek-jackson.jpg", email: "derek.jackson@teamcrew.com", phone: "(555) 123-4570" },
    { name: "Daniel Pittman", title: "Product Manager", image: "/staff/daniel-pittman.jpg", email: "daniel.pittman@teamcrew.com", phone: "(555) 123-4571" },
    { name: "Tirell Anderson", title: "Product Designer", image: "/staff/tirell-anderson.jpg", email: "tirell.anderson@teamcrew.com", phone: "(555) 123-4572" },
    { name: "Reiko Hurd", title: "Customer Support Lead", image: "/staff/reiko-hurd.jpg", email: "reiko.hurd@teamcrew.com", phone: "(555) 123-4573" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative h-96 md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Red Box - Left Side */}
          <div className="w-full md:w-[35%] bg-[#d51510] flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 font-alumni-sans">
              Our Coaches & Staff
            </h1>
          </div>
          {/* Image - Right Side */}
          <div className="hidden md:block md:w-[65%] bg-gray-800">
            <img 
              src="/staff/all-staff.jpg" 
              alt="Team Photo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Head Coach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Coach Info - Left Side */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-gray-800 font-alumni-sans">{headCoach.name}</h2>
                <Link 
                  href={headCoach.link}
                  className="inline-flex items-center text-[#d51510] hover:text-[#b51210] transition-colors group"
                >
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <p className="text-xl text-[#d51510] font-semibold mb-6 font-josefin-sans">{headCoach.title}</p>
              <p className="text-gray-600 mb-6 leading-relaxed font-josefin-sans">{headCoach.bio}</p>
            </div>
            {/* Coach Image - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={headCoach.image}
                    alt={headCoach.name}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basketball Coaches Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-alumni-sans">
            Basketball Coaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basketballCoaches.map((coach, index) => (
              <div key={index} className="text-center relative">
                <div className="aspect-w-3 aspect-h-4 mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
                <div className="bg-[#edebeb] rounded-lg p-6 -mt-2">
                  <h3 className="text-xl font-semibold text-gray-800 font-alumni-sans">{coach.name}</h3>
                  <p className="text-[#d51510] font-medium mb-3 font-josefin-sans">{coach.title}</p>
                  <p className="text-gray-600 text-sm font-josefin-sans">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-alumni-sans">
            Support Staff
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {staff.map((member, index) => (
              <div key={index} className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md">
                <div className="w-1/3 flex-shrink-0">
                  <div className="aspect-w-3 aspect-h-4 h-full">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-[#edebeb] p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-gray-800 font-alumni-sans">{member.name}</h3>
                  <p className="text-[#d51510] font-medium mb-3 font-josefin-sans">{member.title}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-600 font-josefin-sans">{member.email}</p>
                    <p className="text-gray-600 font-josefin-sans">{member.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <footer className="bg-[#1f1f1f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team C.R.E.W. Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Team C.R.E.W.</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Home</Link></li>
                <li><Link href="/merch" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Shop</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Contact</Link></li>
              </ul>
            </div>

            {/* Leadership Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Leadership</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">FAQ</Link></li>
                <li><Link href="/shipping-returns" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Shipping & Returns</Link></li>
                <li><Link href="/store-policy" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Store Policy</Link></li>
                <li><Link href="/payment-methods" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Payment Methods</Link></li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Join Our Newsletter</h3>
              <p className="text-gray-400 text-sm">
                Stay updated with Team C.R.E.W. news and events.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Team C.R.E.W. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}