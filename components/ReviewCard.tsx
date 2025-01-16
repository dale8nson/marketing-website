import type { ReactNode } from "react"
import { GoogleRating } from "./GoogleRating"

export const ReviewCard = ({children, rating, customer, date}:{children?: ReactNode, rating: number, customer: string, date: string}) => {
  return (
    <article className="grid grid-cols-1 [grid-auto-rows:3fr_1fr] gap-0 bg-white rounded-xl drop-shadow [aspect-ratio:384/235] w-[24rem]">
      <div className="flex flex-col gap-3 pt-10 pb-3 px-3">
        <GoogleRating rating={rating} />
        <blockquote className="text-[#7d7774] line-clamp-3">{children}</blockquote>
      </div>
      <div className="flex flex-col justify-center items-start border-[#fde0d0] border-t-[1.25px] mx-0 px-3">
        <h3 className="text-black text-muted-foreground font-semibold text-sm">{customer}</h3>
        <p className="text-muted-foreground text-xs">{date}</p>
      </div>
    </article>
  )
}
