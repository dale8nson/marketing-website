"use client"
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ReactNode, useId } from "react"

export const ScrollingReviews = ({children}:{children?:ReactNode}) => {
  useGSAP(() => {
    const reviews = gsap.utils.toArray(".reviews")
    gsap.to(reviews, {x: `-=102%`, duration: 25 * reviews.length, repeat:-1, ease:"linear"})

  }, [])
  return (
    <div className="flex flex-row items-center justify-center overflow-x-hidden mx-8 md:mx-16 md:w-full">
      <div className="flex flex-row items-center gap-4 w-[300%]">
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