import Link from 'next/link'
import { Eye, Github, Link2 } from 'lucide-react'

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

  return (
    <main className="m-2">
      <div className="container max-w-4xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <img
                src="/images/projects/animapu-v2-thumb.png"
                alt="Shoes"
                className="object-contain"
              />
              <div className="absolute py-0.5 px-2 bg-yellow-200 rounded-full top-4 right-4 text-sm italic font-sans">
                personal project
              </div>
            </figure>
            <div className="p-4">
              <h2 className="text-xl tracking-wide">
                Animapu V2
              </h2>
              <div className=''>
                {genTechStacks(["golang", "javascript", "reactjs"])}
              </div>
              <div className="flex flex-col justify-between min-h-28 mt-2">
                <p className="text-sm tracking-wide">
                  Web for reading manga. The manga itself is not hosted on animapu but instead scrapped from external sources. This is my first project when learning reactjs.
                </p>
                <div className="card-actions justify-between items-center mt-2">
                  <div className='text-sm font-semibold'>
                    2021
                  </div>

                  <div className='flex flex-row gap-1'>
                    <Link href="https://github.com/umarkotak/umaranimap">
                      <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                        <Github size={20} />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                        <Eye size={20} />
                      </div>
                    </Link>
                    <Link href="https://animapu.netlify.app">
                      <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                        <Link2 size={20} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="relative">
              <img
                src="/images/projects/certi-protect-thumb.png"
                alt="Shoes"
                className="object-contain"
              />
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
                    <Link href="https://github.com/umarkotak/sweet_stego">
                      <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                        <Github size={20} />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                        <Eye size={20} />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="border rounded-lg border-yellow-300 bg-yellow-50 hover:bg-yellow-200 p-2">
                        <Link2 size={20} />
                      </div>
                    </Link>
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
