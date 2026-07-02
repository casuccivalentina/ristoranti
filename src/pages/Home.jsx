import RestaurantCard from "../components/RestaurantCard"
import restaurants from "../data/restaurants"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5 pt-1 pb-4 overflow-x-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-0 w-[40%] h-[40%] bg-amber-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="absolute bottom-[-10%] right-0 w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none" />

      <section
        id="ristoranti"
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
      >
        <div className="text-center mb-16 md:mb-24 animate-slide-up px-4">
          
          <p className="uppercase tracking-[6px] text-amber-500/80 text-xs md:text-sm font-medium mb-4">
            Scaligera food
          </p>

          <h1 className="text-hero-mobile text-hero-desktop font-medium mb-6 leading-tight tracking-tight">
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
