export default function Architecture() {
  return (
    <section id="architecture" className="px-10 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Platform Architecture
      </h2>

      <div className="max-w-5xl mx-auto bg-[#0b1225] border border-gray-800 rounded-3xl p-10">
        <pre className="text-cyan-300 overflow-auto text-sm leading-7">
{`
┌──────────────────────────────┐
│        CONTROL PLANE         │
│------------------------------│
│ API Gateway                  │
│ Workflow Engine              │
│ Retry Graph Engine           │
│ Policy Engine                │
│ Cost Router                  │
│ State Store                  │
│ Observability                │
└────────────┬─────────────────┘
             │
 ┌───────────┼────────────┐
 ▼           ▼            ▼

Hosted   Self-hosted   Node Plane
Models      Models      Data Plane

OpenAI      vLLM        GPU Execution
Claude      Ollama      Token Scheduling
Gemini      TGI         KV Cache
`}
        </pre>
      </div>
    </section>
  )
}