import Link from "next/link"
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
    <footer className="bg-[#0c0a09] text-stone-400 leading-6 text-lg grid grid-cols-[7fr_6fr] gap-y-8 gap-x-8 py-16 px-8 w-full h-full">
      <div className="flex flex-row justify-start items-center col-span-2 w-full h-full">
        <p className="tracking-wide text-balance">
        Smarcomms is the pioneer in the social media management as a service industry. Since 2016, we've helped over 10,000 brands crush it on social.
        </p>
      </div>
      <div className="flex flex-row gap-x-6 items-center justify-start w-full h-full col-span-2">
        <FBIcon color="#ec5f0e" />
        <InstagramIconGrey color="#ec5f0e" />
        <GoogleIconGrey color="#ec5f0e" />
        <XIconGrey color="#ec5f0e" />
        <LinkedInIconGrey color="#ec5f0e" />
        <YoutTubeIconGrey color="#ec5f0e" />
        <TikTokIconGrey color="#ec5f0e" />
        <PinterestIconGrey color="#ec5f0e" />
      </div>
      <div className="flex flex-col gap-y-12 items-start justify-start">
        <div className="flex flex-col items-start justify-start text-sm w-full space-y-4">
          <h2 className="font-bold text-[#d6d3d1]">Services</h2>
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
        <div className="flex flex-col items-start justify-start text-sm w-full space-y-4">
          <h2 className="font-bold text-[#d6d3d1]">Clients</h2>
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
      <div className="flex flex-col gap-y-12 items-start justify-start">
        <div className="flex flex-col items-start justify-start text-sm w-full space-y-4">
          <h2 className="font-bold text-[#d6d3d1]">Resources</h2>
          <ul className="list-none space-y-4 w-full">
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">24 Hour Support</Link></li>
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Affiliate Program</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start text-sm w-full space-y-4">
          <h2 className="font-bold text-[#d6d3d1]">Legal</h2>
          <ul className="list-none space-y-4 w-full">
            <li><Link href="#">100% Delight Guarantee</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <hr className="border-[#3b1c0b] border-solid w-full col-span-2" />
      <p className="col-span-2 text-xs">© {new Date().getFullYear()} Smarcomms Services, LLP. All Rights Reserved.</p>
    </footer>
  )
}