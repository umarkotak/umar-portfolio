import Link from 'next/link'
import { Github, Linkedin, Youtube } from 'lucide-react'

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
              Backend Engineer, FullStack Engineer, Content Creator, and Teacher.
            </div>
            <div className="mt-2">
              <p className="tracking-wide">
                I build various products in hope that it can help peoples.
              </p>
              <p className='tracking-wide text-xs'>
                Coding since {startCodeAt} (~{startCodeDur} years) - Work since {startWorkAt} (~{startWorkDur} years)
                <br/><br/>
                I am based in Jakarta, Indonesia (South East Asia)
              </p>
            </div>
            <div className="mt-4">
              <div className="flex flex-row gap-2">
                <Link href="https://www.youtube.com/channel/UCuyrJXEftl49X3zhLkD8mug">
                  <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                    <Youtube size={28} />
                  </div>
                </Link>
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

        <div className="my-24"></div>

        <div>
          <p className='text-center italic font-serif'>
            I build and deliver <span className='bg-yellow-100 p-1'>tech products</span>
            <br/>
            <span className='bg-yellow-100 p-1'>From 0 to 1;</span> For personal and professional
            <br/>
            The product I build, hopefully, will <span className='bg-yellow-100 p-1'>solve your problem</span> and used by a lot of people
            <br/>
            I am super open on learning new tech
            <br/>
            You can see all my projects <Link className='text-blue-600' href="/projects">here</Link>
            <br/>
            Hope it is usefull for you ^^
            <br/><br/>
            If you are interested to connect, you can message my linkedin
            <br/>
            Or email me: <span className='text-blue-600'>codingmase@gmail.com</span>
          </p>
        </div>

        <div className="my-24"></div>

        <div className='w-full flex justify-center gap-4'>
          <div>
            <p className='text-sm tracking-wide text-center'>
              <span className='bg-yellow-100 p-1'>Programming Language That I Use</span>
              <br/>
              Golang (active)
              <br/>
              Ruby (active)
              <br/>
              Javascript (active)
              <br/>
              Python
              <br/>
              PHP
              <br/>
              Java
              <br/>
            </p>
          </div>
          <div>
            <p className='text-sm tracking-wide text-center'>
            <span className='bg-yellow-100 p-1'>Other Tech That I Use</span>
              <br/>
              Postgresql
              <br/>
              Mongodb
              <br/>
              Redis
              <br/>
              Firebase
              <br/>
              Elasticsearch
              <br/>
              Cloud (Google, AWS, Tencent)
              <br/>
              Kafka
              <br/>
              Etc
              <br/>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
