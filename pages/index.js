import Link from 'next/link'
import { Github, Linkedin, Youtube, Mail, MapPin, Calendar, Code, Briefcase } from 'lucide-react'

export default function Home() {
  var currentYear = new Date().getFullYear()
  var startCodeAt = 2015
  var startCodeDur = currentYear - startCodeAt
  var startWorkAt = 2019
  var startWorkDur = currentYear - startWorkAt

  const skills = {
    active: ['Golang', 'Ruby', 'Javascript'],
    other: ['Python', 'PHP', 'Java']
  }

  const technologies = [
    'PostgreSQL', 'MongoDB', 'Redis', 'Firebase',
    'Elasticsearch', 'Cloud (Google, AWS, Tencent)', 'Kafka'
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="relative">
              <img
                src="/images/me.png"
                className="rounded-2xl w-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Umar's profile"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-3 shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-full py-3 px-6 shadow-sm">
              <span className="text-lg">Hello, I am <span className="font-bold text-orange-600">Umar</span>!</span>
              <span className="text-2xl">👋</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Backend Engineer, FullStack Developer, Content Creator, and Teacher
            </h1>

            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                I build various products in hope that they can help people solve real problems and make their lives easier.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                  <Code className="w-4 h-4 text-blue-500" />
                  <span>Coding since {startCodeAt} (~{startCodeDur} years)</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                  <Briefcase className="w-4 h-4 text-green-500" />
                  <span>Working since {startWorkAt} (~{startWorkDur} years)</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-3 pt-4">
              <Link href="https://www.youtube.com/channel/UCuyrJXEftl49X3zhLkD8mug">
                <div className="group bg-white border-2 border-red-200 hover:border-red-400 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Youtube className="w-7 h-7 text-red-500 group-hover:text-red-600" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-umar-ramadhana-476083141">
                <div className="group bg-white border-2 border-blue-200 hover:border-blue-400 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Linkedin className="w-7 h-7 text-blue-500 group-hover:text-blue-600" />
                </div>
              </Link>
              <Link href="https://github.com/umarkotak">
                <div className="group bg-white border-2 border-gray-200 hover:border-gray-400 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Github className="w-7 h-7 text-gray-700 group-hover:text-gray-900" />
                </div>
              </Link>
              <a href="mailto:codingmase@gmail.com">
                <div className="group bg-white border-2 border-orange-200 hover:border-orange-400 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Mail className="w-7 h-7 text-orange-500 group-hover:text-orange-600" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">My Philosophy</h2>
            <div className="text-lg leading-relaxed text-gray-600 space-y-4 font-serif">
              <p>
                I build and deliver <span className="bg-gradient-to-r from-yellow-200 to-orange-200 px-3 py-1 rounded-lg font-semibold">tech products</span> that matter.
              </p>
              <p>
                <span className="bg-gradient-to-r from-yellow-200 to-orange-200 px-3 py-1 rounded-lg font-semibold">From 0 to 1</span> — for personal and professional growth.
              </p>
              <p>
                The products I build hopefully <span className="bg-gradient-to-r from-yellow-200 to-orange-200 px-3 py-1 rounded-lg font-semibold">solve your problems</span> and get used by many people.
              </p>
              <p className="text-xl font-semibold text-gray-700 mt-6">
                I am super open to learning new technologies! 🚀
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-base">
                  You can see all my projects{' '}
                  <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2">
                    here
                  </Link>
                </p>
                <p className="mt-2">Hope they are useful for you! ^^</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Programming Languages */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-lg">
                Programming Languages
              </span>
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-green-600 mb-2">Currently Active</p>
                <div className="flex flex-wrap gap-2">
                  {skills.active.map((lang) => (
                    <span key={lang} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">Also Experienced</p>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((lang) => (
                    <span key={lang} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              <span className="bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-lg">
                Technologies & Tools
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => (
                <div key={tech} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 text-center border border-gray-200 hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 text-center border border-orange-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect!</h3>
          <p className="text-gray-600 mb-4">
            If you're interested in collaborating or just want to chat about tech, feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://www.linkedin.com/in/muhammad-umar-ramadhana-476083141" className="flex items-center gap-2 bg-white hover:bg-blue-50 px-6 py-3 rounded-full shadow-sm border border-blue-200 transition-colors">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-600">Message on LinkedIn</span>
            </Link>
            <span className="text-gray-400">or</span>
            <a href="mailto:codingmase@gmail.com" className="flex items-center gap-2 bg-white hover:bg-orange-50 px-6 py-3 rounded-full shadow-sm border border-orange-200 transition-colors">
              <Mail className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-orange-600">codingmase@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 24, 2025</span>
          </div>
        </div>
      </div>
    </main>
  )
}