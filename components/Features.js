const items = [
  {
    title: "AI Gateway",
    desc: "OpenAI-compatible execution gateway with intelligent routing."
  },
  {
    title: "Retry Graph Engine",
    desc: "Deterministic retries and provider failover."
  },
  {
    title: "Workflow Engine",
    desc: "Composable AI execution workflows."
  },
  {
    title: "Policy Engine",
    desc: "Latency-aware and cost-aware routing."
  },
  {
    title: "Observability",
    desc: "Execution-level traces and runtime telemetry."
  },
  {
    title: "Node Plane",
    desc: "Optional GPU-aware runtime acceleration layer."
  }
]

export default function Features() {
  return (
    <section id="features" className="px-10 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        Core Platform Capabilities
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-[#0b1225] border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-7">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}