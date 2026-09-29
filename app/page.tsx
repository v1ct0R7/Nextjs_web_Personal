import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Welcome to my website</h1>

          <p className="text-zinc-300 text-lg max-w-2xl mb-8">
            This is my first website built with Next.js and Tailwind CSS. I am
            learning how pages, components and layouts work.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">About Me</h2>

          <p className="text-zinc-600 text-lg max-w-3xl">
            I am learning web development and currently exploring JavaScript,
            TypeScript, React and Next.js. This page is just a small project to
            understand how Next.js works.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-700">
            What I am learning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-zinc-500">
              <h3 className="text-xl font-bold mb-3">Next.js</h3>

              <p className="text-zinc-900">
                Learning pages, layouts, routing and components.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-500">
              <h3 className="text-xl font-bold mb-3">TypeScript</h3>

              <p className="text-zinc-900">
                Learning how to write safer and more structured code.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-500">
              <h3 className="text-xl font-bold mb-3">Tailwind CSS</h3>

              <p className="text-zinc-900">
                Learning how to style components directly with classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>

          <p className="mb-8 text-blue-100">
            I am currently learning and building new projects.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}
