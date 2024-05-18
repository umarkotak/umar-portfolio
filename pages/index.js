import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export default function Home() {
  var currentYear = new Date().getFullYear()
  var startCodeAt = 2015
  var startCodeDur = currentYear - startCodeAt
  var startWorkAt = 2019
  var startWorkDur = currentYear - startWorkAt

  return (
    <main className="m-2">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:max-w-sm flex-none">
            <img src="/images/me.png" className="rounded-lg w-full shadow-md" />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <span className="border border-yellow-300 bg-yellow-50  rounded-full py-1 px-3">
                Hello, I am <b>Umar</b>! 👋
              </span>
            </div>
            <div className="text-4xl font-semibold mt-2 tracking-wide">
              Backend Engineer, FullStack Engineer, Creator, and Teacher.
            </div>
            <div className="mt-2">
              <p className="tracking-wide">
                I build various products in hope that it can help peoples.
              </p>
              <p className='tracking-wide text-xs'>
                Coding since {startCodeAt} (~{startCodeDur} years) - Work since {startWorkAt} (~{startWorkDur} years)
              </p>
            </div>
            <div className="mt-4">
              <div className="flex flex-row gap-2">
                <Link href="https://www.linkedin.com/in/muhammad-umar-ramadhana-476083141">
                  <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                    <Linkedin size={28} />
                  </div>
                </Link>
                <Link href="https://github.com/umarkotak">
                  <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                    <Github size={28} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
