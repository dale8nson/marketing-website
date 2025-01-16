
import Link from "next/link"
import { DownCaret } from "./DownCaret"
import { CTA } from "./CTA"
import { MobileMenu } from "./MobileMenu"

const AppMenu = () => {
  return (
    <div className="flex flex-row justify-end justify-self-center items-center w-full">
        <MobileMenu />
      <div className="min-[0px]:hidden md:flex md:flex-row justify-center gap-x-4 items-center w-3/4">
        <Link className="whitespace-nowrap font-semibold text-sm leading-6 text-foreground hover:text-foreground/80" href="#">Reviews</Link>
        <button className="whitespace-nowrap text-sm leading-6 text-foreground hover:text-foreground/80">
          <div className="flex flex-row justify-between items-center w-full font-semibold">
            Social Media and Marketing Services
            <DownCaret className="[stroke:#ec5f0e]" />
          </div>
        </button>
        <Link className="whitespace-nowrap text-sm leading-6 text-foreground hover:text-foreground/80 font-semibold" href="#">Growth Services</Link>
        <Link className="whitespace-nowrap font-semibold text-sm leading-6 text-foreground hover:text-foreground/80" href="#">White Label</Link>
      </div>
      <div className="min-[0px]:hidden lg:flex lg:flex-row gap-x-4 justify-center items-center w-1/5">
        <CTA className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:rounded-lg border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground lg:shadow h-8 px-3 text-xs hover:border">Schedule Demo</CTA>
        <CTA className="bg-[#ec5f0e] text-white h-8">Sign Up in 2 Minutes</CTA>
      </div>
    </div>
  )
}

export { AppMenu }