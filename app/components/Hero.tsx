import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          Domine as Entrevistas
          <br />
          <span className="text-gray-400">e conquiste sua vaga</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          Aprenda as estratégias usadas por profissionais das maiores empresas de tecnologia para ser aprovado em QUALQUER entrevista.
        </p>
        <Link href="https://pay.kiwify.com.br/QSd9xyU" target="_blank" className="relative group px-8 py-4 text-lg bg-gradient-to-r rounded-md from-primary to-accent hover:opacity-90">
          <span className="relative z-10 text-black font-medium">Quero meu Ebook!</span>
          <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </Link>
      </div>
    </div>
  )
}

