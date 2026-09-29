export default function About() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-zinc-600 text-lg max-w-2xl">
          This is the about page of my website. Here I can explain who I am,
          what I do and what this website is about.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-100 p-6 rounded-xl">
            <h2 className="font-bold text-xl mb-2">Our Mission</h2>
            <p className="text-zinc-600">
              We want to build useful and simple products.
            </p>
          </div>

          <div className="bg-zinc-100 p-6 rounded-xl">
            <h2 className="font-bold text-xl mb-2">Our Vision</h2>
            <p className="text-zinc-600">
              We want to create better experiences for users.
            </p>
          </div>

          <div className="bg-zinc-100 p-6 rounded-xl">
            <h2 className="font-bold text-xl mb-2">Our Team</h2>
            <p className="text-zinc-600">
              We are a small team learning and building together.
            </p>
          </div>
        </div>
      </section>
    );
}