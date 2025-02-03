"use client"
import { useRef } from "react"
import Link from "next/link"
import { AppMenu } from "./AppMenu"
import { CTA } from "./CTA"
import { Logo } from "./Logo"
import { Menu } from "./Menu"
import { MobileMenu } from "./MobileMenu"

const AppBar = () => {

  const portalRef = useRef<HTMLDivElement | null>(null)

  return (
    <header className="fixed top-0 w-full h-[4rem] bg-white flex flex-col justify-between lg:justify-evenly items-center z-50 px-6 lg:px-24 shadow-[#dfdfde] drop-shadow-lg">
      <div className="flex flex-row items-center justify-between lg:justify-evenly min-[0px]:w-full h-full 2xl:w-3/5">
        <Logo />
        <div className="flex flex-col justify-start items-center w-full h-full bg-white relative ">
          <div className="flex flex-row justify-center items-center w-full h-full bg-white relative">
            <MobileMenu />
            <div className="min-[0px]:hidden md:flex md:flex-row justify-center gap-x-4 items-center w-full">
              <Link className="whitespace-nowrap font-semibold text-sm leading-6 text-foreground hover:text-foreground/80 hover:text-[#514f4e]" href="#">Reviews</Link>
              <Menu className="relative z-20 overflow-x-visible" portalRef={portalRef}>
                <Menu.Button className="hover:text-[#514f4e]">
                  Social Media and Marketing Services
                </Menu.Button>
                <Menu.Item className="grid grid-cols-5 gap-x-8 p-4 w-full 2xl:w-3/6 2xl:mx-auto 2xl:text-[0.85rem]">
                  <Menu.Item className="flex flex-col justify-center items-start gap-y-4 p-4">
                    <div className=" h-4 flex size-10 items-center justify-center rounded-lg bg-orange-500/15 group-hover:bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5 stroke-orange-700 group-hover:stroke-orange-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
                    <Link className="mt-6 flex flex-col font-medium gap-y-2" href="#">
                      <h3>Social Media Management</h3>
                      <p className="text-muted-foreground">Fully managed social content and real organic growth.</p>
                    </Link>
                  </Menu.Item>
                  <Menu.Item className="flex flex-row justify-center items-start p-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/15 group-hover:bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5 stroke-orange-700 group-hover:stroke-orange-700"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"></path></svg></div>
                  </Menu.Item>
                  <Menu.Item className="flex flex-row justify-center items-start p-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/15 group-hover:bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5 stroke-orange-700 group-hover:stroke-orange-700"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg></div>
                  </Menu.Item>
                  <Menu.Item className="flex flex-row justify-center items-start p-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/15 group-hover:bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5 stroke-orange-700 group-hover:stroke-orange-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg></div>
                  </Menu.Item>
                  <Menu.Item className="flex flex-row justify-center items-start p-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-orange-500/15 group-hover:bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-5 stroke-orange-700 group-hover:stroke-orange-700"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"></path></svg></div>
                  </Menu.Item>
                </Menu.Item>
              </Menu>
              <Link className="whitespace-nowrap text-sm leading-6 text-foreground hover:text-foreground/80 font-semibold hover:text-[#514f4e]" href="#">Growth Services</Link>
              <Link className="whitespace-nowrap font-semibold text-sm leading-6 text-foreground hover:text-foreground/80 hover:text-[#514f4e]" href="#">White Label</Link>
            </div>
            <div className="min-[0px]:hidden lg:flex lg:flex-row gap-x-4 justify-center items-center w-1/5">
              <CTA className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:rounded-lg border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground lg:shadow h-8 px-3 text-xs hover:border">Schedule Demo</CTA>
              <CTA className="bg-[#ec5f0e] text-white h-8">Sign Up in 2 Minutes</CTA>
            </div>
          </div>

        </div>
      </div>
      <Menu.Portal className="w-full h-full" ref={portalRef} />
    </header>
  )

}

export { AppBar }