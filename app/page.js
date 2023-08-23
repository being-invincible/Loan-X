import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="grid grid-cols-1 gap-10 z-10 w-full items-center justify-between">
        <div className="flex w-full font-serif">
          <p className="text-4xl tracking-wider">Good Morning!</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-10 w-full h-40">
          <div className="bg-black rounded-lg"></div>
          <div className="bg-black rounded-lg"></div>
          <div className="bg-black rounded-lg"></div>
        </div>

        {/* Dashboards */}
        <div className="grid grid-cols-6 gap-10 w-full h-80">
          <div className="col-span-3 bg-black rounded-lg"></div>
          <div className="col-span-3 bg-black rounded-lg"></div>
        </div>
      </div>
    </main>
  )
}
