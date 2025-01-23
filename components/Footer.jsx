import Image from "next/image"
import Link from "next/link"


const socials = [
  {
    src: "/assets/footer/facebook.svg",
    path: "",
  },
  {
    src: "/assets/footer/x.svg",
    path: "",
  },
  {
    src: "/assets/footer/instagram.svg",
    path: "",
  },
  {
    src: "/assets/footer/youtube.svg",
    path: "",
  },
  {
    src: "/assets/footer/pinterest.svg",
    path: "",
  },
]

const Footer = () => {
  return (
    <footer className="bg-accent bg-pattern bg-cover bg-blend-multiply pt-16">
      <div className="container mx-auto border-b border-white/40">
        <div className="flex flex-col max-w-[550px] mx-auto text-center">
          <div className="mb-9">
            <h2 className="h2 mb-3">Your Event Connection</h2>
            <p>Join our list for exclusice event updates and insider tips.</p>
          </div>

          <form
            className="relative flex items-center mb-16"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-8 w-full h-[60px] rounded-full outline-none placeholder:text-primary/80 text-primary text-sm"
            />
            <button className="bg-secondary hover:bg-secondary-hover transition-all w-[114px] h-[53px] rounded-full text-sm uppercase absolute right-1">
              Join
            </button>
          </form>

          <div className="mb-[72px] flex gap-8 mx-auto">
            {socials.map((icon, index) => {
              return(
                <Link href={icon.path} key={index} className="relative w-[20px] h-[20px]">
                  <Image 
                    src={icon.src}
                    alt="social icon"
                    fill
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <Link
              href="/"
              className="relative flex w-[78px] h-[30px]"
            >
              <Image
                src="/assets/footer/logo.svg"
                fill
                alt="Logo"
                className="object-contain"
              />
            </Link>
            <p className="text-sm">Copyright &copy; 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer