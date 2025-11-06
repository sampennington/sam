import Link from 'next/link'
import Image from 'next/image'

export default function LeadingCYFPost() {
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-32 py-20 max-w-5xl mx-auto text-black ">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors mb-8 group"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-medium">Back to home</span>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
          Volunteering and Teaching at CodeYourFuture
        </h1>
        <p className="text-lg text-gray-500">June 10, 2024</p>
        <p className="text-xl text-black mt-4">
          My time volunteering with CodeYourFuture  helping refugees learn to code, teaching React, Node and JavaScript  and my stepping stone into leadership.
        </p>
      </div>

      <article className="prose prose-lg max-w-none text-black">
        <p>A few years ago, I started volunteering with <strong>CodeYourFuture</strong>, a non-profit that helps refugees and people from disadvantaged backgrounds start careers in tech.</p>
        <p>At first, I just wanted to give back and help a few people learn to code. But I ended up learning just as much myself  how to speak in public, how to have difficult conversations, and how to explain technical concepts clearly.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">How It Started</h2>

        <p>I joined as a volunteer, helping out in weekend coding sessions for a group of around 30 trainees.</p>
        <p>Most were refugees, some had recently arrived in the UK, others were rebuilding their lives after difficult circumstances.</p>
        <p>We taught <strong>JavaScript, React, and Node</strong>, and created a community where people could come together, learn, make friends, and work towards jobs in tech.</p>

        <p>After about six months of figuring out how everything worked, I stepped into a leadership role, running the next full cohort, around 4050 students and another 1020 volunteers.</p>
        <p>It was a big commitment: every weekend and many weeknights for the next eight months, and then supporting people with job applications for months afterwards.</p>

        <div className="my-12">
          <Image
            src="/images/cyf.jpg"
            alt="CodeYourFuture class photo"
            width={1200}
            height={800}
            className="rounded-lg shadow-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">My CodeYourFuture class</p>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">The Challenges</h2>

        <p>Running a volunteer-led course is very different from leading a team at work.</p>
        <p>You don't have direct authority, you're managing through motivation, empathy, and patience. Sometimes you don't even know who's going to turn up, and I'd have to jump in and teach at the last minute.</p>

        <p>Some of the trickier parts:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Organisation</strong>  Coordinating a dozen volunteers, lesson plans, and keeping everyone aligned each week.</li>
          <li><strong>Consistency</strong>  Volunteers had different schedules, and trainees often had unpredictable lives, jobs, childcare, visa appointments.</li>
          <li><strong>Support</strong>  Many trainees were dealing with personal challenges far more complicated than I could imagine; war, relocation, housing, family stress. I was so impressed with their dedication to turn up every weekend. Sometimes the role was more just to be a good friend.</li>
        </ul>

        <p>There were moments it felt impossible to keep everything running smoothly, but the team's energy always brought it back to life.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">Execution</h2>

        <p>My focus was on creating <strong>structure and support</strong> to ensure everything ran smoothly.</p>

        <p>I set up and organised:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Volunteer lecturers</strong> to teach sessions in JavaScript, React, and Node every Saturday. Usually in a volunteer's workplace - often at VEED, my own!</li>
          <li>A <strong>buddy system</strong>, pairing each trainee with a volunteer who could help one-on-one between classes</li>
          <li>Slack channels for trainees to reach out for help and discuss work</li>
        </ul>

        <div className="my-12">
          <Image
            src="/images/cyf-veed.jpeg"
            alt="Hosting CodeYourFuture at VEED"
            width={1200}
            height={800}
            className="rounded-lg shadow-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Hosting CodeYourFuture at VEED</p>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">Impact</h2>

        <p>The course ran for eight months, and many trainees went on to get jobs at companies like Capgemini, British Gas, and Slack to name a few.</p>
        <p>Running this course taught me a huge amount about <strong>leadership, empathy, and communication</strong>.</p>
        <p>When I started, I was terrified of delivering my first class  but little by little, I found myself confidently leading lessons and being the point of contact for so many people.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-12 mb-4 text-black">Reflections</h2>

        <p>This experience ended up being a major stepping stone toward becoming an <strong>Engineering Manager</strong>.</p>
        <p>It taught me a tonne about leadership, resilience, and dealing with the difficult challenges some of my students faced and it gave me the confidence to do the same in the workplace.</p>
        <p>Seeing my students post new roles and promotions on LinkedIn is incredibly rewarding.</p>
        <p>If you ever get the chance to teach or mentor - do it.</p>
        <p>You'll help others, sure, but you'll probably learn a few things yourself too. =B</p>
      </article>
    </section>
  )
}
