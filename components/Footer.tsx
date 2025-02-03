import Link from "next/link"
import Image from "next/image"
import { FBIcon } from "./FBIcon"
import { GoogleIconGrey } from "./GoogleIconGrey"
import { InstagramIconGrey } from "./InstagramIconGrey"
import { LinkedInIconGrey } from "./LinkedInIconGrey"
import { PinterestIconGrey } from "./PinterestIconGrey"
import { TikTokIconGrey } from "./TikTokIconGrey"
import { XIconGrey } from "./XIconGrey"
import { YoutTubeIconGrey } from "./YoutTubeIconGrey"

export const Footer = () => {
  return (
    <footer className="bg-[#0c0a09] text-stone-400 leading-6 text-lg min-[0px]:flex min-[0px]:flex-col min-[0px]:items-center min-[0px]:justify-start  md:grid md:grid-cols-6 md:grid-rows-1 md:gap-y-4 gap-y-8 gap-x-8 pt-16 pb-8 px-2 md:px-4 w-full h-full">
      <div className="grid md:col-span-6 grid-cols-2 md:grid-cols-6 min-[0px]:gap-y-8 gap-x-4 px-4 2xl:w-3/4 2xl:mx-auto">
        <div className="min-[0px]:col-span-2 min-[0px]:w-full min-[0px]:flex flex-col items-start md:gap-y-6 gap-y-8 w-full md:w-9/12 md:mx-auto">
          <Image src="/logo-dark.webp" width={256} height={44} alt="smarcomms logo" className="aspect-[256/44] w-[120px] h-[21px]" />
          <div className="flex flex-col justify-start items-center md:items-start w-full">
            <p className="tracking-wide text-balance">
              Smarcomms is the pioneer in the social media management as a service industry. Since 2016, we've helped over 10,000 brands crush it on social.
            </p>
          </div>
          <div className="flex flex-row gap-x-6 items-center md:items-start justify-start w-full">
            <FBIcon color="#ec5f0e" />
            <InstagramIconGrey color="#ec5f0e" />
            <GoogleIconGrey color="#ec5f0e" />
            <XIconGrey color="#ec5f0e" />
            <LinkedInIconGrey color="#ec5f0e" />
            <YoutTubeIconGrey color="#ec5f0e" />
            <TikTokIconGrey color="#ec5f0e" />
            <PinterestIconGrey color="#ec5f0e" />
          </div>
        </div>
        <div className="grid min-[0px]:grid-cols-1 min-[0px]:col-span-1 md:col-span-2 flex-col min-[0px]:gap-y-12 space-y-8 pb-8 items-start justify-start md:grid md:grid-cols-2 md:gap-x-8">
          <div className="flex flex-col items-start justify-start text-sm w-full min-[0px]:space-y-4">
            <h2 className="font-bold text-[#d6d3d1] md:text-lg">Services</h2>
            <ul className="list-none space-y-4 w-full">
              <li><Link href="#">Social Media Management</Link></li>
              <li><Link href="#">Short-Form Videos</Link></li>
              <li><Link href="#">Story Posts</Link></li>
              <li><Link href="#">Instagram Growth Booster</Link></li>
              <li><Link href="#">Twitter Growth Booster</Link></li>
              <li><Link href="#">LinkedIn Growth Booster</Link></li>
              <li><Link href="#">Facebook Ads Management</Link></li>
              <li><Link href="#">Blog Writing Services</Link></li>
              <li><Link href="#">White Label</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start text-sm w-full space-y-4 md:h-full md:!mt-0 ">
            <h2 className="font-bold text-[#d6d3d1] md:text-lg">Clients</h2>
            <ul className="list-none space-y-4 w-full">
              <li><Link href="#">Reviews</Link></li>
              <li><Link href="#">Example Social Media Posts</Link></li>
              <li><Link href="#">Example Blog Posts</Link></li>
              <li><Link href="#">How it Works</Link></li>
              <li><Link href="#">Client Portal</Link></li>
              <li><Link href="#">Social Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <div className="min-[0px]:col-span-1 flex flex-col gap-y-12 items-start justify-start md:grid md:grid-cols-2 md:col-span-2">
          <div className="flex flex-col items-start justify-start text-sm w-full space-y-4">
            <h2 className="font-bold text-[#d6d3d1] md:text-lg">Resources</h2>
            <ul className="list-none space-y-4 w-full">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">24 Hour Support</Link></li>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Affiliate Program</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start text-sm w-full space-y-4">
            <h2 className="font-bold text-[#d6d3d1] md:text-lg">Legal</h2>
            <ul className="list-none space-y-4 w-full">
              <li><Link href="#">100% Delight Guarantee</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 md:col-span-6 flex flex-col justify-start items-start gap-y-8">
          <hr className="border-[#3b1c0b] border-solid w-full col-span-2" />
          <p className="col-span-2 text-xs">© {new Date().getFullYear()} Smarcomms Services, LLP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}