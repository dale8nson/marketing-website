import Image from "next/image"
import { GoogleIcon } from "./GoogleIcon"
import { Star } from "./Star"
import { CTA } from "./CTA"
import { VerificationBadge } from "./VerificationBadge"
import { FBIcon } from "./FBIcon"
import { InstagramIconGrey } from "./InstagramIconGrey"
import { GoogleIconGrey } from "./GoogleIconGrey"
import { XIconGrey } from "./XIconGrey"
import { LinkedInIconGrey } from "./LinkedInIconGrey"
import { YoutTubeIconGrey } from "./YoutTubeIconGrey"
import { TikTokIconGrey } from "./TikTokIconGrey"
import { PinterestIconGrey } from "./PinterestIconGrey"
import { SNSCard } from "./SNSCard"

const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 lg:px-8 pb-8 h-full w-full lg:translate-y-32">
        <div className="flex flex-col justify-center items-start gap-6">
          <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96 w-full">
            <div className="relative left-[calc(50%-8rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[17deg] bg-gradient-to-tr from-amber-200 via-orange-300 to-fuchsia-400 opacity-25 sm:left-[calc(50%-25rem)] sm:w-[60.1875rem]">
            </div>
          </div>
          <div className="flex lg:justify-start flex-row justify-center  items-center gap-x-4 pt-40 w-full">
            <div className="flex flex-row relative items-center bg-transparent [&_img]:-ml-[0.25rem]">
              <Image className="size-7 rounded-full shadow-sm ring-4 ring-white" src="/teeha-harrell.png" width={48} height={48} alt="A verified Google Review profile photo 1" />
              <Image className="size-7 rounded-full shadow-sm ring-4 ring-white" src="/romeo-zuniga.png" width={48} height={48} alt="A verified Google Review profile photo 2" />
              <Image className="size-7 rounded-full shadow-sm ring-4 ring-white" src="/terri.png" width={48} height={48} alt="A verified Google Review profile photo 3" />
              <Image className="size-7 rounded-full shadow-sm ring-4 ring-white" src="/gigi.png" width={48} height={48} alt="A verified Google Review profile photo 4" />
              <div className="flex flex-row justify-center items-center rounded-full size-7 bg-white text-black text-center text-xs ring-4 ring-white -ml-1">+176</div>
            </div>
            <div className="flex flex-row gap-2 justify-start items-center ">
              <GoogleIcon />
              <div className="flex flex-row gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
          <h1 className="font-[manrope] font-bold text-4xl sm:text-5xl text-center lg:text-left text-[#1c1917]">Grow Your Business With Social Media Management & Content Marketing</h1>
          <p className="text-[#6b6561] font-medium text-center lg:text-left text-base">Packaged digital marketing services at low monthly prices with no contracts. Join 1,000+ businesses using Smarcomms!</p>
          <div className="flex flex-col gap-y-2 justify-center lg:items-start items-center w-full">
            <CTA className="text-white bg-[#ec5f0e] tracking-wider font-light h-10 py-3 text-sm lg:w-1/4">Sign up in 2 Minutes</CTA>
            <div className="flex flex-row justify-center items-center lg:justify-start gap-x-[0.125rem] text-[0.6rem] text-[#8e8986] w-full font-bold">
              <VerificationBadge />
              Zero-Risk, Money-Back Guarantee
            </div>
          </div>
          <div className="flex flex-row justify-center lg:justify-start items-center gap-x-2 w-full [&_svg]:stroke-[#8e8986] mt-6">
            <FBIcon />
            <InstagramIconGrey />
            <GoogleIconGrey />
            <XIconGrey />
            <LinkedInIconGrey />
            <YoutTubeIconGrey />
            <TikTokIconGrey />
            <PinterestIconGrey />
          </div>
        </div>
        <div className="relative flex flex-col justify-start items-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-8 gap-8 overflow-visible w-fit pl-1 pr-4 h-fit">
            <div className="hidden lg:flex flex-col justify-center items-center md:translate-y-32">
              <SNSCard src="/example-social-media-post-for-pet-adoption.avif" likes="5.6K" uploads="769" />
            </div>
            <div className="flex flex-col gap-y-8 lg:translate-y-32">
              <SNSCard src="/example-social-media-post-for-speakers.avif" likes="2.5K" uploads="456" />
              <SNSCard src="/example-social-media-post-for-sushi.avif" likes="900" uploads="117" />
            </div>
            <div className="flex flex-col gap-y-8 translate-y-32  lg:translate-y-[0px]">
              <SNSCard src="/example-social-media-post-for-tech.avif" likes="1.44K" uploads="249" />
              <SNSCard src="/hero-post-12.avif" likes="436" uploads="82" />
            </div>
          </div>
          <div aria-hidden="true" className="absolute inset-x-0 bottom-[-40] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96 w-full">
            <div className="relative left-[calc(50%-8rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[17deg] bg-gradient-to-tr from-amber-200 via-orange-300 to-fuchsia-400 opacity-25 sm:left-[calc(50%-25rem)] sm:w-[60.1875rem]">
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { Hero }