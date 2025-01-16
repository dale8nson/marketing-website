"use client"
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ReactNode, useId, useState } from "react"

export const ScrollingReviews = ({children}:{children?:ReactNode}) => {

  const [anim, setAnim] = useState<gsap.core.Tween>()

  useGSAP(() => {
    const reviews = gsap.utils.toArray(".reviews")

    setAnim(gsap.to(reviews, {x: `-=102%`, duration: 27 * reviews.length, repeat:-1, ease:"linear"}))

  }, [])

  const onPointerEnter = () => {
    anim?.pause()
  }

  const onPointerLeave = () => {
    anim?.resume()
  }

  return (
    <div className="flex flex-row items-center justify-center overflow-x-hidden mx-8 md:mx-16 md:w-full" onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <div className="flex flex-row items-center gap-4 w-[300%] py-2">
        {Array(3).fill(null).map(_ => {
          return (
            <div key={useId()} className="reviews flex flex-row gap-x-16 items-center">
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}