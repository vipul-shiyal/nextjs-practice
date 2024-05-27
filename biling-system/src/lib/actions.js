"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveUser, saveInvoice } from "./bills";

//server side validations
function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function saveCustomer(formData) {
  const user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phoneNumber"),
    address: formData.get("address"),
  };
  if (
    isInvalidText(user.firstName) ||
    isInvalidText(user.lastName) ||
    isInvalidText(user.phone) ||
    isInvalidText(user.address)
  ) {
    return {
      message: "Invalide input",
    };
  }
  await saveUser(user);

  //revalidatepath used for no cacheing used in /meals page
  revalidatePath("/customer");
  redirect("/customer");
}

export async function saveInvoiceAction(formData) {
  await saveInvoice(formData);
}
