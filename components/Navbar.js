export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold">IronInference</h1>
      <div className="space-x-6 text-gray-300">
        <a href="#platform">Platform</a>
        <a href="#architecture">Architecture</a>
        <a href="#features">Features</a>
        <a href="#docs">Docs</a>
      </div>
    </nav>
  )
}