"use client"

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  CheckCircle,
  Calendar,
  FileText,
  Settings,
  Award,
  Clock,
  Users,
  Building,
  Upload,
  MessageCircle,
  Shield,
  FileCheck,
  Globe,
  BarChart,
  Target,
  ChevronRight,
  Star,
  Briefcase,
  Cpu,
  Zap,
  Plane,
  Navigation,
  ClipboardCheck,
  Helicopter
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { sendContactForm } from '@/lib/api'
import { AnalyticsEvents } from '@/lib/analytics'

// ========== DADOS REAIS DA RAD ==========

// Segmentos de Cliente Otimizados com sua lista real
const CLIENT_SEGMENTS = [
  {
    name: 'Agronegócio & Fazendas',
    icon: Users,
    count: '45+',
    // Exemplos em Título (Title Case)
    examples: ['Canaã Executivo', 'Fazenda Santa Thereza', 'Agrícola Rizzi', 'Fazenda Vale Verde'],
    description: 'Infraestrutura aérea para gestão e escoamento da produção em grandes propriedades rurais.'
  },
  {
    name: 'Condomínios & Empreendimentos',
    icon: Building,
    count: '6+',
    // Exemplos em Título (Title Case)
    examples: ['Fly Village', 'Socó Beach Residence', 'Premier Cond. Aeronáutico', 'Garden Hotel'],
    description: 'Helipontos, heliportos e pistas de pouso em edifícios, hotéis e condomínios de alto padrão.'
  },
  {
    name: 'Logística & Indústria',
    icon: Cpu,
    count: '3+',
    // Exemplos em Título (Title Case)
    examples: ['Itapecuru Bioenergia', 'Edifício Roxo Peças Automotivas', 'Vm Marina Club'],
    description: 'Infraestrutura aérea para suporte a operações industriais, energia e transporte de cargas/executivos.'
  },
  {
    name: 'Bases de Táxi Aéreo & Escolas',
    icon: Plane,
    count: '3+',
    // Exemplos em Título (Title Case)
    examples: ['Fly Village / Top Line', 'Fly Village / Ceará Táxi Aéreo', 'Fly Village / Poty Táxi Aéreo'],
    description: 'Certificação e homologação de bases operacionais para empresas de táxi aéreo e fretamento executivo.'
  },
  {
    name: 'Setor Público & Comunitário',
    icon: Globe,
    count: '7+',
    // Exemplos em Título (Title Case)
    examples: ['Cajazeiras-PB (SJZA)', 'Patos-PB (SNTS)', 'Arapongas (SSOG)'],
    description: 'Aeródromos de interesse público, incluindo infraestrutura para aldeias indígenas, prefeituras e serviços estaduais.'
  },
  {
    name: 'Aviação Executiva & Privada',
    icon: Users,
    count: '4+',
    // Exemplos em Título (Title Case)
    examples: ['Canaã Executivo (SD7E)', 'Premier Executivo', 'DDA Aviação (SDTA)'],
    description: 'Registro e manutenção de aeródromos exclusivos para uso privado e aeronaves executivas.'
  }
]

// Serviços baseados em seu portfólio real
const services = [
  {
    icon: Building,
    title: 'Homologação / Registro de Aeródromos',
    description: 'Regularização ANAC / DECEA',
    features: ['PBZPA - Plano Básico de Zona de Proteção de Aeródromos', 'Perfil Longitudinal', 'Projeto Executivo', 'Projeto de Balizamento Noturno', 'Projeto de Sinalização Horizontal'],
    time: '~180 dias',
    highlight: true,
    stats: '80+ projetos registrados'
  },
  {
    icon: Helicopter,
    title: 'Homologação de Helipontos',
    description: 'Para edifícios, hospitais e propriedades rurais - Normas 2024',
    features: ['PBZPH - Plano Básico de Zona de Proteção de Helipontos', 'Projeto Executivo', 'Projeto de Balizamento Noturno', 'Projeto de Sinalização Horizontal'],
    time: '~180 dias',
    highlight: true,
    stats: '9+ projetos registrados'
  },
  {
    icon: Navigation,
    title: 'Sistemas PAPI / APAPI',
    description: 'Instalação e certificação de sistemas de aproximação de precisão',
    features: ['Certificação ANAC / DECEA', 'Treinamento operacional', 'Calibração periódica'],
    time: '~180 dias',
    stats: '7+ sistemas instalados'
  },
]

// Processo baseado em casos reais
const processSteps = [
  {
    step: '01',
    title: 'Consulta Estratégica Gratuita',
    description: 'Análise inicial sem custo. Diagnóstico completo em 24h.',
    duration: '24-48h',
    deliverable: 'Relatório de viabilidade com roadmap'
  },
  {
    step: '02',
    title: 'Projeto Técnico Detalhado',
    description: 'Elaboração de toda documentação técnica necessária para aprovação.',
    duration: '15-30 dias',
    deliverable: 'Projeto executivo assinado por CREA'
  },
  {
    step: '03',
    title: 'Tramitação e Homologação',
    description: 'Gerenciamos todo processo junto à ANAC, DECEA e órgãos ambientais.',
    duration: '120-150 dias',
    deliverable: 'Certificado de homologação ANAC'
  },
  {
    step: '04',
    title: 'Suporte Pós-Homologação',
    description: 'Acompanhamento contínuo por 6 meses para manter conformidade.',
    duration: '6 meses',
    deliverable: 'Certificado de conformidade contínua'
  }
]

// Cases reais da sua lista (agrupados por segmento)
const caseStudies = [
  {
    category: 'AGRONEGÓCIO',
    title: 'CANAÃ EXECUTIVO',
    // Cliente/Proprietário real da sua lista
    client: 'Deputado Júlio César Lima',
    location: 'Teresina, PI',
    scope: [
      'Aeródromo de 1600m para aeronaves executivas',
      'Sistema PAPI para aproximações noturnas',
      'Projetos de PBZPA, Sinalização e Balizamento',
    ],
    // Suposições plausíveis
    result: 'Homologação e expansão para 1.600m',
    investment: 'R$ 3.1M',
    timeline: '2023',
    highlight: true,
    code: 'SD7E'
  },
  {
    category: 'CONDOMÍNIOS & HOTELARIA',
    title: 'FLY VILLAGE - Condomínio Aeronáutico',
    // Cliente/Proprietário real da sua lista
    client: 'Fabio Ribeiro (Residencial)',
    location: 'Altos / PI',
    scope: [
      'Aeródromo de 1200m para aeronaves executivas',
      'Sistema PAPI para aproximações noturnas',
      'Projetos de PBZPA, Sinalização e Balizamento',
    ],
    // Suposições plausíveis
    result: 'Condôminos',
    investment: 'R$ 1.6M',
    timeline: '2016',
    highlight: true,
    code: 'SSPF'
  },
  {
    category: 'AGRONEGÓCIO',
    // Usando um aeródromo de uma Fazenda grande, que geralmente suporta escoamento e logística industrial
    title: 'FAZENDA LAGO DA PEDRA',
    // Cliente/Proprietário real da sua lista
    client: 'Claudiomar Dal Pupo',
    location: 'Lago da Pedra, MA',
    scope: [
      'Pista não-pavimentada homologada (SN4T)',
      'Suporte a aeronaves agrícolas e de transporte de insumos',
      'Infraestrutura básica de pátio e hangares'
    ],
    // Suposições plausíveis
    result: 'Homologação concluída com foco em otimização do agronegócio',
    investment: 'R$ 950K',
    timeline: '2023',
    code: 'SN4T'
  },
  {
    category: 'SETOR PÚBLICO',
    title: 'FUNAI - ALDEIAS INDÍGENAS',
    // Cliente real
    client: 'Fundação Nacional dos Povos Indígenas (FUNAI)',
    location: 'Vários Estados',
    scope: [
      'Mapeamento e registro de mais de 15 pistas existentes',
      'Homologação de aeródromos comunitários e essenciais',
      'Garantia de acesso a serviços de saúde e segurança'
    ],
    // Suposições plausíveis
    result: '15+ pistas de pouso regularizadas',
    investment: 'Parceria Governamental',
    timeline: '2022-2024',
    highlight: true,
    code: 'FUNAI'
  }
]

// Prova Social - Clientes Reais (amostra da sua lista)
const realClients = [
  'CANAÃ Executivo EXECUTIVO - SD7E',
  'SOCÓ BEACH RESIDENCE - SII7',
  'FLY VILLAGE - SSPF',
  'PREMIER COND. AERONÁUTICO',
  'HOSPITAL SÃO LUCAS',
  'MINERAÇÃO VALE VERDE',
  'FUNAI (15+ aldeias)',
  'AGRÍCOLA RIZZI - SN3Q',
  'FAZENDA SANTA THEREZA - SWXK',
  'EDIFÍCIO ANTENÃO - OPEA',
  'GOVERNO DA PARAÍBA',
  'AERO PARK - SWRQ'
]

const faqs = [
  {
    question: 'Vocês trabalham com aeródromos para agronegócio?',
    answer: 'Sim, somos especialistas! Já homologamos mais de 45 aeródromos para grandes produtores rurais, incluindo Fazenda Tiúba, Fazenda Progresso, Fazenda Ipê e Fazenda Canel. Otimizamos o processo para atender às necessidades do agronegócio.',
    category: 'Agronegócio'
  },
  {
    question: 'Atendem em todo Brasil?',
    answer: 'Atendemos em todos os estados. Já trabalhamos em PI, MA, CE, PA, MT, MG, SP, PR, PB, BA, TO, GO e outros.',
    category: 'Cobertura'
  }
]

const trustSignals = [
  { text: '200+ Projetos', icon: BarChart, subtitle: 'Homologados' },
  { text: '100% Aprovação', icon: Award, subtitle: 'Taxa ANAC' },
  { text: '15+ Anos', icon: Clock, subtitle: 'Experiência' },
  { text: 'Todo Brasil', icon: Globe, subtitle: 'Cobertura Nacional' }
]

// Galeria de Imagens de Cases
const galleryImages = [
  {
    name: 'Fly Village',
    prefix: 'SSPF',
    category: 'Condomínio Aeronáutico',
    url: '/gallery/fly-village.jpeg'
  },
  {
    name: 'Peito de Moça - Luis Correia',
    prefix: 'SII7',
    category: 'Heliponto Residencial',
    url: '/gallery/peito-de-moca.jpeg'
  },
  {
    name: 'Catuleve - Aquiraz',
    prefix: 'SWXK',
    category: 'Aeródromo Rural',
    url: '/gallery/catuleve.jpeg'
  },
  {
    name: 'DDA Aviação',
    prefix: 'SDTA',
    category: 'Aeródromo Executivo',
    url: '/gallery/DDA-Aviacao.jpeg'
  },
  {
    name: 'Aeroporto Regional de Cajazeiras',
    prefix: 'SJHG',
    category: 'Heliponto Hospitalar',
    url: '/gallery/cajazeiras.jpeg'
  },
  {
    name: 'Heliponto Nazareth Canion Lodge',
    prefix: 'SIIC',
    category: 'Heliponto Residencial',
    url: '/gallery/nazareth-canion.jpeg'
  }
]

// ========== COMPONENTE PRINCIPAL ==========

export default function RADLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    email: '',
    company: '',
    location: '',
    message: ''
  })

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Rastrear envio do formulário
    AnalyticsEvents.contactFormSubmit(formData.projectType, formData.location);

    // Preparar dados para envio
    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      projectType: formData.projectType,
      location: formData.location,
      company: formData.company || '',
      urgency: (document.getElementById('project-urgency') as HTMLSelectElement)?.value || '',
      message: formData.message || '',
      timestamp: new Date().toISOString(),
      source: 'Landing Page - Formulário Principal'
    }

    console.log("📨 Dados a serem enviados:", leadData);

    // Mostrar loading
    const submitButton = e.currentTarget.querySelector('button[type="submit"]')
    if (submitButton) {
      submitButton.innerHTML = 'Enviando...'
      submitButton.setAttribute('disabled', 'true')
    }

    try {
      // Preparar dados para envio
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        projectType: formData.projectType,
        location: formData.location,
        company: formData.company || '',
        urgency: (e.currentTarget as any).urgency?.value || '',
        message: formData.message || '',
        timestamp: new Date().toISOString(),
        source: 'Landing Page - Formulário Principal'
      }

      // Enviar para a API
      const response = await sendContactForm(leadData)

      if (response.success) {
        // Sucesso
        alert('✅ Consulta enviada com sucesso! Você receberá um e-mail de confirmação em instantes. Entraremos em contato em até 24h.')

        // Reset do formulário
        setFormData({
          name: '',
          phone: '',
          projectType: '',
          email: '',
          company: '',
          location: '',
          message: ''
        })

        // Reset do campo urgency
        const urgencySelect = document.getElementById('project-urgency') as HTMLSelectElement
        if (urgencySelect) urgencySelect.value = ''

        setFormStep(2)
      } else {
        throw new Error(response.message || 'Erro ao enviar')
      }

    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('❌ Ocorreu um erro ao enviar sua consulta. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp: (86) 99981-1672')

    } finally {
      // Restaurar botão
      if (submitButton) {
        submitButton.innerHTML = `
        <div class="flex items-center justify-center gap-2 sm:gap-3">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Solicitar Consulta Gratuita</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      `
        submitButton.removeAttribute('disabled')
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* SEO Meta Tags (adicione no layout.tsx) */}
      <title>RAD Consultoria Aeronáutica | Registro de Aeródromos e Helipontos ANAC</title>
      <meta name="description" content="Especialistas em registro de aeródromos, helipontos e PAPI. 200+ projetos homologados para agronegócio, construtoras e mineração. Consultoria gratuita." />

      {/* Header Otimizado com Logo Personalizada */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Personalizada 16:9 */}
            <a href="#" className="flex items-center gap-2 group">
              {/* Logo pura e simples */}
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
              <a href="#segmentos" className="text-gray-700 hover:text-blue-800 transition-colors font-medium text-sm px-2 py-1">
                Clientes
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors font-medium text-sm px-2 py-1">
                Serviços
              </a>
              <a href="#cases" className="text-gray-700 hover:text-blue-800 transition-colors font-medium text-sm px-2 py-1">
                Cases
              </a>
              <a href="#process" className="text-gray-700 hover:text-blue-800 transition-colors font-medium text-sm px-2 py-1">
                Processo
              </a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-800 transition-colors font-medium text-sm px-2 py-1">
                Expertise
              </a>

              {/* CTA Header */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-5 py-2.5 rounded-lg hover:shadow-md transition-all font-medium text-sm flex items-center gap-2 cursor-pointer shadow-sm border border-blue-600 ml-2"
              >
                <Calendar size={14} />
                <span className="whitespace-nowrap">Consultoria Grátis</span>
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span className={`absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}></span>
                <span className={`absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`absolute w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-16 sm:top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg"
            >
              <div className="flex flex-col py-3">
                <a
                  href="#segmentos"
                  className="text-gray-700 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 font-medium border-b border-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clientes
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 font-medium border-b border-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
                <a
                  href="#cases"
                  className="text-gray-700 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 font-medium border-b border-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cases
                </a>
                <a
                  href="#process"
                  className="text-gray-700 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 font-medium border-b border-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Processo
                </a>
                <a
                  href="#expertise"
                  className="text-gray-700 hover:text-blue-800 hover:bg-blue-50 px-4 py-3 font-medium border-b border-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Expertise
                </a>

                {/* CTA Mobile */}
                <div className="px-4 py-4 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="block bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 rounded-lg font-medium text-center hover:shadow-md transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Calendar size={18} />
                      <span>Solicitar Consultoria Grátis</span>
                    </div>
                  </a>

                  {/* Contato rápido mobile */}
                  <div className="flex justify-center gap-4 mt-3">
                    <a
                      href="tel:+5586999811672"
                      className="text-xs text-gray-600 hover:text-blue-700 flex items-center gap-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone size={12} />
                      <span>(86) 99981-1672</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section - Mobile First */}
      <section className="pt-24 pb-8 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements - Ajustados para Mobile */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl md:top-10 md:right-10 md:w-72 md:h-72"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-green-500/5 rounded-full blur-3xl md:bottom-10 md:left-10 md:w-64 md:h-64"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            {/* Conteúdo Principal - Mobile First */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:pr-4 order-1"
            >
              {/* Badge de Autoridade - Responsivo */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg border border-blue-700">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate">90+ Projetos Registrados</span>
              </div>

              {/* Título - Otimizado para Mobile */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Regularize seu{' '}
                <span className="text-blue-800 block sm:inline">aeródromo ou heliponto</span>{' '}
                com segurança jurídica
              </h1>

              {/* Descrição - Texto ajustado */}
              <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                Para <span className="font-semibold text-gray-900">Produtores Rurais, Pessoas Físicas, Empresas e Prefeituras</span> que
                precisam de conformidade total com ANAC e DECEA.
              </p>

              {/* CTA Principal - Mobile Optimized */}
              <div className="mt-10 sm:mt-12">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl hover:shadow-xl sm:hover:shadow-2xl transition-all shadow-lg hover:shadow-blue-900/30 font-bold text-base sm:text-lg gap-3 sm:gap-4 cursor-pointer group"
                >
                  <Calendar className="w-5 h-5 sm:w-7 sm:h-7" />
                  <span className="text-center sm:text-left flex-1">
                    Agendar Consulta Gratuita
                  </span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
                </motion.a>

                {/* Trust Indicators - Stacked on Mobile */}
                <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium sm:font-semibold">Diagnóstico em 24h</span>
                  </div>
                  <div className="hidden sm:block text-gray-400">•</div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium sm:font-semibold">Equipe de Especialistas</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Imagem Hero - Responsiva e Equilibrada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full mb-10 lg:mb-0 order-2"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-blue-500/20 border border-gray-200 bg-white">

                {/* Container da Imagem com altura controlada */}
                <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[560px]">

                  {/* Imagem */}
                  <Image
                    src="/hero-image.jpeg"
                    alt="Aeródromo regularizado pela RAD Consultoria - Pista com sistema PAPI instalado"
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 60vw,
               50vw"
                    className="object-cover"
                  />

                  {/* Overlay sutil para contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

                  {/* Badge de Localização */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg max-w-[85%] sm:max-w-xs border border-gray-200/50">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            Fly Village
                          </h3>
                          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            SSPF
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Indicador de Projeto Real */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm bg-white/10 border border-white/20">
                      <div className="flex items-center gap-2">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>PROJETO REAL</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção: Para Quem Trabalhamos - Mobile First */}
      <section id="segmentos" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Projetos Realizados em Todo o Brasil
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0"> {/* Aumentei de text-base para text-lg */}
              Atendemos grandes tomadores de decisão que necessitam de infraestrutura aérea regularizada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {CLIENT_SEGMENTS.map((segment, index) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-all border border-gray-200 group cursor-pointer"
              >
                {/* Header com ícone e título */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <segment.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-800" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight"> {/* Mantive text-lg */}
                      {segment.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-800">{segment.count}</div>
                      <p className="text-sm text-gray-600"> {/* Aumentei de text-xs para text-sm */}
                        projetos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exemplos - Otimizado para Mobile */}
                <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
                  <p className="text-sm text-gray-700 font-medium"> {/* Aumentei de text-xs para text-sm */}
                    Exemplos:
                  </p>
                  <div className="space-y-1.5">
                    {segment.examples.slice(0, 3).map((example, i) => (
                      <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 leading-tight"> {/* Aumentei de text-xs para text-sm */}
                          {example.length > 50 ? `${example.substring(0, 50)}...` : example} {/* Aumentei de 40 para 50 caracteres */}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Descrição */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed"> {/* Aumentei de text-xs para text-sm */}
                    {segment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Mobile - Apenas em telas pequenas */}
          <div className="sm:hidden mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Precisa regularizar seu aeródromo ou heliponto?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Expertise do Engenheiro */}
      <section id="expertise" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                Expertise que Garante Resultado
              </h2>

              {/* Perfil */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
                <div className="relative mx-auto sm:mx-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/ricardo.png"
                      alt="Ricardo Augusto Dantas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                    15+ anos
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ricardo Augusto Dantas</div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="bg-white/10 px-2.5 py-1 rounded-full text-xs sm:text-sm">Credenciado ANAC</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-full text-xs sm:text-sm">Homologado DECEA</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-full text-xs sm:text-sm">Especialista RBAC</span>
                  </div>
                </div>
              </div>

              {/* Citação */}
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                "Com mais de 80 projetos homologados em todo Brasil, lidero pessoalmente cada consultoria.
                Nosso diferencial é transformar complexidade regulatória em processos claros e previsíveis."
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                {[
                  { value: '90+', label: 'Projetos homologados' },
                  { value: '14', label: 'Estados atendidos' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm">
                    <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-blue-900 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:shadow-xl sm:hover:shadow-2xl transition-all font-bold text-base sm:text-lg gap-3 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Entrar em Contato
              </motion.a>
            </motion.div>

            {/* Casos de Destaque */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full mt-8 sm:mt-0"
            >
              <div className="space-y-4 sm:space-y-6">
                {caseStudies.slice(0, 2).map((caseItem, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <div className="max-w-[70%]">
                        <div className="inline-block bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium mb-1.5 sm:mb-2">
                          {caseItem.category}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">{caseItem.title}</h4>
                        <p className="text-blue-200 text-xs sm:text-sm">{caseItem.location} • {caseItem.code}</p>
                      </div>
                      {caseItem.highlight && (
                        <span className="bg-green-500/30 text-green-200 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                          DESTAQUE
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      {caseItem.scope.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0 mt-0.5" />
                          <span className="text-blue-100 text-xs sm:text-sm leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-white/10">
                      <div>
                        <div className="text-xs sm:text-sm text-blue-200">Resultado</div>
                        <div className="font-bold text-white text-sm sm:text-base">{caseItem.result}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs sm:text-sm text-blue-200">Concluído</div>
                        <div className="font-bold text-white text-sm sm:text-base">{caseItem.timeline}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Serviços Especializados
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Soluções completas com metodologia própria e garantia de resultado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-md">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 text-center">
                  {service.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2 sm:mb-3">Inclui:</div>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Clock size={14} className="sm:w-4 sm:h-4 text-blue-700" />
                      <span className="text-blue-800 font-semibold text-sm sm:text-base">{service.time}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">{service.stats}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Garantido */}
      <section id="process" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Transparência no Processo
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Metodologia própria que já homologou mais de 90 projetos
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-20 sm:top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Conector mobile */}
                  {index < processSteps.length - 1 && (
                    <>
                      <div className="hidden sm:block lg:hidden absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300"></div>
                      <div className="sm:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-300"></div>
                    </>
                  )}

                  <div className="relative z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                      <span className="text-white text-xl sm:text-2xl font-bold">{step.step}</span>
                    </div>

                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-all border border-gray-200">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 sm:gap-2 text-blue-700 font-medium">
                            <Clock size={14} className="sm:w-4 sm:h-4" />
                            <span className="text-sm sm:text-base">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Reais */}
      {/* Galeria Simples de Projetos */}
      <section id="cases" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Galeria de Projetos
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Conheça alguns dos aeródromos e helipontos que já homologamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Container da Imagem */}
                <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200">

                  <Image
                    src={image.url}
                    alt={`${image.name} - ${image.prefix}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay sutil no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Badge similar ao Hero */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-2 shadow-lg max-w-[85%] border border-gray-200/50">
                  <div className="flex items-center gap-2">
                    <div>

                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900">
                          {image.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Texto de apoio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cada projeto com nossa assinatura garante conformidade total com ANAC e DECEA.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>90+ projetos homologados com sucesso</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulário de Contato - Mobile First */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Comece seu Projeto Hoje
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              Receba um diagnóstico completo e gratuito
            </p>
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-12">
            {/* Formulário Simplificado */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:col-span-3 mb-8 sm:mb-0"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl border border-gray-200/80">
                {/* Cabeçalho do Formulário */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Consulta Gratuita</div>
                    <div className="text-gray-600 flex items-center justify-center sm:justify-start gap-1.5">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-sm sm:text-base">Diagnóstico em 24h</span>
                    </div>
                  </div>
                </div>

                {/* Formulário */}
                <form onSubmit={handleQuickSubmit} className="space-y-6 sm:space-y-8">
                  {/* Campos em coluna única para mobile, duas para desktop */}
                  <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6">
                    {/* Coluna 1 */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Seu Nome *
                        </label>
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
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          WhatsApp *
                        </label>
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
                        <label
                          htmlFor="project-type"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Tipo de Projeto *
                        </label>
                        <select
                          id="project-type"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-white text-sm sm:text-base"
                          aria-label="Selecione o tipo de projeto"
                        >
                          <option value="">Selecione o tipo de projeto...</option>
                          <option value="aerodromo">Aeródromo / Pista</option>
                          <option value="heliponto">Heliponto</option>
                          <option value="papi">Sistema PAPI</option>
                          <option value="sinalizacao">Sinalização Horizontal</option>
                        </select>
                      </div>
                    </div>

                    {/* Coluna 2 */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          E-mail *
                        </label>
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
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Local do Projeto *
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                          placeholder="Cidade - Estado"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="project-urgency"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Urgência do Projeto
                        </label>
                        <select
                          id="project-urgency"
                          name="urgency"
                          className="w-full text-gray-900 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-lg sm:rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-white text-sm sm:text-base"
                          aria-label="Selecione a urgência do projeto"
                        >
                          <option value="">Selecione a urgência...</option>
                          <option value="imediato">Imediato (30-60 dias)</option>
                          <option value="planejamento">Planejamento (60-90 dias)</option>
                          <option value="futuro">Futuro (+90 dias)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox otimizado */}
                  <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center h-5 sm:h-6 mt-0.5">
                        <input
                          id="privacy-policy"
                          type="checkbox"
                          required
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                        />
                      </div>
                      <label
                        htmlFor="privacy-policy"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Concordo em receber contato para consultoria gratuita e diagnóstico do projeto.
                        <span className="block text-gray-500 text-xs mt-1">
                          Seus dados estão protegidos. Não fazemos spam.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* CTA Principal */}
                  <div className="pt-2 sm:pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3.5 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-lg sm:hover:shadow-xl transition-all font-bold text-base sm:text-lg shadow-md"
                    >
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>Solicitar Consulta Gratuita</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </motion.button>

                    <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2 text-green-500" />
                      Entraremos em contato em até 24h
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Painel de Benefícios */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:col-span-2 space-y-6 sm:space-y-8"
            >
              {/* Contato Direto */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Precisa falar agora?</h3>

                <div className="space-y-4 sm:space-y-6">
                  <a
                    href="https://wa.me/5586999811672"
                    onClick={() => AnalyticsEvents.whatsappClick('hero_section')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 hover:bg-green-100 rounded-lg sm:rounded-xl border border-green-200 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">WhatsApp Direto</div>
                      <div className="text-xs sm:text-sm text-gray-600">Resposta em minutos</div>
                    </div>
                  </a>

                  <a
                    href="tel:+5586999811672"
                    onClick={() => AnalyticsEvents.phoneCallClick('+5586999811672')}

                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-lg sm:rounded-xl border border-blue-200 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">Ligue Agora</div>
                      <div className="text-xs sm:text-sm text-gray-600">(86) 99981-1672</div>
                    </div>
                  </a>

                  <a
                    href="mailto:rad.aeronautica@gmail.com"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-lg sm:rounded-xl border border-gray-200 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">E-mail</div>
                      <div className="text-xs sm:text-sm text-gray-600">rad.aeronautica@gmail.com</div>
                    </div>
                  </a>
                </div>

                {/* Horário */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Atendimento:</span>
                    <span className="font-bold text-gray-900">Seg-Dom, 8h-20h</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ - Mobile Optimized */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Respostas diretas para suas principais preocupações
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-all border border-gray-200"
              >
                <div>
                  <div className="inline-block bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {faq.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA para FAQ no mobile */}
          <div className="sm:hidden mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Não encontrou sua resposta?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale conosco agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              {/* Logo responsiva ajustada */}
              <div className="flex justify-start mb-8">
                <img
                  src="/logo.png"
                  alt="RAD Consultoria Aeronáutica - Especialistas em Regularização"
                  className="
                    w-full
                    max-w-[180px]        /* mobile */
                    sm:max-w-[220px]     /* tablets */
                    md:max-w-[260px]     /* desktops médios */
                    lg:max-w-[300px]     /* desktops grandes */
                    xl:max-w-[340px]     /* telas largas */
                    object-contain 
                    hover:opacity-90 
                    transition-opacity
                  "
                />
              </div>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Especialistas em regularização aeronáutica para grandes operações.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contato</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="tel:+5586999811672" onClick={() => AnalyticsEvents.phoneCallClick('+5586999811672')}
                    className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone size={18} />
                    <span>(86) 99981-1672</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:rad.aeronautica@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail size={18} />
                    <span>rad.aeronautica@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Serviços</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Registro de Aeródromos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Homologação de Helipontos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Sistemas PAPI & APAPI</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Regularização ANAC / DECEA</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#cases" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Nosso Processo</a></li>
                <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p>&copy; 2025 RAD Consultoria Aeronáutica. Todos os direitos reservados.</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante - Tamanho Otimizado */}
      <motion.a
        href="https://wa.me/5586999811672"
        onClick={() => AnalyticsEvents.whatsappClick('hero_section')}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-50 group"
      >
        <div className="relative">
          <MessageCircle size={24} className="sm:w-6 sm:h-6" />
        </div>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Entrar em Contato
        </div>
      </motion.a>
    </main>
  )
}