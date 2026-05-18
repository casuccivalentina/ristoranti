import { Link } from "react-router-dom";
import restaurants from "../data/restaurants";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 mt-16 relative overflow-hidden bg-black/95">
      <div className="absolute bottom-[-25%] left-[-10%] w-[35%] h-[50%] bg-amber-600/5 rounded-full blur-[60px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gradient inline-block">Verona Restaurants</h2>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm text-sm">Tre esperienze culinarie uniche nel cuore di Verona.</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[3px] text-amber-500 mb-4">I nostri ristoranti</h3>
            <div className="flex flex-col gap-3">
              {restaurants.map((restaurant) => (
                <a key={restaurant.id} href={restaurant.googleUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit text-sm">
                  {restaurant.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[3px] text-amber-500 mb-4">Contatti</h3>
            <div className="space-y-4 text-gray-400 font-light text-sm">
              <p>Verona, Italia</p>
              <a href="mailto:info@pizzerialagreca.it" className="block hover:text-white transition-colors w-fit">info@pizzerialagreca.it</a>
              <div className="flex flex-col gap-2">
                <a href="tel:+390456319169" className="hover:text-white transition-colors w-fit">Doppio Zero · +39 045 6319169</a>
                <a href="tel:+390456304499" className="hover:text-white transition-colors w-fit">La Greca · +39 045 6304499</a>
                <a href="tel:+390458901188" className="hover:text-white transition-colors w-fit">La Vecchia Lira · +39 045 8901188</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <Link
            to="/privacy-policy"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <p>© 2026 Doppio Zero</p>
          <p>Designed From Casucci Valentina</p>
        </div>
      </div>
    </footer>
  );
}