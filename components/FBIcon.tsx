const FBIcon = ({color="currentColor"}:{color?: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-[24px] h-[24px]"><path d="M9.584 21.706v-6.65H7.52V12h2.064v-1.317c0-3.404 1.54-4.98 4.88-4.98.632 0 1.724.124 2.172.248V8.72a13 13 0 0 0-1.156-.036c-1.64 0-2.272.62-2.272 2.236V12h3.268l-.56 3.056h-2.704v6.872C18.164 21.328 22 17.112 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.69 3.228 8.625 7.584 9.706" fill={color}></path></svg>
  )
}

export { FBIcon }