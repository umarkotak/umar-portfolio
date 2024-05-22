import Link from 'next/link'

export default function Experience() {
  return (
    <main className="m-2">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-xl">Docs:</span>

            <ul className="text-sm">
              <li>
                - CV May 2024:
                <Link
                  className="text-blue-600"
                  href="https://docs.google.com/document/d/1zxk0OJnqzLl7G22fqfeN4xyxt0rvNuKzzaRQjTm1oyk"
                >
                  https://docs.google.com/document/d/1zxk0OJnqzLl7G22fqfeN4xyxt0rvNuKzzaRQjTm1oyk
                </Link>
              </li>
              <li>
                - CV May 2024 pdf:
                <Link
                  className="text-blue-600"
                  href="/docs_data/cv-2024_may.pdf"
                >
                  cv pdf
                </Link>
              </li>
              <li>
                - Cover letter May 2024 pdf:
                <Link
                  className="text-blue-600"
                  href="/docs_data/cover_letter-2024_may.pdf"
                >
                  cover letter pdf
                </Link>
              </li>
            </ul>
          </div>

          <div className="divider"></div>

          <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-xl font-medium">
              Ruby experience
            </div>
            <div className="collapse-content">
              <p>TBA</p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-xl font-medium">
              Cover letter
            </div>
            <div className="collapse-content">
              <p className="tracking-wide text-sm">
                Cover Letter for [Job Title] at [Company Name]
                <br/><br/>
                Dear [Hiring Manager Name],
                <br/><br/>
                I am writing to express my strong interest in the [Job Title] position at [Company Name], as advertised on [Platform where you saw the job listing]. I have been following [Company Name]'s work for some time now, and I am particularly impressed by [Mention something specific about the company that resonates with you, e.g., their commitment to innovation, their focus on [specific industry], etc.].
                <br/><br/>
                I am a passionate technologist with a strong focus on building products that solve real-world problems. My experience includes developing a wide range of applications, such as a daily expense tracking app to help users manage their finances and a YouTube-like platform called YTKidd, specifically curated for children's safety. These projects showcase my ability to combine technical skills with an understanding of user needs to deliver impactful products.
                <br/><br/>
                Furthermore, I am deeply intrigued by the potential of Artificial Intelligence and its ability to revolutionize various industries. I have actively explored AI technologies like text-to-speech, speech-to-text, and computer vision, and I believe these innovations can be leveraged to enhance the products and services we create.
                <br/><br/>
                While my professional experience has been primarily focused on backend development, I possess a strong understanding of frontend technologies, enabling me to deliver full-stack solutions. I have also successfully developed and launched multiple products, giving me a deep understanding of the entire product lifecycle, from ideation to production and user adoption.
                <br/><br/>
                I am confident that my skills and experience align perfectly with the requirements of this position. I am eager to contribute to [Company Name]'s mission of [Mention the company's mission or goals, e.g., creating innovative solutions for [specific industry], etc.] and I am convinced that I can make a significant impact on your team.
                <br/><br/>
                Thank you for your time and consideration. I look forward to discussing my qualifications further.
                <br/><br/>
                Sincerely,
                <br/><br/>
                M. Umar Ramadhana
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
