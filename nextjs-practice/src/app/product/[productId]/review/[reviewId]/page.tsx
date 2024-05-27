import { notFound } from 'next/navigation'

function getRandomInt(count: number){
  return Math.floor(Math.random() * count)
}


export default function ReviewDetails({ params }: {
  params: { 
    productId: string
    reviewId: string
  }
}) {
  const randomNumber =  getRandomInt(2)

  if(randomNumber === 1) {
    throw new Error('Error Loadin Review')
  }

  if(parseInt(params.reviewId) > 100) {
    notFound()
  }
  
  return (
    <div>
      <h1>Review {params.reviewId} for product {params.productId}</h1>
    </div>
  )
}

