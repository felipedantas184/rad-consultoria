"use client"

import { motion } from 'framer-motion'
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

// ========== PÁGINA DE POLÍTICA DE PRIVACIDADE ==========

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <title>Política de Privacidade | RAD Consultoria Aeronáutica</title>
      <meta
        name="description"
        content="Política de privacidade da RAD Consultoria Aeronáutica. Saiba como protegemos seus dados pessoais em conformidade com a LGPD."
      />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-32 h-18 sm:w-40 sm:h-22.5">
                <img
                  src="/rad-logo.png"
                  alt="RAD Consultoria Aeronáutica"
                  className="w-full h-full object-contain transition-opacity group-hover:opacity-90"
                  width={160}
                  height={90}
                />
              </div>
            </Link>

            <Link
              href="/#contato"
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 sm:px-5 py-2.5 rounded-lg hover:shadow-md transition-all font-medium text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-sm border border-blue-600"
            >
              <Calendar size={14} />
              <span className="whitespace-nowrap">Diagnóstico Grátis</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200/80"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Política de Privacidade
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                A <strong>RAD Consultoria Aeronáutica</strong> valoriza a privacidade e a proteção dos dados pessoais de seus clientes, visitantes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e demais legislações aplicáveis.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                1. Coleta de Dados Pessoais
              </h2>
              <p>
                Coletamos dados pessoais fornecidos voluntariamente por você ao preencher formulários em nosso site, como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo</li>
                <li>Telefone / WhatsApp</li>
                <li>Endereço de e-mail</li>
                <li>Localização do projeto (cidade, estado)</li>
                <li>Tipo de projeto (aeródromo, heliponto, PAPI, sinalização)</li>
                <li>Mensagens e observações enviadas através dos formulários</li>
              </ul>
              <p>
                Além disso, coletamos automaticamente dados de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas e tempo de visita, para fins de análise de desempenho e melhoria da experiência do usuário.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                2. Finalidade do Tratamento dos Dados
              </h2>
              <p>Utilizamos seus dados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Atendimento e suporte:</strong> Responder a suas dúvidas, solicitações de diagnóstico gratuito e prestar consultoria técnica.
                </li>
                <li>
                  <strong>Comunicação:</strong> Enviar informações sobre projetos, orçamentos, atualizações regulatórias e conteúdos relacionados à aviação executiva e infraestrutura aeronáutica.
                </li>
                <li>
                  <strong>Marketing e publicidade:</strong> Realizar campanhas segmentadas no Google Ads e outras plataformas, sempre com base no seu interesse manifesto.
                </li>
                <li>
                  <strong>Melhoria contínua:</strong> Analisar dados de navegação para otimizar o site e oferecer uma experiência mais relevante.
                </li>
                <li>
                  <strong>Obrigações legais:</strong> Cumprir com exigências legais, regulatórias ou judiciais.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                3. Compartilhamento de Dados
              </h2>
              <p>
                Seus dados pessoais podem ser compartilhados com terceiros nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Parceiros de serviço:</strong> Empresas que prestam serviços em nosso nome, como plataformas de e-mail marketing, ferramentas de CRM, provedores de hospedagem e serviços de analytics (ex: Google Analytics).
                </li>
                <li>
                  <strong>Autoridades competentes:</strong> Quando exigido por lei, ordem judicial ou para proteção de direitos da RAD ou de terceiros.
                </li>
                <li>
                  <strong>Em caso de fusão ou aquisição:</strong> Se a RAD for adquirida ou incorporada por outra empresa, os dados poderão ser transferidos, mantendo-se os compromissos de privacidade.
                </li>
              </ul>
              <p>
                Não comercializamos nem alugamos seus dados pessoais a terceiros não autorizados.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                4. Cookies e Tecnologias de Rastreamento
              </h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar a navegação, analisar o tráfego e personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
              </p>
              <p>
                Para campanhas do Google Ads, utilizamos cookies de remarketing para exibir anúncios relevantes a usuários que já visitaram nosso site. O Google utiliza esses dados de acordo com sua própria política de privacidade.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                5. Armazenamento e Segurança
              </h2>
              <p>
                Seus dados são armazenados em servidores seguros, adotando medidas técnicas e organizacionais adequadas para proteger contra acessos não autorizados, perda, destruição ou alteração.
              </p>
              <p>
                Mantemos os dados apenas pelo tempo necessário para cumprir as finalidades descritas, respeitando os prazos legais e regulatórios aplicáveis.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                6. Direitos do Titular dos Dados
              </h2>
              <p>
                Você, como titular dos dados, possui os seguintes direitos, garantidos pela LGPD:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de seus dados.</li>
                <li>Acessar seus dados pessoais.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimizar, bloquear ou eliminar dados desnecessários ou excessivos.</li>
                <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço.</li>
                <li>Eliminar dados tratados com seu consentimento.</li>
                <li>Revogar o consentimento a qualquer momento.</li>
                <li>Opor-se a tratamento que viole a lei.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato conosco pelos canais indicados no item 9.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                7. Consentimento
              </h2>
              <p>
                Ao utilizar nosso site e fornecer seus dados pessoais, você consente com a coleta, uso e armazenamento conforme descrito nesta Política de Privacidade. Você pode retirar seu consentimento a qualquer momento, sem prejuízo de outros direitos.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                8. Atualizações desta Política
              </h2>
              <p>
                Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação. Recomendamos que você a revise regularmente. A data da última atualização está indicada no início da página.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 pt-4 border-t border-gray-100">
                9. Contato – Encarregado de Dados (DPO)
              </h2>
              <p>
                Para dúvidas, solicitações ou exercício de direitos relacionados à privacidade, entre em contato com nosso encarregado de dados:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-700" />
                    <span className="text-sm sm:text-base">
                      <a href="mailto:rad.aeronautica@gmail.com" className="hover:text-blue-700 transition-colors">
                        rad.aeronautica@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-700" />
                    <span className="text-sm sm:text-base">
                      <a href="tel:+5586999811672" className="hover:text-blue-700 transition-colors">
                        (86) 99981-1672
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-start gap-3 bg-blue-50/50 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  A RAD Consultoria Aeronáutica está comprometida com a transparência e a proteção de seus dados. Esta política está em conformidade com a LGPD e com as diretrizes do Google Ads para anúncios baseados em interesse.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex justify-start mb-6">
                <img
                  src="/logo.png"
                  alt="RAD Consultoria Aeronáutica"
                  className="w-full max-w-[200px] object-contain"
                />
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Especialistas em regularização aeronáutica.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Contato</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="tel:+5586999811672"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Phone size={18} />
                    <span>(86) 99981-1672</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rad.aeronautica@gmail.com"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                    <span>rad.aeronautica@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} RAD Consultoria Aeronáutica. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              <Link href="/privacidade" className="hover:text-white transition-colors underline">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}