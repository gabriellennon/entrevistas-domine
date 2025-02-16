import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import OfferPng from '../assets/offer.jpg'

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-zinc-900" />,
    title: "Domínio Técnico",
    description: "Como responder rapidamente perguntas técnicas como um profissional.",
  },
  {
    icon: <Zap className="h-8 w-8 text-zinc-900" />,
    title: "Técnicas de Soft Skills",
    description: "As técnicas de comunicação que fazem você se destacar dos outros candidatos.",
  },
  {
    icon: <Users className="h-8 w-8 text-zinc-900" />,
    title: "Como mostrar domínio",
    description: "O que os recrutadores REALMENTE querem ouvir (e como entregar isso da forma certa).",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-zinc-900" />,
    title: "Como montar sua apresentação de experiências",
    description: "Como transformar qualquer experiência anterior (mesmo pouca!) em algo valioso.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-zinc-900" />,
    title: "Técnicas de estabilização sentimental.",
    description: "Os segredos para quebrar o nervosismo e ser visto como um candidato IMPERDÍVEL.",
  },
]

export default function Features() {
  return (
    <section id="learn" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center py-4 mb-5 flex flex-col gap-4">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:px-8">
          <Image
            src={OfferPng}
            alt="Oferta especial!"
            width={400}
            height={400}
            className="rounded-md"
          />
          <div>
            <h4 className="text-xl font-bold text-center mb-12 text-zinc-900">
              Você já sentiu aquele frio na barriga antes de uma entrevista? Já se pegou travado(a) diante de uma pergunta técnica ou sem saber como se vender bem?
            </h4>
            <p className="text-blue-950 font-bold">💡 Imagine isso:</p>
            <ul className="text-black font-medium">
              <li>👉 Você entra na entrevista confiante, sabendo exatamente o que esperar.</li>
              <li>👉 Responde cada pergunta com segurança, sem gaguejar ou ficar perdido(a).</li>
              <li>👉 Impressiona os recrutadores e se destaca da concorrência.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">O que você vai aprender?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-zinc-800">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">{feature.title}</h3>
              <p className="text-zinc-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

