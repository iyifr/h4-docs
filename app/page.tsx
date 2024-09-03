import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center text-center bg-cover bg-center bg-no-repeat bg-[url('https://assets.uploadfast.dev/Hypercolor%20Gradient%20(2)-27oj.jpeg')]">
      <section className="flex items-center mt-[96px]">
        <span className="font-bold font-stylic text-[10rem] leading-none">H</span>
        <div className='mx-8 text-5xl flex items-center gap-0'>
          <span className='text-green-200'>▲</span>
          <span className='text-orange-200'>▼</span>
        </div>
        <span className='font-bold font-stylic text-[10rem] leading-none'>4</span>
      </section>
      <p className="text-white/90 text-lg text-balance text-center w-96 mt-8 font-code font-semibold">
        A delightful way to create backends with dart.
      </p>
    </main>
  );
}
