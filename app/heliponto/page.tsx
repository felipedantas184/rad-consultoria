"use client"

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  Calendar,
  Clock,
  Shield,
  Award,
  BarChart,
  Globe,
  Building,
  Check,
  ChevronDown,
  MapPin,
  AlertTriangle,
  ThumbsUp,
  FileText
} from 'lucide-react'
import { useState } from 'react'
import { sendContactForm } from '@/lib/api'
import { AnalyticsEvents } from '@/lib/analytics'
import { FaHelicopterSymbol, FaWhatsapp } from 'react-icons/fa6'

// ========== DADOS DA LANDING PAGE — HELIPONTOS (OTIMIZADA PARA CONVERSÃO) ==========

const trustSignals = [
  { text: '45+ Projetos', icon: BarChart, subtitle: 'Helipontos Homologados' },
  { text: '100% Aprovação', icon: Award, subtitle: 'Taxa ANAC' },
  { text: '15+ Anos', icon: Clock, subtitle: 'Experiência' },
  { text: '14 Estados', icon: Globe, subtitle: 'Atendimento Nacional' }
]

const benefits = [
  {
    icon: Shield,
    title: 'Segurança jurídica total',
    description: 'Seu heliponto regularizado elimina riscos de multas, embargos e responsabilização civil ou criminal do proprietário ou síndico.'
  },
  {
    icon: Building,
    title: 'Valorização do imóvel ou condomínio',
    description: 'Um heliponto homologado agrega valor ao patrimônio e se torna um diferencial competitivo para vendas e locações de alto padrão.'
  },
  {
    icon: FaHelicopterSymbol,
    title: 'Processo conduzido por especialistas',
    description: 'Ricardo Dantas acompanha cada etapa — você não precisa entender de burocracia aeronáutica, só assinar e operar com tranquilidade.'
  }
]

const faqs = [
  {
    question: 'Preciso homologar um heliponto que já existe no meu prédio?',
    answer: 'Sim. Mesmo que o heliponto nunca tenha sido operado, a estrutura física já exige aprovação da ANAC e do DECEA. Sem a homologação, o condomínio ou proprietário está em situação irregular e sujeito a penalidades.'
  },
  {
    question: 'Qual o prazo para homologar um heliponto?',
    answer: 'O prazo médio é de 90 a 150 dias, dependendo da complexidade do projeto e da documentação existente. O diagnóstico gratuito em 24h já apresenta um cronograma mais preciso para o seu caso.'
  },
  {
    question: 'Posso operar o heliponto enquanto o processo tramita?',
    answer: 'Depende da situação. Em muitos casos, é possível conduzir a regularização com a operação em andamento, desde que não haja auto de infração já aberto. O diagnóstico avalia isso especificamente para você.'
  },
  {
    question: 'O que está incluso no serviço de homologação?',
    answer: 'Levantamento técnico, PBZPA (Plano Básico de Zona de Proteção de Aeródromos), projeto executivo, projeto de balizamento noturno e sinalização horizontal quando aplicável, além da tramitação completa junto à ANAC e ao DECEA até a emissão do certificado.'
  }
]

export default function HelipontosLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Heliponto',
    email: '',
    location: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    AnalyticsEvents.contactFormSubmit(formData.projectType, formData.location)

    const submitButton = e.currentTarget.querySelector('button[type="submit"]')
    if (submitButton) {
      submitButton.innerHTML = 'Enviando...'
      submitButton.setAttribute('disabled', 'true')
    }

    try {
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        projectType: formData.projectType,
        location: formData.location,
        urgency: (e.currentTarget as any).urgency?.value || '',
        message: formData.message || '',
        timestamp: new Date().toISOString(),
        source: 'Landing Page - Helipontos'
      }

      const response = await sendContactForm(leadData)

      if (response.success) {
        alert('✅ Consulta enviada com sucesso! Você receberá um e-mail de confirmação em instantes. Entraremos em contato em até 24h.')
        setFormData({ name: '', phone: '', projectType: 'Heliponto', email: '', location: '', message: '' })
        const urgencySelect = document.getElementById('project-urgency-hel') as HTMLSelectElement
        if (urgencySelect) urgencySelect.value = ''
      } else {
        throw new Error(response.message || 'Erro ao enviar')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('❌ Ocorreu um erro ao enviar sua consulta. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp: (86) 99981-1672')
    } finally {
      if (submitButton) {
        submitButton.innerHTML = `
        <div class="flex items-center justify-center gap-2 sm:gap-3">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Quero meu Diagnóstico Gratuito</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      `
        submitButton.removeAttribute('disabled')
      }
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <title>Homologação de Heliponto | RAD Consultoria Aeronáutica</title>
      <meta name="description" content="Regularize seu heliponto com segurança jurídica. Evite multas e embargos. 45+ projetos homologados com 100% de aprovação. Diagnóstico gratuito em 24h." />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-32 h-18 sm:w-40 sm:h-22.5">
                <img
                  src="/rad-logo.png"
                  alt="RAD Consultoria Aeronáutica"
                  className="w-full h-full object-contain transition-opacity group-hover:opacity-90"
                  width={160}
                  height={90}
                />
              </div>
            </a>

            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 sm:px-5 py-2.5 rounded-lg hover:shadow-md transition-all font-medium text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-sm border border-blue-600"
            >
              <Calendar size={14} />
              <span className="whitespace-nowrap">Diagnóstico Grátis</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl md:top-10 md:right-10 md:w-72 md:h-72"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-500/5 rounded-full blur-3xl md:bottom-10 md:left-10 md:w-64 md:h-64"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:pr-4 order-1"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg border border-blue-700">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>45+ Helipontos Homologados</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Seu heliponto pode estar{' '}
                <span className="text-blue-800 block sm:inline">irregular sem você saber</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                Evite multas e embargos. Mais de <span className="font-semibold text-gray-900">45 helipontos homologados</span>,
                com <span className="font-semibold text-gray-900">100% de aprovação na ANAC e no DECEA</span>.
                Receba seu diagnóstico gratuito em até 24 horas.
              </p>

              <div className="mt-10 sm:mt-12">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#contato"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-4 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all shadow-lg hover:shadow-blue-900/30 font-bold text-base sm:text-lg gap-3 sm:gap-4 cursor-pointer group"
                  >
                    <Calendar className="w-5 h-5 sm:w-7 sm:h-7" />
                    <span className="text-center sm:text-left flex-1">Quero meu Diagnóstico Gratuito</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
                  </motion.a>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium sm:font-semibold">Diagnóstico em 24h, sem compromisso</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full mb-10 lg:mb-0 order-2"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-blue-500/20 border border-gray-200 bg-white">
                <img
                  src="/gallery/heliponto-condominio.jpg"
                  alt="Heliponto homologado pela RAD Consultoria Aeronáutica"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <p className="text-white font-semibold text-sm sm:text-base">Heliponto · Reserva Villa Borghese · Homologado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloco de Autoridade / Prova Social */}
      <section id="prova-social" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {trustSignals.map((signal) => (
              <motion.div
                key={signal.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-200"
              >
                <signal.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-2xl font-bold text-gray-900">{signal.text}</div>
                <div className="text-xs sm:text-sm text-gray-600">{signal.subtitle}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-200 flex flex-col md:flex-row items-center gap-6 sm:gap-10"
          >
            <img
              src="/ricardo.png"
              alt="Ricardo Augusto Dantas - Especialista em Homologação Aeronáutica"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white shadow-lg flex-shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Ricardo Augusto Dantas</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Credenciado ANAC, homologado DECEA, especialista RBAC — 15+ anos de experiência conduzindo pessoalmente
                cada projeto de regularização de helipontos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  <Shield className="w-3.5 h-3.5" /> Credenciado ANAC
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  <Shield className="w-3.5 h-3.5" /> Homologado DECEA
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Por que regularizar seu heliponto antes da fiscalização? */}
      <section id="urgencia" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50/30 via-white to-blue-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Por que regularizar seu heliponto <span className="text-red-700">antes da fiscalização</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quem espera a notificação chegar assume riscos que podem ser evitados com um simples diagnóstico gratuito.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Coluna do Risco */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-red-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">O risco de esperar</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-700 font-bold text-xs">!</span>
                  </div>
                  <p className="text-gray-700">Multas pesadas aplicadas pela ANAC, que podem inviabilizar seu orçamento.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-700 font-bold text-xs">!</span>
                  </div>
                  <p className="text-gray-700">Embargo imediato do heliponto — operação aérea paralisada.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-700 font-bold text-xs">!</span>
                  </div>
                  <p className="text-gray-700">Responsabilização civil e criminal do proprietário ou síndico.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-700 font-bold text-xs">!</span>
                  </div>
                  <p className="text-gray-700">Desvalorização do imóvel e dificuldade para vender ou financiar.</p>
                </li>
              </ul>
            </motion.div>

            {/* Coluna da Solução */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-green-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Com a RAD, você só precisa:</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 font-bold text-xs">1</span>
                  </div>
                  <p className="text-gray-700"><strong>Solicitar o diagnóstico</strong> (1 minuto pelo formulário abaixo)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 font-bold text-xs">2</span>
                  </div>
                  <p className="text-gray-700"><strong>Receber uma análise clara</strong> em até 24h, sem papelada confusa</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-700 font-bold text-xs">3</span>
                  </div>
                  <p className="text-gray-700"><strong>Decidir se quer prosseguir</strong> — sem pressão, com total transparência</p>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100 flex items-start gap-3">
                <FileText className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                  O diagnóstico é <strong>100% gratuito e não obriga você a nada</strong>. É só o primeiro passo para você dormir tranquilo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              O que muda quando seu heliponto está regular
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Real - Heliponto */}
      <section id="case" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 grid md:grid-cols-2"
          >
            <img
              src="/gallery/heliponto-condominio.jpg"
              alt="Heliponto homologado - RAD Consultoria Aeronáutica"
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 w-fit">
                Case Condomínio de Alto Padrão
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Reserva Villa Borghese</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Condomínio com heliponto já construído, porém não homologado. A RAD regularizou a estrutura sem obras
                invasivas, liberando o síndico de qualquer responsabilidade e agregando valor ao empreendimento.
              </p>
              <blockquote className="border-l-4 border-blue-700 pl-4 py-2 mb-4 bg-blue-50/50 rounded-r-lg">
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  “Agora temos o heliponto como diferencial de venda, não como preocupação jurídica.”
                </p>
                <footer className="text-xs sm:text-sm text-gray-500 mt-1">— Síndico, Villa Borghese</footer>
              </blockquote>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Homologado com 100% de aprovação na primeira submissão</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulário */}
      <section id="contato" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Descubra se seu heliponto está regular
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Diagnóstico gratuito em até 24h, sem compromisso
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl border border-gray-200/80"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Diagnóstico Gratuito</div>
                <div className="text-gray-600 flex items-center justify-center sm:justify-start gap-1.5">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base">Resposta em até 24h</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Seu Nome *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                      placeholder="Como prefere ser chamado?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                      placeholder="(86) 99981-1672"
                    />
                  </div>

                  <div>
                    <label htmlFor="project-type-hel" className="block text-sm font-semibold text-gray-900 mb-2">
                      Tipo de Projeto *
                    </label>
                    <select
                      id="project-type-hel"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-white text-sm sm:text-base"
                    >
                      <option value="Heliponto">Heliponto</option>
                      <option value="Aerodromo">Aeródromo / Pista</option>
                      <option value="Papi">Sistema PAPI</option>
                      <option value="Sinalizacao">Sinalização Horizontal</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Local do Projeto *</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                      placeholder="Condomínio / Cidade - Estado"
                    />
                  </div>

                  <div>
                    <label htmlFor="project-urgency-hel" className="block text-sm font-semibold text-gray-900 mb-2">
                      Urgência do Projeto
                    </label>
                    <select
                      id="project-urgency-hel"
                      name="urgency"
                      className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-white text-sm sm:text-base"
                    >
                      <option value="">Selecione a urgência...</option>
                      <option value="imediato">Imediato (30-60 dias)</option>
                      <option value="planejamento">Planejamento (60-90 dias)</option>
                      <option value="futuro">Futuro (+90 dias)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 sm:h-6 mt-0.5">
                    <input
                      id="privacy-policy-hel"
                      type="checkbox"
                      required
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                  </div>
                  <label htmlFor="privacy-policy-hel" className="text-sm text-gray-700 cursor-pointer">
                    Concordo em receber contato para consultoria gratuita e diagnóstico do projeto.
                    <span className="block text-gray-500 text-xs mt-1">Seus dados estão protegidos. Não fazemos spam.</span>
                  </label>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3.5 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-lg sm:hover:shadow-xl transition-all font-bold text-base sm:text-lg shadow-md"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>Quero meu Diagnóstico Gratuito</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </motion.button>

                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2 text-green-500" />
                  Entraremos em contato em até 24h
                </p>
              </div>
            </form>

            {/* CTA Secundário — WhatsApp */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600 mb-4">Prefere falar direto com o especialista?</p>
              <motion.a
                href="https://wa.me/5586999811672?text=Olá!%20Quero%20saber%20se%20meu%20heliponto%20está%20regular."
                onClick={() => AnalyticsEvents.whatsappClick('lp_helipontos_form')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-bold text-sm gap-2 border border-green-500"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Falar com Ricardo no WhatsApp</span>
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Acordeão */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Perguntas Frequentes sobre Helipontos
            </h2>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 md:p-8"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-700 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex justify-start mb-6">
                <img src="/logo.png" alt="RAD Consultoria Aeronáutica" className="w-full max-w-[200px] object-contain" />
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Especialistas em regularização de helipontos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Contato</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="tel:+5586999811672"
                    onClick={() => AnalyticsEvents.phoneCallClick('+5586999811672')}
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
            <p>&copy; {new Date().getFullYear()} RAD Consultoria Aeronáutica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <motion.a
        href="https://wa.me/5586999811672?text=Olá!%20Quero%20saber%20se%20meu%20heliponto%20está%20regular."
        onClick={() => AnalyticsEvents.whatsappClick('lp_helipontos_float')}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-50 group"
      >
        <FaWhatsapp size={24} />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Entrar em Contato
        </div>
      </motion.a>
    </main>
  )
}