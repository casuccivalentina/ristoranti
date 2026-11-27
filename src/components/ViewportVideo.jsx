import { useEffect, useRef, useState } from "react"

export default function ViewportVideo({
  src,
  eager = false,
  className,
  poster,
  ...props
}) {
  const videoRef = useRef(null)
  const [isNearViewport, setIsNearViewport] = useState(eager)
  const [hasLoaded, setHasLoaded] = useState(eager)

  useEffect(() => {
    if (eager) return undefined

    const video = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting)
        if (entry.isIntersecting) setHasLoaded(true)
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [eager])

  useEffect(() => {
    const video = videoRef.current

    if (isNearViewport && hasLoaded) {
      video.load()
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [hasLoaded, isNearViewport])

  return (
    <video
      ref={videoRef}
      poster={poster}
      preload={eager ? "metadata" : "none"}
      className={className}
      {...props}
    >
      {hasLoaded && <source src={src} type="video/mp4" />}
    </video>
  )
}
