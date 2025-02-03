"use client"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

const Logo = () => {

  useGSAP(() => {
    gsap.to(".logo", {filter:"blur(0px)", duration:0.5})
  })


  return (
    <Image className="logo w-32 h-6 blur-lg z-20" src="/logo-light.png" width="600" height="102" alt="smarcomms logo" />
  )
}
export { Logo }