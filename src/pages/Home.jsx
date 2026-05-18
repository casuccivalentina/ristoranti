import RestaurantCard from "../components/RestaurantCard"
import restaurants from "../data/restaurants"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5 pt-16 pb-4 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <section
        id="ristoranti"
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
      >
        <div className="text-center mb-16 md:mb-24 animate-slide-up px-4">
          
          <p className="uppercase tracking-[6px] text-amber-500/80 text-xs md:text-sm font-medium mb-4">
            Verona
          </p>

          <h1 className="text-hero-mobile text-hero-dekstop font-medium mb-6 leading-tight tracking-tight">
            Tre esperienze diverse,<br />
            un’unica <span className="text-gradient">passione</span> per la cucina.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            I nostri ristoranti:
          </p>

        </div>

        <div className="flex flex-col gap-4">

        {restaurants.map((restaurant, index) => (

          <div
            key={restaurant.id}
            className="animate-slide-up"
            style={{
              animationDelay: `${index * 120}ms`,
              animationFillMode: "both",
            }}
          >

            <RestaurantCard
              restaurant={restaurant}
            />

          </div>

        ))}

      </div>
      </section>

    </main>
  )
}