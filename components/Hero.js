export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-5xl">
        <p className="uppercase tracking-widest text-cyan-400 mb-4">
          AI Execution Infrastructure
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-8">
          Deterministic <span className="gradient">AI Execution</span><br/>
          Control Plane
        </h1>

        <p className="text-xl text-gray-300 mb-10 leading-8">
          Retries, failover, routing, workflows, observability,
          and execution governance for hosted and self-hosted AI models.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold">
            Start Building
          </button>

          <button className="border border-gray-600 px-8 py-4 rounded-xl">
            View Architecture
          </button>
        </div>
      </div>
    </section>
  )
}