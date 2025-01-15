import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

const CTA = ({ href = "#", children, className }: { href?: string, children?: ReactNode, className?: string }) => {
  return (
    <Link href={href} className={`flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:rounded-lg transform bg-gradient-to-tr from-primary-alternate to-primary text-center text-primary-foreground shadow duration-500 ease-in-out hover:to-primary/90 hover:shadow-none lg:shadow-md px-3 text-xs w-full  ${className}`}>
      {children}
    </Link>
  )
}

export { CTA }
