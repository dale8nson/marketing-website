"use client"
import { useState } from "react"
import Link from "next/link"
import { Logo } from "./Logo"
import { PictureIcon } from "./PictureIcon"
import { VideoIcon } from "./VideoIcon"
import { MobileIcon } from "./MobileIcon"
import { InstagramIcon } from "./InstagramIcon"
import { MegaphoneIcon } from "./MegaphoneIcon"
import { CloseButton } from "./CloseButton"
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { HamburgerButton } from "./HamburgerButton"

const MobileMenu = () => {

  const [openAnim, setOpenAnim] = useState<gsap.core.Tween>()
  const [unblurAnim, setUnblurAnim] = useState<gsap.core.Tween>()
  const [closeAnim, setCloseAnim] = useState<gsap.core.Tween>()

  useGSAP(() => {
    setOpenAnim(gsap.to("#mobile-menu", { visibility: "visible", paused: true }))
    setUnblurAnim(gsap.fromTo(".logo", { filter: "blur(16px)" }, { filter: "blur(0px)", duration: 0.5 }))
    setCloseAnim(gsap.to("#mobile-menu", { visibility: "hidden", paused: true }))
  }, [])

  return (
    <>
      <HamburgerButton onClick={() => { openAnim?.restart(); unblurAnim?.restart() }} className="lg:hidden" />
      <div id="mobile-menu" className="flex flex-col items-start justify-start pb-0 lg:hidden bg-white gap-y-10 pt-10 fixed top-0 left-0 z-10 h-screen w-screen content-between">
        <div className="px-6 flex flex-col gap-y-4 items-start justify-between w-full h-full">
          <div className="flex flex-row  items-center justify-between w-full">
            <Logo />
            <CloseButton onClick={() => closeAnim?.restart()} />
          </div>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              <div className=" flex flex-row items-center justify-center size-8 bg-orange-500/15 rounded-lg"><PictureIcon /></div>
              Social Media Management
            </div>
          </Link>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              <div className=" flex flex-row items-center justify-center size-8 bg-orange-500/15 rounded-lg"><VideoIcon /></div>
              Short-Form Videos
            </div>
          </Link>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              <div className=" flex flex-row items-center justify-center size-8 bg-orange-500/15 rounded-lg"><MobileIcon /></div>
              Story Posts
            </div>
          </Link>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              <div className=" flex flex-row items-center justify-center size-8 bg-orange-500/15 rounded-lg"><InstagramIcon /></div>
              Instagram Growth Booster
            </div>
          </Link>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              <div className=" flex flex-row items-center justify-center size-8 bg-orange-500/15 rounded-lg"><MegaphoneIcon /></div>
              Facebook Ads Management
            </div>
          </Link>
          <hr className="shadow w-full" />
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              Our Work
            </div>
          </Link>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              Pricing
            </div>
          </Link>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              Reviews
            </div>
          </Link>
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              White Label
            </div>
          </Link>
          <hr className="shadow w-full" />
          <Link className="w-full" href="#">
            <div className="flex flex-row items-center justify-start gap-x-4 w-full hover:bg-[#f5f5f4] p-3 rounded-lg">
              Login
            </div>
          </Link>
        </div>
        <div className="sticky bottom-0 self-justify-end left-0 grid grid-cols-2 grid-rows-1 w-full">
          <Link className="w-full h-full" href="#">
            <div className="flex flex-row items-end justify-center p-3 bg-[#fafaf9] border-r-[#e7e5e4] border-solid border-r-[1.5px] w-full h-full hover:bg-[#ec5f0e] hover:text-white">
              Watch a Demo
            </div>
          </Link>
          <Link className="w-full h-full" href="#">
            <div className="flex flex-row items-end justify-center w-full h-full p-3 bg-[#fafaf9] hover:bg-[#ec5f0e] hover:text-white">
              Schedule a Demo
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export { MobileMenu }