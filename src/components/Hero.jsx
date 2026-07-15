import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section className="bg-slate-950 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Symon Abok
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
            Junior DevOps Engineer
          </h2>

          <p className="text-slate-400 mt-6 leading-8 text-lg">
            Passionate about building scalable cloud infrastructure,
            automating deployments, and implementing CI/CD pipelines
            using AWS, Kubernetes, Docker, Helm, Linux, and Git.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "AWS",
              "Docker",
              "Kubernetes",
              "Helm",
              "ArgoCD",
              "Linux",
              "CI/CD",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg font-semibold">
              View Projects
            </button>

            <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-black transition px-6 py-3 rounded-lg font-semibold">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Symon Abok"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;