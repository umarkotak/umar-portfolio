import Link from 'next/link'
import { Circle, Home } from "lucide-react";

export default function Experience() {
  function genTechStacks(stacks) {
    return (
      <div className="flex flex-wrap gap-1">
        {stacks.map((stack) => (
          <div
            key={stack}
            className="bg-yellow-50 border border-yellow-300 rounded-full px-2 py-0.5 text-xs flex-none"
          >
            {stack}
          </div>
        ))}
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
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Present</span>
              <span>Sep 2023</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="/images/projects/logo_everywhereid.jpeg" />
                    </div>
                  </Link>
                  Back End Engineer Lead
                </div>
                <div className="text-xs flex-none">
                  <b>Everywhere.id</b> - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div className='w-full overflow-auto'>
                  {genTechStacks(["golang", "ruby on rails", "postgresql", "mongodb", "redis", "websocket"])}
                </div>

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    everywhere.id - previously GoPlay under GOTO
                    <br/><br/>
                    Design 2 way online to offline entertainment system. playbox provide content creator a way to perform in multiple places at once. imagine creator from jakarta, can play in multiple cafes at once. the creator can also see the venue situation through the camera provided in play box. This also allow the creator to receive gift from multiple places at once using virtual gift feature.
                    <br/><br/>
                    Works:
                    <br/>
                    - Leading a team of 2 engineers
                    <br/>
                    - System design and requirements gathering
                    <br/>
                    - Improving play everywhere schedule management and reliability (which creator should perform when and where)
                    <br/>
                    - Develop picture in picture feature it allows visitor on playbox in cafe A can see visitor on playbox in cafe B, imagine you can see through the other side of a portal.
                    <br/>
                    - Migrate infrastructure from Google Cloud to Tencent Cloud
                    <br/>
                    - Make internal tools to manage k8s ENV using kubeseal - <a className='text-blue-500' href="https://github.com/umarkotak/go-kubeseal-gui">https://github.com/umarkotak/go-kubeseal-gui</a>
                    <br/>
                    - Build ad system. You can have both entertainment and advertisement in public places in realtime
                    <br/>
                    - Integrate ad with face recognition to count how many impression happen in realtime

                    <br/><br/>
                    play everywhere: <a className='text-blue-500' href="https://play.everywhere.id">https://play.everywhere.id</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Present</span>
              <span>Jun 2021</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="/images/projects/logo_bukukaskita.jpeg" />
                    </div>
                  </Link>
                  Founder & Full Stack Engineer
                </div>
                <div className="text-xs flex-none">
                  <b>Bukukaskita</b> - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div className='w-full overflow-auto'>
                  {genTechStacks(["golang", "ruby on rails", "reactjs", "postgresql"])}
                </div>

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    Bukukaskita is a web application for managing your family expenses
                    <br/><br/>
                    Features:
                    <br/>
                    Record daily transaction, Voice to transaction, Receipt image to transaction, Dashboard to show current balance of each wallets, Statistical dashboard, Investing simulation, Budgeting, Gold prices wallet with loss and gain tracker, Wealth asset management.
                    <br/><br/>
                    <a className='text-blue-500' href="https://bukukaskita.netlify.app">https://bukukaskita.netlify.app</a>
                    <br/>
                    <a className='text-blue-500' href="https://www.linkedin.com/company/bukukaskita">https://www.linkedin.com/company/bukukaskita</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Sep 2023</span>
              <span>11 Months</span>
              <span>Nov 2022</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="/images/projects/logo_goto.jpeg" />
                    </div>
                  </Link>
                  Go Play Back End Tech Lead
                </div>
                <div className="text-xs flex-none">
                  <b>Gojek</b> - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div className='w-full overflow-auto'>
                  {genTechStacks(["golang", "ruby on rails", "javascript", "python", "postgresql", "mongodb", "elastic search", "redis", "kafka"])}
                </div>

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    Works:
                    <br/>
                    - design and migrate goplay social login flow on top of existing gojek auth flow with 0 down time
                    <br/>
                    - managing team member, task analysis, task breakdown, RnD and task distribution
                    <br/>
                    - design refund mechanism for existing token top up flow
                    <br/>
                    - build live features (audience list, badges, missions, payout for agency, etc)
                    <br/>
                    - managing web socket for controlling live stream
                    <br/>
                    - design multi streaming feature with agora, and forward to other live provider using rtmp protocol
                    <br/>
                    - design multi chat integration with external provider; eg youtube, FB live chat
                    <br/>
                    - develop play everywhere box, an interactive offline live stream box with camera
                    <br/>
                    - ads management
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Sep 2023</span>
              <span>3 Yrs 3 Mo</span>
              <span>Jul 2020</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="/images/projects/logo_goto.jpeg" />
                    </div>
                  </Link>
                  Go Play Back End Developer
                </div>
                <div className="text-xs flex-none">
                  <b>Gojek</b> - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div className='w-full overflow-auto'>
                  {genTechStacks(["golang", "ruby on rails", "javascript", "python", "postgresql", "mongodb", "elastic search", "redis", "kafka"])}
                </div>

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    Goplay is an entertainment product that is under gojek. We provide video on demand (VOD), live platform for content creators, and the recent product is play everywhere. these product main goal is enabling Indonesian content creators to make money online and can achieve sustainability by themself.
                    <br/><br/>
                    Stack: golang, ruby on rails, postgres, mongodb, redis
                    <br/>
                    Works:
                    <br/>
                    - create beacon, an internal tools for tracking user action.
                    <br/>
                    - create payout feature using midtrans IRIS, this allow creator to pullout the money they receive from the audience.
                    <br/>
                    - analysis and build features such as: order for gifting, revenue and payout, tracking, analytic reporting, identity service, social login, alerting etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Jul 2020</span>
              <span>2 Yrs 1 Mo</span>
              <span>May 2018</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="/images/projects/logo_goto.jpeg" />
                    </div>
                  </Link>
                  Go Life Back End Developer
                </div>
                <div className="text-xs flex-none">
                  <b>Gojek</b> - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div>

                </div>
                {genTechStacks(["ruby on rails", "postgresql", "redis"])}

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    Golife is a lifestyle service provider. we provide service such as go massage (where a therapist is assigned and then directed to your location), go glam (a beautician), go clean (a cleaner), etc. we have thousands of daily active user and hundreds of concurrent orders during our peak time, eg: on weekend.
                    <br/><br/>
                    Works:
                    <br/>
                    - Build various features for goplay such as: notification system, booking, product discovery, address history, user review and feedback, discount, vouchering, alerting, etc.
                    <br/>
                    - Initiating marvin, a supermarket app. It allows you to buy daily necessity and then will be delivered to your home.
                    <br/>
                    - Initiate the practice of making tech documentation as source of truth for all discussion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Aug 2019</span>
              <span>7 Months</span>
              <span>Feb 2019</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="/images/projects/logo_goto.jpeg" />
                    </div>
                  </Link>
                  PIC Back End Go Life Service Marketplace
                </div>
                <div className="text-xs flex-none">
                  <b>Gojek</b> - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div>

                </div>
                {genTechStacks(["ruby on rails", "postgresql", "redis"])}

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    GoLife Service Marketplace is a platform where life service provider such as massage parlor, automotive garage, etc can list themself on the platform. This allow their location to be easily discovered by the GoLife users. Users can also made a booking and made a payment through the marketplace.
                    <br/><br/>
                    I am in charge of designing and maintaining GoLife Service Marketplace Backend.
                    <br/>
                    Works:
                    <br/>
                    - Design all the system for service marketplace (ordering, partner listing, payment, etc)
                    <br/>
                    - Setting up the initial Infrastructure
                    <br/>
                    - End to end products flow design
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Apr 2018</span>
              <span>4 Months</span>
              <span>Jan 2018</span>
            </div>
            <div className="flex-1 border border-yellow-300 rounded-lg">
              <div
                id="work-header"
                className="flex flex-col md:flex-row w-full md:justify-between md:items-center bg-yellow-50 p-2 rounded-lg"
              >
                <div className="w-full flex items-center font-semibold">
                  <Link href="#" className="avatar mr-2">
                    <div className="w-8 rounded-full border border-black">
                      <img src="/images/projects/logo_goto.jpeg" />
                    </div>
                  </Link>
                  Trainee
                </div>
                <div className="text-xs flex-none">
                  <b>Gojek</b> - Indonesia
                </div>
              </div>

              <div className="w-full p-2">
                <div>

                </div>
                {genTechStacks(["ruby", "java", "python", "postgresql"])}

                <div className="text-xs md:text-sm mt-2">
                  <p>
                    - Learn public speaking.
                    <br/>
                    - Learn basic programming and practices, pair programming, tdd, DRY, etc.
                    <br/>
                    - Learn Devops, infrastructure provisioning and automation.
                    <br/>
                    - Learn Data science, data analysis and extraction.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div id="work-container" className="w-full flex flex-row">
            <div
              id="work-time"
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Feb 2018</span>
              <span>3 Yrs 1 Mo</span>
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
                      <img src="/images/projects/logo_itpln.jpeg" />
                    </div>
                  </Link>
                  Basic Computer Lab Assistant
                </div>
                <div className="text-xs flex-none">
                  <b>Institut Teknologi PLN</b> - Indonesia
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
              className="w-[62px] flex-none border-l border-black flex flex-col justify-between text-[10px] p-1"
            >
              <span>Dec 2017</span>
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
                      <img src="/images/projects/logo_goto.jpeg" />
                    </div>
                  </Link>
                  Bootcamp Participant
                </div>
                <div className="text-xs flex-none">
                  <b>Kolla</b> - Indonesia
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
