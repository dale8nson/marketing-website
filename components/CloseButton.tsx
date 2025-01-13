import { MouseEventHandler } from "react"

const CloseButton = ({onClick}: {onClick?:MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <button onClick={onClick} className="flex flex-row justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
    </button>
  )
}

export { CloseButton }