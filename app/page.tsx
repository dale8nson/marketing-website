import { CTA } from "@/components/CTA";
import { GradientBg } from "@/components/GradientBg";
import { Hero } from "@/components/Hero";
import { ReviewCard } from "@/components/ReviewCard";
import { ScrollingReviews } from "@/components/ScrollingReviews";
import { SNSCard } from "@/components/SNSCard";
import { Tick } from "@/components/Tick";
import { VerificationBadge } from "@/components/VerificationBadge";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-center md:items-start md:w-11/12 md:mx-auto pb-10">
      <Hero />
      <div className="grid max-w-2xl grid-cols-1 lg:grid-cols-[2fr_5fr] gap-x-8 gap-y-16 mb-16 sm:gap-y-20 lg:mx-0 lg:max-w-none mt-56 md:w-full mx-auto">
        <div className="flex flex-col md:justify-start md:items-start items-center gap-y-4 w-10/12 md:w-11/12 mx-auto ">
          <p className="text-primary text-center leading-7 tracking-widest font-bold text-xs">OVER 175+ 5-STAR REVIEWS</p>
          <h2 className="text-3xl font-semibold text-center md:text-left md:text-4xl tracking-tight">We've served more than 10,000 businesses since 2016</h2>
          <p className="text-muted-foreground tracking-wide">More businesses trust us than anyone else. Here's what our clients have to say about us.</p>
          <Link className="inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:rounded-lg border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground lg:shadow h-8 px-3 text-xs rounded-lg hover:border" href="#">Read verified reviews</Link>
        </div>
        <ScrollingReviews>
          <ReviewCard rating={4} customer="Lisa" date={"Oct 8, 2024"}>
            Smarcomms has helped create content for us so that we can focus on other initiatives like growing the business. We are pleased with...
          </ReviewCard>
          <ReviewCard rating={5} customer="Cale" date="Oct 20, 2024">
            I don't have to spend my time worrying about regular content updates across all my socials as Smarcomm does this all for me with content that aligns with my business allowing me to focus on running my business
          </ReviewCard>
          <ReviewCard rating={5} customer="Avery" date="Oct 16, 2024">
            Great art and great communication!
          </ReviewCard>
          <ReviewCard rating={5} customer="Daniel" date="Oct 14, 2024">
            Just getting started with Smarcomms but they've been top notch. Worth every penny so far. Glad I found them.
          </ReviewCard>
          <ReviewCard rating={5} customer="Robert" date="Dec 24, 2024">
            Based on my initial experience using Smarcomms the service has been great. I will be looking to increase the services they currently provide if it continues.
          </ReviewCard>
          <ReviewCard rating={5} customer="The" date="Nov 30, 2024">
            They provide great branded content for our social media profiles.  We have yet to be unhappy with anything they have created.  We are pleased with their service and recommend them.
          </ReviewCard>
          <ReviewCard rating={5} customer="Cait" date="Nov 26, 2024">
            I sent in a TON of information and Smarcomms was able to quickly find my brand style and voice with minimal changes. It is a such a relief to have a base of social media posts going out each month so that now I can add to it when inspired but not feel the pressure to be constantly producing.
          </ReviewCard>
          <ReviewCard rating={5} customer="Scott" date="Nov 19, 2024">
            The team at Smarcomms produced a social media post for our digital marketing firm and they covered a great topic (our writing services), designed nice, clean and professional looking graphic and had perfect written content in the caption and on the graphic.
          </ReviewCard>
          <ReviewCard rating={5} customer="Sparks" date="Nov 19, 2024">
            Incredibly happy with the social media package we selected, worth every penny. We also asked for some works which were out of scope, Smarcomms provided a very impressive, finished product in a very short amount of time. Highly recommend.
          </ReviewCard>
          <ReviewCard rating={5} customer="Floyd" date="Oct 29, 2024">
            Nina goes above and beyond the requirements. She has truly been a pleasure to work with and I look forward to our continued collaboration.
          </ReviewCard>
        </ScrollingReviews>
      </div>
      <div className="bg-[#1c1917] text-[#f5f5f4] grid grid-cols-4 w-full py-24 px-8 gap-y-14 gap-x-16">
        <h2 className="text-3xl text-center font-bold col-span-4">Our clients are <span className="text-[#f36416]">featured in</span></h2>
        <div className="col-span-2"><Image src="/forbes.svg" alt="forbes" width={175} height={53} /></div>
        <div className="col-span-2"><Image src="/huffpost.svg" alt="huffpost" width={175} height={53} /></div>
        <div className="col-span-2"><Image src="/feedspot.svg" alt="feedspot" width={175} height={53} /></div>
        <div className="col-span-2"><Image src="/evolvepreneur.svg" alt="evolvepreneur" width={175} height={53} /></div>
        <div className="col-span-2"><Image src="/legal500.svg" alt="the legal 500" width={175} height={53} /></div>
        <div className="col-span-2"><Image src="/franchising.svg" alt="franchising.com" width={175} height={53} /></div>
      </div>
      <div className="flex flex-col items-center justify-center w-10/12 relative py-16 m-4">
        <GradientBg />
        <div className="flex flex-col items-center justify-center bg-white rounded-3xl w-full shadow py-14 px-4 gap-8">
          <div className="aspect-square p-0 rounded-3xl w-full h-full mb-8">
            <Image className="rounded-3xl" src="/henry-ceo-of-smarcomms.avif" alt="henry the ceo" width={796} height={796} />
          </div>
          <h2 className="font-bold text-3xl tracking-tighter">
            Sign-up risk free in 2 minutes
          </h2>
          <p className="text-muted-foreground">Join the over 10,000 brands we've helped grow on social media and start saving 10 hours a week today.</p>
          <ul className="flex flex-col gap-y-4 text-muted-foreground self-align-start self-justify-start pl-0 -ml-14 [&_li]:flex [&_li]:flex-row [&_li]:items-center [&_li]:justify-start [&_li]:pl-0 [&_li]:gap-x-3">
            <li>
              <Tick />
              Handcrafted by humans
            </li>
            <li>
              <Tick />
              +10,000 Brands served
            </li>
            <li>
              <Tick />
              SEO Optimized
            </li>
            <li>
              <Tick />
              Keyword Research
            </li>
            <li>
              <Tick />
              24 hour customer support
            </li>
            <li>
              <Tick />
              Zero-Risk, Money-Back Guarantee
            </li>
          </ul>
          <div className="flex flex-col gap-y-2 justify-center lg:items-start items-center w-full">
            <CTA className="text-white bg-[#ec5f0e] tracking-wider font-light h-10 py-3 text-sm lg:w-1/4">Sign up in 2 Minutes</CTA>
            <div className="flex flex-row justify-center items-center lg:justify-start gap-x-[0.125rem] text-[0.6rem] text-[#8e8986] w-full font-bold">
                <VerificationBadge />
                Zero-Risk, Money-Back Guarantee
              </div>
          </div>
        </div>
      </div>
    </main>

  );
}
