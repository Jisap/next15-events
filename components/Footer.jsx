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
        <div>
          text & socials
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