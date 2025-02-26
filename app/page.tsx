import Image from "next/image";
import BG from "./icons/bg.jpeg"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center bg-no-repeat">
      <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right_bottom,#1e2433,#2d3748)] animate-[shift_10s_ease-in-out_infinite]">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 1000\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }} />
      </div>
      <section className="flex items-center mt-[56px]">
        <span className="font-bold font-stylic text-8xl lg:text-[10rem] leading-none">H</span>
        <div className='lg:mx-8 ml-7 mr-5 lg:text-5xl text-xl flex items-center gap-0'>
          <span className='text-green-200'>▲</span>
          <span className='text-orange-200'>▼</span>
        </div>
        <span className='font-bold font-stylic text-8xl lg:text-[10rem] leading-none'>4</span>
      </section>
      <p className="text-white/90 lg:text-lg text-md text-balance text-center w-[67%] mt-6 font-code">
        A delightful way to build web servers with dart.
      </p>
      <p className="lg:text-lg lg:mt-2.5 mt-4 w-[67%] text-center text-md">Elegant, powerful, and intuitive. You'll <strong>love</strong> developing with it.</p>
      <a href="/docs"><button className="mt-10 mb-12 bg-orange-200 px-6 py-3 rounded-md font-code text-black/90">Read the docs</button></a>
      <section className="lg:my-8 my-4 lg:px-0 px-4 max-w-full">
        <img src="https://assets.uploadfast.dev/h4-example(2)-ar98.png" className="rounded-lg object-scale-down w-full max-w-[45em] shadow-3xl" />
      </section>
    </main>
  );
}
