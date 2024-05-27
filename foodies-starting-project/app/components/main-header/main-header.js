
import Link from "next/link"
import Image from 'next/image'

import logoImg from "@/assets/logo.png"
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background"
import NavLink from "./navLink"


export default function MainHeader () {

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg.src} alt="a plate with food on it"   width={500} height={500} priority/>
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
            {/* <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>

            {/* <Link href="/community" className={path === '/community' ? classes.active : undefined}>Foodies Community</Link> */}
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}