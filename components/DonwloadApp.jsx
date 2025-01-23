import Image from "next/image"
import Link from "next/link"




const DonwloadApp = () => {
  return (
    <section className="w-full md:h-[364px] bg-accent mb-16 rounded-2xl bg-pattern bg-cover p-10 xl:p-20 bg-blend-multiply
    flex items-center justify-center"
    >
      <div className="flex flex-col xl:flex-row items-center gap-6">
        <div className="flex-1 text-center xl:text-left">
          <h2 className="h2">
            Experience Events In Your Pocket Today
          </h2>
          <p className="max-w-[410px] mx-auto xl:mx-0">
            Download our App and get instant access to upcoming events and tailored recommendations.
          </p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-4">
          <Link href="/" className="relative flex w-[192px] h-[64px]">
            <Image 
              src="/assets/download/app-store.svg"
              fill 
              alt="App Store"
              className="object-contain"
            />
          </Link>
          <Link href="/" className="relative flex w-[216px] h-[64px]">
            <Image
              src="/assets/download/google-play.svg"
              fill
              alt="App Store"
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DonwloadApp