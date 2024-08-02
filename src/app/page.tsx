import Image from 'next/image'

import DealForm from '../components/DealForm'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DealForm />
    </main>
  )
}
