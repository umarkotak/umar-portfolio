import Link from 'next/link'
import { Eye, Github, Link2 } from 'lucide-react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Experience() {
  function genTechStacks(stacks) {
    return (
      <p className="overflow-auto break-all">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="bg-yellow-50 border border-yellow-300 rounded-full px-2 py-0.5 text-xs flex-none mr-1"
          >
            {stack}
          </span>
        ))}
      </p>
    )
  }

  function genProjectLinks(feGitUrl, beGitUrl, detailUrl, projectUrl) {
    return (
      <>
        {beGitUrl !== "" &&
          <Link href={beGitUrl}>
            <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
              <Github size={20} />
            </div>
          </Link>
        }
        {feGitUrl !== "" &&
          <Link href={feGitUrl}>
            <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
              <Github size={20} />
            </div>
          </Link>
        }
        {detailUrl !== "" &&
          <Link href={detailUrl}>
            <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
              <Eye size={20} />
            </div>
          </Link>
        }
        {projectUrl !== "" &&
          <Link href={projectUrl}>
            <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
              <Link2 size={20} />
            </div>
          </Link>
        }
      </>
    )
  }

  function thumbsGen(thumbs) {
    return (<div className='flex flex-wrap gap-2'>
      {thumbs.map((v)=>(<Zoom key={v}>
        <img
          src={v}
          alt="project-thumb"
          className="w-16 h-16 object-cover rounded-lg border border-yellow-500 shadow-inner"
        />
      </Zoom>))}
    </div>)
  }

  return (
    <main className="m-2">
      <div className="container max-w-4xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/live-everywhere-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                work - everywhereid
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/live-everywhere-thumb-2.png",
                "/images/projects/live-everywhere-thumb-3.png",
                "/images/projects/live-everywhere-thumb-4.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Live Everywhere
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>live</span>
              </h2>
              <div className=''>
                {genTechStacks(["ruby on rails", "golang", "mongodb", "postgresql", "redis", "kafka"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Everywhereid is a platform for content creator to do live streaming. With its new breakthroguh, online to offline performance - this allows content creator to live in multiple places at once such as in mall, food court, cafe, train station, etc.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2023
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "",
                      "",
                      "https://play.everywhere.id",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/best-lms-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/best-lms-thumb-2.png",
                "/images/projects/best-lms-thumb-3.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Best LMS
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>on hold</span>
              </h2>
              <div className=''>
                {genTechStacks(["golang", "javascript", "nextjs", "postgresql"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Best LMS (Learning Management System) - is an LMS build for schools in Indonesia. It is aimed to be hosted locally or globally. There are many features that can help the operational of school such as: payment, content management, student and teacher management, and many more.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2024
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "https://github.com/umarkotak/go-lms-api",
                      "",
                      "",
                      "",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/bukukaskita-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/bukukaskita-thumb-2.png",
                "/images/projects/bukukaskita-thumb-3.png",
                "/images/projects/bukukaskita-thumb-4.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Bukukas Kita
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>offline</span>
              </h2>
              <div className=''>
                {genTechStacks(["ruby on rails", "golang", "javascript", "reactjs", "postgresql"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Bukukaskita is an app to keep track of your daily expenses. It have various other feature related to financial such as: investment calculator, gold price tracker, ease of use when tracking transaction (using image and voice).
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2020
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/dexpense",
                      "",
                      "https://bukukaskita.netlify.app",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/go-kubeseal-gui-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Go Kubeseal GUI
              </h2>
              <div className=''>
                {genTechStacks(["golang", "kubeseal", "kubectl"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Go Kubeseal GUI - is a GUI helper for managing kubeseal and kubesecret.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2024
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/go-kubeseal-gui",
                      "",
                      "",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/satuakun-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/satuakun-thumb-2.png",
                "/images/projects/satuakun-thumb-3.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Satu Akun
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>live</span>
              </h2>
              <div className=''>
                {genTechStacks(["golang", "nextjs", "html", "chrome extension"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Satuakun is a chrome extension that allows you to share your web cookies. The use case is, if you want to share your account, eg: you want to share your netflix account without having to tell your friends or families your netflix email and password. You can just simply share your cookies then let your friends or families use your cookies through this extension.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2024
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/satu-akun-nextjs",
                      "",
                      "https://satuakun.vercel.app",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/ytkidd-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/ytkidd-thumb-2.png",
                "/images/projects/ytkidd-thumb-3.png",
                "/images/projects/ytkidd-thumb-4.png",
                "/images/projects/ytkidd-thumb-5.png",
                "/images/projects/ytkidd-thumb-6.png",
                "/images/projects/ytkidd-thumb-7.png",
                "/images/projects/ytkidd-thumb-8.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Cookie Kid
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>live</span>
              </h2>
              <div className=''>
                {genTechStacks(["javascript", "nextjs"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Cookie kid is a entertainment platform for kids. It is kind of youtube kids but the content is personally curated, so it should not recommend any video outside of the curation. Cookie kid also have a quiz feature so that your kids need to answer the quiz first before start watching. There are also other features such as: reading book, work sheet which your kids can doodle on top of it, conversation with AI, etc.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2023
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/ytkidd-nextjs",
                      "",
                      "https://cookiekid.vercel.app",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/vdub-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/vdub-thumb-2.png",
                "/images/projects/vdub-thumb-3.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                VDUB
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>live</span>
                {/* <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>dockerfile</span> */}
              </h2>
              <div className=''>
                {genTechStacks(["golang", "javascript", "nextjs"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  VDUB is a tool to automatically dub youtube video which contain English monolog into Indonesia.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2024
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "https://github.com/umarkotak/vdub",
                      "",
                      "",
                      "https://vdubb.vercel.app",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/neng-gemini-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/neng-gemini-thumb-2.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Neng Gemini
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>moved to cookie kid</span>
              </h2>
              <div className=''>
                {genTechStacks(["nextjs"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Neng gemini is a simple web app for conversing with google gemini AI. With voice input and voice output as if you are talking.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2024
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/neng-gemini-nextjs",
                      "",
                      "https://cookiekid.vercel.app/sahabat_ai/chat",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/animapu-v3-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/animapu-v3-thumb-2.png",
                "/images/projects/animapu-v3-thumb-3.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Animapu V3
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>live</span>
              </h2>
              <div className=''>
                {genTechStacks(["golang", "javascript", "nextjs"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Animapu V3 is build using nextjs. This is my first project for learning nextjs.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2023
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/animapu-lite-nextjs",
                      "",
                      "https://animapu.vercel.app",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/animehub-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
                "/images/projects/animehub-thumb-2.png",
                "/images/projects/animehub-thumb-3.png",
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Animehub
                <span className='px-2 py-0.5 rounded-full ml-2 bg-red-200 text-xs'>live</span>
              </h2>
              <div className=''>
                {genTechStacks(["golang", "javascript", "nextjs"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Animehub is a site for watching anime. The anime list provided here is scrapped from external sources.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2023
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/animehub-nextjs",
                      "",
                      "https://animehub-lite.vercel.app",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/animapu-v2-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              {thumbsGen([
              ])}
              <h2 className="text-xl tracking-wide flex items-center mt-2">
                Animapu V2
              </h2>
              <div className=''>
                {genTechStacks(["golang", "javascript", "reactjs"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Web for reading manga. The manga itself is not hosted on animapu but instead scrapped from external sources. This is my first project for learning reactjs.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2021
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/umaranimap",
                      "",
                      "https://animapu.netlify.app",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <Zoom><img
                src="/images/projects/certi-protect-thumb.png"
                alt="project-thumb"
                className="object-contain"
              /></Zoom>
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                university final project
              </div>
            </figure>
            <div className="p-4">
              <h2 className="text-xl tracking-wide">
                Certi Protect
              </h2>
              <div className=''>
                {genTechStacks(["php", "javascript", "mysql"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Certi protect used to sign a certificate image.
                  This can be used to avoid a certificate image to be faked.
                  It uses steganography technique to store 'secret data' inside the image pixels.
                  So if the image is edited, eg: changing the name of the owner, the 'secret data' will still reflect the original owner.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2018
                  </div>

                  <div className='flex flex-row gap-1'>
                    {genProjectLinks(
                      "",
                      "https://github.com/umarkotak/sweet_stego",
                      "",
                      "",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
