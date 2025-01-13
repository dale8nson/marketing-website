const DownCaret = ({className}: {className?:string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true" data-slot="icon" className={`size-4 flex-none stroke-primary ${className}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
  )
}

export { DownCaret }