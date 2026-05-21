import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import restaurants from "../data/restaurants";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function RestaurantPage() {
  const { slug } = useParams();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const restaurant = restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-black/95 text-white flex items-center justify-center">
        <h1>Ristorante non trovato</h1>
      </div>
    );
  }

  return (
    <main className="bg-black/95 text-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-end animate-fade-in rounded-b-2xl overflow-hidden mx-2 md:mx-4 mt-2">
        <video
          key={restaurant.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={restaurant.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <Link to="/" className="glass-panel absolute top-4 left-4 z-20 px-4 py-2 rounded-full text-xs font-medium hover:bg-white/10 transition-colors">
          ← Home
        </Link>
        <div className="relative z-10 p-4 md:p-6 w-full animate-slide-up">
          <p className="uppercase tracking-[3px] text-amber-500 font-medium text-xs mb-2">
            Verona
          </p>
          <h1 className="text-hero-mobile text-hero-desktop font-semibold leading-tight tracking-tight mb-2">
            {restaurant.name}
          </h1>
          <p className="text-sm md:text-lg text-gray-300 font-light leading-relaxed max-w-md">
            {restaurant.description}
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="px-4 md:px-6 py-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <p className="uppercase tracking-[3px] text-amber-600/80 font-medium text-xs mb-2">Contatti</p>
            <a href={`tel:${restaurant.phone}`} className="text-xl md:text-2xl font-medium leading-tight hover:text-amber-400 transition-colors">
              {restaurant.phone}
            </a>
          </div>
          <div>
            <p className="uppercase tracking-[3px] text-amber-600/80 font-medium text-xs mb-2">Orari</p>
            <p className="text-sm whitespace-pre-line leading-relaxed font-light text-gray-300">{restaurant.hours}</p>
          </div>
          {(restaurant.instagram || restaurant.facebook || restaurant.tiktok) && (
            <div className="flex items-end justify-right gap-4">
              {restaurant.instagram && <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-lg"><FaInstagram /></a>}
              {restaurant.facebook && <a href={restaurant.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-lg"><FaFacebookF /></a>}
              {restaurant.tiktok && <a href={restaurant.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-lg"><FaTiktok /></a>}
            </div>
          )}
          <div className="flex flex-col gap-4">
            {restaurant.whatsapp ? (
              <div className="bg-black/20 p-4 rounded-2xl border border-white/5">

              <label className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed cursor-pointer mb-5">

                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={() => setAccepted(!accepted)}
                  className="mt-1 accent-green-500"
                />

                <span>
                  Accetto di essere ricontattato tramite WhatsApp
                  per promozioni, eventi e comunicazioni commerciali.
                </span>

              </label>

              <a
                href={
                  accepted
                    ? `https://wa.me/${restaurant.whatsapp}?text=Ciao,%20vorrei%20prenotare%20un%20tavolo%20da%20${restaurant.name}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {

                  if (!accepted) {
                    e.preventDefault()
                    alert("Devi accettare il consenso privacy.")
                  }

                }}
                className={`block w-full text-center py-4 rounded-full font-semibold text-base transition-all duration-300 ${
                  accepted
                    ? "bg-green-500 text-white hover:bg-green-400"
                    : "bg-green-500/40 text-white/70"
                }`}
              >
                Prenota su WhatsApp
              </a>

            </div>
            ) : (
              <a href={`tel:${restaurant.phone}`} className="bg-white text-black text-center py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105">
                Chiama ora
              </a>
            )}
            <a
              href={restaurant.menuPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-full text-xl border border-amber-500 text-white transition-all duration-300 hover:bg-white hover:text-black font-medium"
            >
              Guarda il menu
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-4 md:px-6 py-8 max-w-4xl mx-auto">
        <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
          <p className="uppercase tracking-[3px] text-amber-500 font-medium text-xs mb-2">Location</p>
          <h3 className="text-lg font-medium mb-2">{restaurant.address}</h3>
          <a href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black py-2 px-6 rounded-full font-medium text-sm transition-transform duration-300 hover:scale-105">
            Apri Google Maps
          </a>
        </div>
      </section>

      {/* STORY VIDEO */}

      {restaurant.storyVideo && (

        <section className="py-6">

          <div className="relative h-[70vh] overflow-hidden">

            {/* VIDEO */}

          <video
            key={restaurant.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >

            <source
              src={restaurant.storyVideo}
              type="video/mp4"
            />

          </video>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-black/45" />

          {/* CONTENT */}

          <div className="relative z-10 h-full flex items-end px-6 pb-10">

            <div className="max-w-md">

              <p className="uppercase tracking-[3px] text-amber-400 text-xs mb-4">
                Experience
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
                {restaurant.storyText}
              </h2>

            </div>

          </div>

        </div>

      </section>

    )}

     {/* Specialità */}
      <section className="px-4 md:px-6 py-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="uppercase tracking-[3px] text-amber-500 font-medium text-xs mb-2">Signature</p>
          <h2 className="text-title-mobile text-title-desktop font-semibold">Specialità</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-start">
          {restaurant.menu.map((item, index) => (
            <div key={index} className="bg-black/20 border border-white/5 px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 hover:bg-black/30">
              <span className="text-amber-600/60 font-medium text-xs">0{index + 1}</span>
              <span className="text-sm font-medium text-white/90">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {restaurant.gallery && (
        <section className="px-4 md:px-6 py-8 max-w-4xl mx-auto">
          <p className="uppercase tracking-[3px] text-amber-500 font-medium text-xs mb-4">Galleria</p>
          <Swiper modules={[Pagination]} spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }} className="w-full">
            {restaurant.gallery.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`${restaurant.name} ${index + 1}`} className="w-full h-100 md:h-80 object-cover rounded-xl" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Other Restaurants */}
      <section className="py-12 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <p className="uppercase tracking-[3px] text-amber-500 font-medium text-xs mb-2">Discover</p>
          <h2 className="text-title-mobile text-title-desktop font-semibold">Esplora anche</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurants.filter((r) => r.slug !== slug).map((r) => (
            <Link key={r.id} to={`/${r.slug}`} className="group relative h-40 md:h-48 rounded-xl overflow-hidden block">
              <video
                key={r.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={r.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative z-10 h-full flex items-end p-4">
                <div>
                  <p className="uppercase tracking-[3px] text-amber-400 font-medium text-xs mb-1">{r.description}</p>
                  <h3 className="text-lg md:text-xl font-semibold">{r.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}