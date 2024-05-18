import Link from 'next/link'
import { Circle, Home } from "lucide-react";

export default function Experience() {
  function genTechStacks(stacks) {
    return (
      <div className="flex w-full gap-1 overflow-auto">
        {stacks.map((stack) => (<div className="bg-yellow-50 border border-yellow-300 rounded-full px-2 py-0.5 text-xs flex-none">
          {stack}
        </div>))}
      </div>
    )
  }

  return (
    <main className="m-2">
      <div className="container max-w-4xl mx-auto">
        <div className="w-full max-w-4xl flex flex-col gap-4">
          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Feb 2018</span>
              <span>3 yrs 1 mo</span>
              <span>Feb 2015</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="https://media.licdn.com/dms/image/C560BAQGFwvJXfWZo_A/company-logo_100_100/0/1630654939373?e=1724284800&v=beta&t=KrFHJFRlPD9hMd8LeTfzT97clj-ScEUrsBoAyOb1z1A" />
                    </div>
                  </Link>
                  Basic Computer Lab Assistant
                </div>
                <div className="text-xs flex-none">
                  Institut Teknologi PLN - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div>

                </div>
                {genTechStacks(["php", "javascript", "mysql"])}

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    - Assist students learning basic programming, eg: c++, c#, php, java, python
                    <br/>
                    - Build a web portal to help student on daily basis. Reporting, giving latest laboratory information, sharing files, collect task, and scoring task, generating report.
                    <br/>
                    - Maintain laboratory. Annually cleaning up the hardwares. Maintain computer performance. Set up LAN connection and local web server.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Dec 2022</span>
              <span>3 Months</span>
              <span>Oct 2017</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="https://placehold.co/200" />
                    </div>
                  </Link>
                  Bootcamp Participant
                </div>
                <div className="text-xs flex-none">
                  Kolla - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div>

                </div>
                {genTechStacks(["golang", "ruby on rails", "postgres", "kafka"])}

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    Participant of Kolla go scholar Ruby on Rails boot camp
                    <br/><br/>
                    Learn ruby programming language and ruby on rails framework
                    <br/><br/>
                    Output :
                    <br/>
                    - Building simple online ride sharing application using rails and kafka
                    <br/>
                    - Building caching location service using go
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
