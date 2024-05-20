import Link from 'next/link'

export default function Experience() {
  return (
    <main className="m-2">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-xl">Job Submission Log:</span>

            <ul className="text-sm">
              <li>May 2024: Gitlab - https://about.gitlab.com/jobs/all-jobs</li>
              <li>May 2024: Valimail - https://www.valimail.com/careers</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
