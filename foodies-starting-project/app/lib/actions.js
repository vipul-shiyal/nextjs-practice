'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";


//server side validations
function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(formData){
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }
  if(isInvalidText(meal.title) || 
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || 
    meal.image.size === 0
  ) {
    return {
      message: 'Invalide input'
    }
  }
  await saveMeal(meal)
  //revalidatepath used for no cacheing used in /meals page
  revalidatePath('/meals')
  redirect('/meals')
}