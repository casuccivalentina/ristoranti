import { Link } from "react-router-dom"
import restaurants from "../data/restaurants"

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 px-5 pt-9 text-center md:pt-12">
        <div className="animate-slide-up">
          <p className="mb-4 text-xs font-medium uppercase tracking-[6px] text-amber-500/80 md:text-sm">
            Scaligera food
          </p>

          <h1 className="font-display text-3xl font-medium leading-[0.95] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] md:text-5xl">
            Due esperienze diverse,<br />
            un’unica <span className="text-gradient">passione</span> per la cucina.
          </h1>
        </div>
      </div>

      <section id="ristoranti" className="grid min-h-svh grid-cols-2">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/${restaurant.slug}`}
            className="group relative min-h-svh overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={restaurant.cardPoster ?? restaurant.gallery?.[0]}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            >
              <source src={restaurant.video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/65 transition-colors duration-500 group-hover:bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/70" />

            <div className="relative z-10 flex min-h-svh items-center justify-center px-3 pb-6 pt-40 text-center sm:px-8 sm:pt-44 md:p-12 md:pt-48 lg:p-16 lg:pt-52">
              <div className="flex max-w-xl flex-col items-center">
                <h2 className="leading-none tracking-tight">
                  <span className="mb-2 block text-sm font-light italic text-white/85 sm:text-lg md:mb-3 md:text-2xl">
                    Portami a...
                  </span>
                  <span className="font-display block text-3xl font-semibold text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:text-5xl md:text-6xl lg:text-8xl">
                    {restaurant.description}
                  </span>
                </h2>

                <div className="mt-6 flex w-fit items-center gap-2 border-b border-amber-400/60 pb-1.5 text-[9px] font-medium uppercase tracking-[2px] text-amber-400 transition-all duration-300 group-hover:translate-x-2 group-hover:border-amber-300 group-hover:text-amber-300 sm:text-xs sm:tracking-[3px] md:mt-8">
                  <span>Scopri</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
