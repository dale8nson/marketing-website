export const GradientBg = ({top, bottom, left, right, className}:{top?: boolean, bottom?: boolean, left?: boolean, right?: boolean, className?:string}) => {
  return (
    <div aria-hidden="true" className={`absolute inset-x-0 ${top ? "-top-40" : bottom ? "-bottom-40" : "-top-40"} -z-10 ${left ? "left" : right? "right" : "left"}-0 transform-gpu overflow-hidden blur-3xl sm:${top ? "-top-96" : bottom ? "-bottom-96" : "-top-96"} w-full h-full ${className}`} >
      <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[17deg] bg-gradient-to-tr from-amber-200 via-orange-300 to-fuchsia-400 opacity-25 sm:left-[calc(50%-25rem)] sm:w-[60.1875rem]">
      </div>
    </div>
  )
}