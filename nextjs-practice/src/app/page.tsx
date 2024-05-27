
import Link from 'next/link'

export default function Home() {
  return (
      <div className="p-10">
        <h2 className='pb-5'>Welcome!</h2>
        <Link href="/blog">Blog</Link>
        <Link href="/product">Product</Link>
        <Link href="/about">About</Link>
      </div>   
  );
}
