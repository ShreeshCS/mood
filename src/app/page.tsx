import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[700px] mx-auto">
        <h1 className="text-6xl mb-4">
          Mood AI, your honest friend throughout life.
        </h1>
        <p className="text-2xl text-white/80 mb-4">
          This is your go to app for getting feedback and retrospect on your day
          to day life
        </p>
        <div>
          <Link href={'/sign-up'}>
            <button className="bg-blue-700 px-4 py-2 rounded-md text-xl">
              Get Started!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
