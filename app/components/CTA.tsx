import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import GarantiaPNG from '@/app/assets/garantia.png'
import GarantiasPNG from '@/app/assets/garantias.png'

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-black" id="pricing">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto para conquistar sua vaga na tecnologia?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Desenvolvedores, DevOps, UX/UI Designers, Data Scientists... Seja qual for a sua área, aprenda a dominar entrevistas e garantir sua aprovação!
        </p>
      </div>
      <div className="mt-9 max-w-3xl mx-auto text-center">
          <div className="border border-gray-800 p-8 rounded-2xl">
            <p className="font-bold">APENAS:</p>
            <div className="mb-6 mt-2">
              <p className="text-base font-semibold">6x</p>
              <p className="text-5xl font-bold mb-2 text-[#43cc8f] drop-shadow-[0_0_8px_#20E800]">R$ 2,65</p>
              <p className="text-xl">ou R$ 15,90</p>
            </div>
            <Link href="https://pay.kiwify.com.br/QSd9xyU" target="_blank" className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full text-lg hover:opacity-90 transition duration-300 w-full">
              👉 Sim! Eu quero agora!
            </Link>
            <div className="mt-6 flex flex-col  gap-2 items-center justify-center">
              <Image
                src={GarantiaPNG}
                alt="Money back guarantee"
                width={140}
                height={140}
                className="rounded-full"
              />
              <Image
                src={GarantiasPNG}
                alt="Money back guarantee"
                width={240}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
      </div>
    </section>
  )
}

