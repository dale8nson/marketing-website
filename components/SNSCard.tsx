import Image from "next/image"
import { Heart } from "./Heart"
import { UploadIcon } from "./UploadIcon"

export const SNSCard = ({src, likes, uploads}: {src:string, likes: string, uploads: string}) => {
  const alt = src.match(/(.+?)\./)?.[0].replace("-", " ")

  return (
    <div className="flex flex-col p-0">
      <Image className="rounded-t-xl" src={src} width={320} height={320} alt="example social media post for speakers" />
      <div className="flex flex-row bg-white items-center justify-between p-3 drop-shadow rounded-b-xl">
        <div className="flex flex-row gap-x-2 items-center">
          <Heart/>
          {likes}
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <UploadIcon/>
          {uploads}
        </div>
      </div>
    </div>
  )
}