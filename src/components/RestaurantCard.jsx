import { Link } from "react-router-dom"

export default function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/${restaurant.slug}`}
      className="relative h-[165px] rounded-[24px] overflow-hidden block"
    >

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source
          src={restaurant.video}
          type="video/mp4"
        />

      </video>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 h-full flex items-end p-4">

        <div>

          <p className="uppercase tracking-[3px] text-gray-300 text-[9px] mb-1">
            {restaurant.description}
          </p>

          <h2 className="text-xl font-semibold leading-none">
            {restaurant.name}
          </h2>

        </div>

      </div>

    </Link>
  )
}