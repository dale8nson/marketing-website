import Image from "next/image"
import { AppMenu } from "./AppMenu"
import { Logo } from "./Logo"

const AppBar = () => {

  return (
    <header className="fixed top-0 left-0 w-full h-[4rem] bg-white flex flex-row justify-between lg:justify-evenly items-center z-50 px-6 lg:mx-auto lg:px-24 shadow">
      <Logo />
      <AppMenu />
    </header>
  )

}

export { AppBar }