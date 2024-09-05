
export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center text-center bg-cover bg-center bg-no-repeat bg-[url('https://assets.uploadfast.dev/Hypercolor%20Gradient%20(2)-27oj.jpeg')]">
      <section className="flex items-center mt-[56px]">
        <span className="font-bold font-stylic text-6xl lg:text-[10rem] leading-none">H</span>
        <div className='lg:mx-8 mx-6 lg:text-5xl text-xl flex items-center gap-0'>
          <span className='text-green-200'>▲</span>
          <span className='text-orange-200'>▼</span>
        </div>
        <span className='font-bold font-stylic text-6xl lg:text-[10rem] leading-none'>4</span>
      </section>
      <p className="text-white/90 lg:text-lg text-md text-balance text-center w-96 mt-8 font-code font-semibold">
        A delightful framework for building web servers with dart.
      </p>
      <button className="my-12 bg-orange-200 px-6 py-3 rounded-md font-code text-black/90"><a href="/docs">Read the docs</a></button>

      <section className="md:px-0 px-4 lg:mt-8">
        <img src="https://assets.uploadfast.dev/h4-example(2)-ar98.png" className="rounded-xl object-scale-down lg:w-[45em] mb-24" />
      </section>
    </main>
  );
}
