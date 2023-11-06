"use client"

import Link from "next/link"


//Carousel Component



export default function Home() {
  return (
    <div className='w-full flex justify-center py-16'>
     <Link href="/dashboard">
     <button className="btn btn-info" type="button">Go to Dashboard</button>
     </Link>
    </div>
  )
}
