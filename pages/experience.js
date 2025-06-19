import Link from 'next/link'
import { Circle, ExternalLink, Calendar, MapPin, Users, Code, Trophy } from "lucide-react";

export default function Experience() {
  function genTechStacks(stacks) {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full px-3 py-1 text-xs font-medium hover:from-blue-100 hover:to-indigo-100 transition-colors"
          >
            {stack}
          </span>
        ))}
      </div>
    )
  }

  const experiences = [
    {
      period: { start: "Sep 2023", end: "Present", duration: "Current" },
      title: "Back End Engineer Lead",
      company: "Everywhere.id",
      location: "Indonesia",
      logo: "/images/projects/logo_everywhereid.jpeg",
      type: "leadership",
      techStacks: ["golang", "ruby on rails", "postgresql", "mongodb", "redis", "websocket"],
      description: `everywhere.id - previously GoPlay under GOTO

Design 2 way online to offline entertainment system. playbox provide content creator a way to perform in multiple places at once. imagine creator from jakarta, can play in multiple cafés at once. the creator can also see the venue situation through the camera provided in play box. This also allow the creator to receive gift from multiple places at once using virtual gift feature.`,
      highlights: [
        "Leading a team of 2 engineers",
        "System design and requirements gathering", 
        "Improving play everywhere schedule management and reliability",
        "Develop picture in picture feature - allows visitors to see through different locations like a portal",
        "Migrate infrastructure from Google Cloud to Tencent Cloud",
        "Build internal tools to manage k8s ENV using kubeseal",
        "Build ad system with real-time entertainment and advertisement",
        "Integrate ad with face recognition to count impressions in real-time"
      ],
      links: [
        { url: "https://play.everywhere.id", label: "Play Everywhere" },
        { url: "https://github.com/umarkotak/go-kubeseal-gui", label: "Kubeseal GUI" }
      ]
    },
    {
      period: { start: "Jun 2021", end: "Present", duration: "Current" },
      title: "Founder & Full Stack Engineer",
      company: "Bukukaskita",
      location: "Indonesia",
      logo: "/images/projects/logo_bukukaskita.jpeg",
      type: "founder",
      techStacks: ["golang", "ruby on rails", "reactjs", "postgresql"],
      description: "Bukukaskita is a web application for managing your family expenses",
      highlights: [
        "Record daily transaction with voice-to-transaction feature",
        "Receipt image to transaction conversion",
        "Dashboard showing current balance of each wallet",
        "Statistical dashboard and budgeting tools",
        "Investing simulation features",
        "Gold prices wallet with loss and gain tracker",
        "Wealth asset management system"
      ],
      links: [
        { url: "https://bukukaskita.netlify.app", label: "Visit App" },
        { url: "https://www.linkedin.com/company/bukukaskita", label: "LinkedIn" }
      ]
    },
    {
      period: { start: "Nov 2022", end: "Sep 2023", duration: "11 Months" },
      title: "Go Play Back End Tech Lead",
      company: "Gojek",
      location: "Indonesia", 
      logo: "/images/projects/logo_goto.jpeg",
      type: "leadership",
      techStacks: ["golang", "ruby on rails", "javascript", "python", "postgresql", "mongodb", "elastic search", "redis", "kafka"],
      description: "",
      highlights: [
        "Design and migrate GoPlay social login flow with 0 downtime",
        "Managing team members, task analysis, and distribution",
        "Design refund mechanism for token top-up flow",
        "Build live features (audience list, badges, missions, payout for agency)",
        "Managing WebSocket for controlling live stream",
        "Design multi-streaming feature with Agora and RTMP protocol",
        "Design multi-chat integration with external providers (YouTube, FB)",
        "Develop play everywhere box - interactive offline live stream box",
        "Ads management system"
      ]
    },
    {
      period: { start: "Jul 2020", end: "Sep 2023", duration: "3 Yrs 3 Mo" },
      title: "Go Play Back End Developer",
      company: "Gojek",
      location: "Indonesia",
      logo: "/images/projects/logo_goto.jpeg",
      type: "development",
      techStacks: ["golang", "ruby on rails", "javascript", "python", "postgresql", "mongodb", "elastic search", "redis", "kafka"],
      description: "GoPlay is an entertainment product under Gojek. We provide video on demand (VOD), live platform for content creators, and play everywhere. These products main goal is enabling Indonesian content creators to make money online and achieve sustainability.",
      highlights: [
        "Create beacon - internal tool for tracking user actions",
        "Create payout feature using Midtrans IRIS for creator earnings",
        "Build features: order for gifting, revenue and payout, tracking",
        "Develop analytic reporting and identity services",
        "Implement social login and alerting systems"
      ]
    },
    {
      period: { start: "May 2018", end: "Jul 2020", duration: "2 Yrs 1 Mo" },
      title: "Go Life Back End Developer",
      company: "Gojek",
      location: "Indonesia",
      logo: "/images/projects/logo_goto.jpeg",
      type: "development",
      techStacks: ["ruby on rails", "postgresql", "redis"],
      description: "GoLife is a lifestyle service provider offering services like Go Massage, Go Glam, Go Clean, etc. We serve thousands of daily active users with hundreds of concurrent orders during peak times.",
      highlights: [
        "Build notification system, booking, and product discovery",
        "Develop address history, user review and feedback systems",
        "Implement discount and vouchering features",
        "Initiate Marvin - supermarket app for daily necessities delivery",
        "Establish tech documentation as source of truth practice"
      ]
    },
    {
      period: { start: "Feb 2019", end: "Aug 2019", duration: "7 Months" },
      title: "PIC Back End Go Life Service Marketplace",
      company: "Gojek",
      location: "Indonesia",
      logo: "/images/projects/logo_goto.jpeg",
      type: "leadership",
      techStacks: ["ruby on rails", "postgresql", "redis"],
      description: "GoLife Service Marketplace is a platform where life service providers can list themselves, allowing easy discovery by GoLife users who can make bookings and payments.",
      highlights: [
        "Design complete system architecture (ordering, partner listing, payment)",
        "Set up initial infrastructure",
        "Design end-to-end product flow"
      ]
    },
    {
      period: { start: "Jan 2018", end: "Apr 2018", duration: "4 Months" },
      title: "Trainee",
      company: "Gojek",
      location: "Indonesia",
      logo: "/images/projects/logo_goto.jpeg",
      type: "training",
      techStacks: ["ruby", "java", "python", "postgresql"],
      description: "",
      highlights: [
        "Learn public speaking and communication skills",
        "Master programming practices: pair programming, TDD, DRY principles",
        "Learn DevOps, infrastructure provisioning and automation",
        "Study data science, analysis and extraction techniques"
      ]
    },
    {
      period: { start: "Feb 2015", end: "Feb 2018", duration: "3 Yrs 1 Mo" },
      title: "Basic Computer Lab Assistant",
      company: "Institut Teknologi PLN",
      location: "Indonesia",
      logo: "/images/projects/logo_itpln.jpeg",
      type: "education",
      techStacks: ["php", "javascript", "mysql"],
      description: "",
      highlights: [
        "Assist students in learning programming languages (C++, C#, PHP, Java, Python)",
        "Build web portal for student daily activities and task management",
        "Maintain laboratory hardware and network infrastructure",
        "Set up LAN connections and local web servers"
      ]
    },
    {
      period: { start: "Oct 2017", end: "Dec 2017", duration: "3 Months" },
      title: "Bootcamp Participant",
      company: "Kolla",
      location: "Indonesia",
      logo: "/images/projects/logo_goto.jpeg",
      type: "training",
      techStacks: ["golang", "ruby on rails", "postgres", "kafka"],
      description: "Participant of Kolla Go Scholar Ruby on Rails bootcamp learning Ruby programming language and Ruby on Rails framework.",
      highlights: [
        "Build simple online ride sharing application using Rails and Kafka",
        "Develop caching location service using Go"
      ]
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'leadership': return <Users className="w-4 h-4" />;
      case 'founder': return <Trophy className="w-4 h-4" />;
      case 'development': return <Code className="w-4 h-4" />;
      case 'training': return <Circle className="w-4 h-4" />;
      case 'education': return <Circle className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'leadership': return 'from-purple-100 to-pink-100 border-purple-200 text-purple-700';
      case 'founder': return 'from-yellow-100 to-orange-100 border-orange-200 text-orange-700';
      case 'development': return 'from-blue-100 to-cyan-100 border-blue-200 text-blue-700';
      case 'training': return 'from-green-100 to-emerald-100 border-green-200 text-green-700';
      case 'education': return 'from-gray-100 to-slate-100 border-gray-200 text-gray-700';
      default: return 'from-gray-100 to-slate-100 border-gray-200 text-gray-700';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent pb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through various roles in tech, from learning to leading teams and building products that impact thousands of users.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-yellow-300 to-orange-300"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6">
                {/* Timeline marker */}
                <div className="absolute left-2 md:left-22 w-4 h-4 bg-white border-4 border-orange-400 rounded-full shadow-lg"></div>
                
                {/* Date column */}
                <div className="w-full md:w-32 flex-shrink-0 ml-10 md:ml-0">
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="w-4 h-4 text-gray-500 mr-1" />
                    </div>
                    <div className="text-xs font-medium text-gray-800">{exp.period.end}</div>
                    <div className="text-xs text-gray-500">{exp.period.duration}</div>
                    <div className="text-xs font-medium text-gray-800">{exp.period.start}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 ml-10 md:ml-0">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${getTypeColor(exp.type)} p-6`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-10 h-10 object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {getTypeIcon(exp.type)}
                              <h3 className="text-lg font-bold">{exp.title}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm opacity-80">
                              <MapPin className="w-3 h-3" />
                              <span className="font-semibold">{exp.company}</span>
                              <span>•</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {exp.description && (
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                      )}

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                          <div className="grid gap-2">
                            {exp.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack */}
                      {genTechStacks(exp.techStacks)}

                      {/* Links */}
                      {exp.links && exp.links.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-3">
                            {exp.links.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">6+</div>
                <div className="text-sm text-blue-600">Years Experience</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                <div className="text-2xl font-bold text-purple-700">5</div>
                <div className="text-sm text-purple-600">Leadership Roles</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-700">10+</div>
                <div className="text-sm text-green-600">Technologies</div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
                <div className="text-2xl font-bold text-orange-700">1</div>
                <div className="text-sm text-orange-600">Company Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}