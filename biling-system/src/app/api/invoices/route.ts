import { invocesData } from "./data"

export async function GET() {
  return Response.json(invocesData)
}

export async function POST( request: Request ) {
  const billData = await request.json();
  const newBill  = {
    id: invocesData.length + 1,
    fullName: billData.fullName,
    phoneNumber: billData.phoneNumber,
    productDetails: billData.productDetails,
    item: billData.item,
    qty: billData.qty,
    price: billData.price
  }
  invocesData.push(newBill)
  return new Response(JSON.stringify(newBill), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 201,
  })
}