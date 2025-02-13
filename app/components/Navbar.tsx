import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              PEx
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link href="#pricing" className="text-sm text-gray-300 hover:text-white">
                  Preço
                </Link>
                <Link href="#learn" className="text-sm text-gray-300 hover:text-white">
                  O que você irá aprender
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://pay.kiwify.com.br/QSd9xyU" target="_blank" className="bg-white text-black font-bold py-3 px-4 rounded-md text-sm hover:opacity-90 transition duration-300">
              Garanta seu acesso agora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

