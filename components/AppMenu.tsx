"use client"
import { useRef } from "react"
import Link from "next/link"
import { DownCaret } from "./DownCaret"
import { CTA } from "./CTA"
import { MobileMenu } from "./MobileMenu"
import { Menu } from "./Menu"


const AppMenu = () => {
  const portalRef = useRef<HTMLDivElement | null>(null)


  return (
    <div className="flex flex-col justify-start items-center w-full h-full bg-white relative ">
      <div className="flex flex-row justify-center items-center w-full h-full bg-white relative ">
        <MobileMenu />
        <div className="min-[0px]:hidden md:flex md:flex-row justify-center gap-x-4 items-center w-full">
          <Link className="whitespace-nowrap font-semibold text-sm leading-6 text-foreground hover:text-foreground/80" href="#">Reviews</Link>
          <Menu className="relative z-20 overflow-x-visible" portalRef={portalRef}>
            <Menu.Button>
              Social Media and Marketing Services
            </Menu.Button>
            <Menu.Item className="grid grid-cols-5 gap-x-4 p-4 shadow-[#feeadc] drop-shadow-lg w-full">
              <Menu.Item className="flex flex-col justify-center items-center p-4">
                
              </Menu.Item>
              <Menu.Item className="flex flex-row justify-center items-center p-4">is</Menu.Item>
              <Menu.Item className="flex flex-row justify-center items-center p-4">a</Menu.Item>
              <Menu.Item className="flex flex-row justify-center items-center p-4">test.</Menu.Item>
            </Menu.Item>
          </Menu>
          <Link className="whitespace-nowrap text-sm leading-6 text-foreground hover:text-foreground/80 font-semibold" href="#">Growth Services</Link>
          <Link className="whitespace-nowrap font-semibold text-sm leading-6 text-foreground hover:text-foreground/80" href="#">White Label</Link>
        </div>
        <div className="min-[0px]:hidden lg:flex lg:flex-row gap-x-4 justify-center items-center w-1/5">
          <CTA className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:rounded-lg border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground lg:shadow h-8 px-3 text-xs hover:border">Schedule Demo</CTA>
          <CTA className="bg-[#ec5f0e] text-white h-8">Sign Up in 2 Minutes</CTA>
        </div>
      </div>
      <Menu.Portal className="w-screen" ref={portalRef} />
    </div>
  )
}

export { AppMenu }