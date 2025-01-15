import { GoogleIcon } from "./GoogleIcon"
import { Star } from "./Star"

export const GoogleRating = ({rating}:{rating: number}) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <GoogleIcon/>
      <div className="flex flex-row gap-[0.25rem] items-center">
        {Array(rating).fill(null).map((_, index) => <Star key={index} />)}
        {Array(5 - rating).fill(null).map((_, index) => <Star key={index} fill="#fdeab2"/>)}
      </div>
    </div>
  )
}