import Image from "next/image";
import BG from "./icons/bg.jpeg"

export default function HomePage() {
  return (
    <main className="h-full lg:min-h-screen  flex flex-col items-center text-center bg-no-repeat">
      <div className="absolute -z-10">
        <Image
          src={BG}
          objectFit="fill"
          quality={100}
          alt="bg"
          className="h-[135vh] z-10"
        />
      </div>
      <section className="flex items-center mt-[56px]">
        <span className="font-bold font-stylic text-8xl lg:text-[10rem] leading-none">H</span>
        <div className='lg:mx-8 ml-7 mr-5 lg:text-5xl text-xl flex items-center gap-0'>
          <span className='text-green-200'>▲</span>
          <span className='text-orange-200'>▼</span>
        </div>
        <span className='font-bold font-stylic text-8xl lg:text-[10rem] leading-none'>4</span>
      </section>
      <p className="text-white/90 lg:text-lg text-sm text-balance text-center w-96 mt-6 font-code">
        A delightful way to build web servers with dart.
      </p>
      <a href="/docs"><button className="my-12 bg-orange-200 px-6 py-3 rounded-md font-code text-black/90">Read the docs</button></a>

      <section className="lg:my-8 my-4 lg:px-0 px-4 ">
        <img src="https://assets.uploadfast.dev/h4-example(2)-ar98.png" className="rounded-lg object-scale-down lg:w-[45em] shadow-3xl" />
      </section>
    </main>
  );
}
