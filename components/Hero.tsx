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
import { GradientBg } from "./GradientBg"

const Hero = () => {
  return (
    <section className="relative overflow-x-clip overflow-y-visible md:overflow-x-clip md:overflow-y-visible w-full h-full flex flex-row justify-center items-center">
      <GradientBg />
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-[45fr_35fr] gap-6 md:gap-4 md:px-8 pb-8 h-full w-full  md:w-full overflow-y-visible 2xl:w-3/5 2xl:px-0 2xl:grid-cols-[40fr_35fr]">
        <div className="flex flex-col justify-center items-start gap-6 h-full w-full pl-6 2xl:pl-0">
          <div className="flex flex-col items-start px-6 justify-start gap-y-8 w-full">
            <div className="flex md:justify-start flex-row justify-center  items-center 2xl:justify-start gap-x-4 pt-40 w-full">
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
            <div className="flex flex-col justify-start items-start w-full gap-y-4">
              <h1 className="font-[manrope] font-bold text-4xl md:text-5xl text-center md:text-left tracking-tighter text-[#1c1917]">Grow Your Business With Social Media Management & Content Marketing</h1>
              <p className="text-[#6b6561] font-medium text-center lg:text-left text-base">Packaged digital marketing services at low monthly prices with no contracts. Join 1,000+ businesses using Smarcomms!</p>
            </div>

            <div className="flex flex-col gap-y-2 justify-center md:!items-start items-center md:!justify-start w-full">
              <CTA className="text-white bg-[#ec5f0e] tracking-wider font-light h-10 py-3 text-sm md:w-1/4 md:ml-0">Sign up in 2 Minutes</CTA>
              <div className="flex flex-row justify-center items-center lg:justify-start gap-x-[0.125rem] text-[0.6rem] text-[#8e8986] w-full font-bold">
                <VerificationBadge />
                Zero-Risk, Money-Back Guarantee
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center md:justify-start items-center gap-x-2 w-full px-6 mt-6">
            <FBIcon color="#6b6561" />
            <InstagramIconGrey />
            <GoogleIconGrey />
            <XIconGrey />
            <LinkedInIconGrey />
            <YoutTubeIconGrey />
            <TikTokIconGrey />
            <PinterestIconGrey />
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-start mx-0 w-full md:overflow-y-visible overflow-x-clip 2xl:overflow-x-visible">
          <div className="relative grid min-[0px]:grid-cols-2 md:grid-cols-3 mt-8 gap-4 overflow-y-visible overflow-x-clip min-[0px]:w-full pl-1 pr-6 h-full md:w-[108%] md:translate-y-32 ">
            <div className="min-[0px]:hidden md:flex md:flex-col justify-center items-center md:translate-y-24 md:w-full">
              <SNSCard src="/example-social-media-post-for-pet-adoption.avif" likes="5.6K" uploads="769" />
            </div>
            <div className="flex flex-col gap-y-8 md:translate-y-32 overflow-x-clip overflow-y-visible md:py-32 md:px-0 h-full">
              <SNSCard src="/example-social-media-post-for-speakers.avif" likes="2.5K" uploads="456" />
              <SNSCard src="/example-social-media-post-for-sushi.avif" likes="900" uploads="117" />
            </div>
            <div className="flex flex-col gap-y-8 translate-y-32">
              <SNSCard src="/example-social-media-post-for-tech.avif" likes="1.44K" uploads="249" />
              <SNSCard src="/hero-post-12.avif" likes="436" uploads="82" />

            </div>
            <GradientBg bottom right />
          </div>
          <GradientBg bottom right className="md:col-span-2 md:translate-x-20 min-[0px]:translate-y-48 md:translate-y-10" />
        </div>
      </div>
      {/* <GradientBg bottom right /> */}
    </section>
  )
}

export { Hero }