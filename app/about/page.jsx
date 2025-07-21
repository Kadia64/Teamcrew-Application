'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

export default function About() {
  const [visibleCoaches, setVisibleCoaches] = useState(new Set())
  const [visibleStaff, setVisibleStaff] = useState(new Set())
  const coachRefs = useRef([])
  const staffRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const coachObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          setVisibleCoaches(prev => new Set(prev).add(index))
        }
      })
    }, observerOptions)

    const staffObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          setVisibleStaff(prev => new Set(prev).add(index))
        }
      })
    }, observerOptions)

    coachRefs.current.forEach((ref) => {
      if (ref) coachObserver.observe(ref)
    })

    staffRefs.current.forEach((ref) => {
      if (ref) staffObserver.observe(ref)
    })

    return () => {
      coachObserver.disconnect()
      staffObserver.disconnect()
    }
  }, [])
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
      <PageTitle title="About" />
      {/* Header Section */}
      <section className="relative h-96 md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Red Box - Left Side */}
          <div className="w-full md:w-[35%] bg-[#d51510] flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center px-8 py-4 font-alumni-sans border-4 border-white leading-relaxed">
              Our Coaches <br></br> & Staff
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
              <Link 
                href={headCoach.link}
                className="group inline-block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-gray-800 font-alumni-sans group-hover:text-[#d51510] transition-colors">{headCoach.name}</h2>
                  <ArrowRight className="w-6 h-6 text-[#d51510] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xl text-[#d51510] font-semibold mb-6 font-josefin-sans">{headCoach.title}</p>
              </Link>
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
              <div 
                key={index} 
                ref={el => coachRefs.current[index] = el}
                data-index={index}
                className={`text-center relative transition-all duration-700 ${
                  visibleCoaches.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
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
              <div 
                key={index} 
                ref={el => staffRefs.current[index] = el}
                data-index={index}
                className={`flex gap-4 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 ${
                  visibleStaff.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
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

      <Footer />
    </div>
  )
}