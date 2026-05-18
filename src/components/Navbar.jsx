export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">

      <nav className="glass-panel rounded-full px-8 py-4 max-w-md mx-auto transition-all duration-500 hover:border-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]">

        <div className="flex items-center justify-center gap-10 text-xs md:text-sm uppercase tracking-[4px] font-medium text-gray-400">

          <a
            href="/#ristoranti"
            className="hover:text-white hover:text-gradient transition-all duration-300"
          >
            Ristoranti
          </a>

          <a
            href="#footer"
            className="hover:text-white hover:text-gradient transition-all duration-300"
          >
            Contatti
          </a>

        </div>

      </nav>

    </header>
  )
}