function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          Symon Abok
        </h1>

        <ul className="flex gap-8 text-slate-300">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer">Experience</li>
          <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;