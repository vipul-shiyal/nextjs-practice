import Link from 'next/link'
import { Suspense } from 'react'
import MealsGride from '../components/meals/meals-gride'
import { getMeals } from '../lib/meals'
import classes from './page.module.css'

//used loading suspense
async function Meals() {
  //seperate data fetching for page loadtime increase
  const meals = await getMeals()
  return <MealsGride meals={meals}/>
}

export default function MealsPage(){
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, cretae{' '} <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={ <p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
  
}
