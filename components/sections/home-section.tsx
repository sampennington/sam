export function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-32">
      <div className="max-w-5xl w-full">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
          Hey! I'm Sam 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mt-12">
          Engineer, Manager, Cave Diver
        </p>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mt-12">
          This page is about me, what i'm proud of, and what i'm working on.
        </p>
        <button className="mt-8 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
          Get in touch
        </button>
      </div>
    </section>
  )
}
