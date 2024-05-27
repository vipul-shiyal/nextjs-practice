export default function ProductDetails({ params }: {
  params: { productId: string}
}) {
  return (
    <div>
      <h1>Details about product page {params.productId}</h1>
    </div>
  )
}

