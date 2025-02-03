"use client"
import { JSX, MouseEventHandler, ReactElement, ReactNode, useState, useEffect, forwardRef, ForwardRefExoticComponent, ForwardedRef, useRef, RefAttributes, Ref, RefObject, ForwardRefRenderFunction } from "react"
import { createPortal } from "react-dom"
import { DownCaret } from "./DownCaret"
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"

type Button = ForwardRefExoticComponent<{ onClick?: MouseEventHandler<HTMLButtonElement>, children?: string, className?: string, ref?: RefObject<HTMLButtonElement | null> }>

type Item = {
  ({ children, className }: { children?: ReactNode, className?: string }): JSX.Element
}

type Menu = {
  Button: Button
  Item: Item
  Card: typeof Card
  Portal: typeof Portal
  ({ children, className, portalRef }: { children: ReactElement[] | ReactElement, className?: string, portalRef?:RefObject<HTMLDivElement | null> }): JSX.Element
}
const Button: Button = forwardRef(function Button({ onClick, children, className }, ref) {

  return (
    <button ref={ref} onClick={onClick} className={`relative z-10 h-full  whitespace-nowrap text-sm leading-6 text-foreground ${className}`}>
      <div className="flex flex-row justify-between items-center w-full font-semibold hover:text-[#514f4e]">
        {children}
        <DownCaret className="[stroke:#ec5f0e]" />
      </div>
    </button>
  )
})

const Item: Item = ({ children, className }) => {
  return (
    <div className={`item -z-10 ${className}`}>
      {children}
    </div>
  )
}

const Card = ({children}:{children: JSX.Element[]}) => {


  return (
    <div className="flex flex-col gap-x-4">

    </div>
  )
}

const Portal = forwardRef<HTMLDivElement, {className?: string}>(function Portal ({className}, ref:Ref<HTMLDivElement> | undefined) {
  return (
    <div className={className} ref={ref} />
  )
})

const Menu: Menu = ({ children, className, portalRef }) => {
  console.log("children: ", children)
  const [open, setOpen] = useState<boolean>(false)
  const menuItemsRef = useRef(null)
  
  console.log("Button.name: ", Button.name)
  let btn, items
  if (children) {
    if (Object.hasOwn(children, "length") && (children as ReactElement[]).length > 0) {
      btn = (children as JSX.Element[]).find(el => {
        console.log(`el.type: ${el.type.name}`);

        return el.type.name === Button.name
      })
      items = (children as JSX.Element[]).filter(el => el.type.name === Item.name) as JSX.Element[]
      console.log("items: ", items)
    }
    else if ((children as JSX.Element).type.name === Button.name) {
      console.log("children.type: ", (children as JSX.Element).type.name)
      btn = children as ReactElement
    }
  }

  const onClick = () => { console.log("open: ", !open), setOpen(!open) }

  useGSAP(() => {
    if (open) gsap.to(menuItemsRef.current, { y: "0%", opacity: "100%", duration: 0.125 })
    else gsap.to(menuItemsRef.current, { y: "-103%", opacity: "0", duration: 0.125 })

  }, [open])

  return (
    <div className={`flex flex-col items-center justify-start relative z-40 bg-white ${className}`}>
        {btn && <Button onClick={onClick} {...btn.props} className="relative z-30 bg-white h-16" >
          {btn.props.children}
        </Button>}
          {items && portalRef?.current && createPortal((<div ref={menuItemsRef} className="item absolute z-[-1] top-[4.03rem] left-0 flex flex-col items-start justify-start w-full bg-white p-4 transition-transform">
            {items.map((item, index) => {
            return <div key={index} className={`relative z-0 w-full h-full  flex flex-row items-center justify-center bg-white ${item.props.className}`} >
              {item.props.children}
            </div>
          })}</div>), portalRef?.current as HTMLDivElement)}
    </div>
    )
}

Menu.Button = Button
Menu.Item = Item
Menu.Card = Card
Menu.Portal = Portal

export { Menu }
