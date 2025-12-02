"use client"

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  FileText,
  Settings,
  Award,
  Clock,
  Users,
  Building,
  Upload,
  Download,
  MessageCircle,
  CheckCircle,
  Calendar
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Building,
    title: 'Registro de Aeródromos',
    description: 'Regularização completa junto à ANAC para operação segura e legal'
  },
  {
    icon: Settings,
    title: 'Registro de Helipontos',
    description: 'Homologação de helipontos públicos e privados conforme normas DECEA'
  },
  {
    icon: Award,
    title: 'Homologação de PAPI',
    description: 'Projeto e certificação de sistemas de aproximação por luzes'
  },
  {
    icon: FileText,
    title: 'Levantamentos Técnicos',
    description: 'Análise in loco e elaboração de relatórios técnicos detalhados'
  },
  {
    icon: Users,
    title: 'Consultoria Regulatória',
    description: 'Assessoria em processos ANAC, DECEA, ANATEL e órgãos ambientais'
  },
  {
    icon: Building,
    title: 'Projetos de Infraestrutura',
    description: 'Desenvolvimento de projetos executivos para pistas e estruturas'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico Inicial',
    description: 'Análise técnica da situação atual e requisitos regulatórios',
    duration: '3-5 dias'
  },
  {
    step: '02',
    title: 'Projeto Técnico',
    description: 'Elaboração de documentação e projetos conforme normas',
    duration: '15-30 dias'
  },
  {
    step: '03',
    title: 'Aprovação e Homologação',
    description: 'Tramitação junto aos órgãos competentes',
    duration: '30-60 dias'
  },
  {
    step: '04',
    title: 'Entrega e Operação',
    description: 'Liberação para operação e suporte pós-homologação',
    duration: '5-10 dias'
  }
]

const cases = [
  {
    title: 'Aeródromo Fazenda Santa Maria',
    location: 'Ribeirão Preto - SP',
    scope: [
      'Registro ANAC para operação particular',
      'Projeto de pista 800m',
      'Homologação DECEA'
    ],
    result: 'Operação regularizada em 45 dias'
  },
  {
    title: 'Heliponto Empresarial Alphaville',
    location: 'Barueri - SP',
    scope: [
      'Licenciamento heliponto corporativo',
      'Projeto de plataforma',
      'Aprovação ANAC/DECEA'
    ],
    result: 'Homologado para operação comercial'
  },
  {
    title: 'Sistema PAPI Sítio Aerodesportivo',
    location: 'Sorocaba - SP',
    scope: [
      'Projeto sistema de aproximação',
      'Certificação luminotécnica',
      'Treinamento operacional'
    ],
    result: 'Certificação aprovada em 30 dias'
  }
]

const faqs = [
  {
    question: 'Qual o prazo médio para registro de um aeródromo?',
    answer: 'O processo completo leva em média 60-90 dias, dependendo da complexidade do projeto e da agilidade na entrega de documentação.'
  },
  {
    question: 'Quais os custos envolvidos?',
    answer: 'Os valores variam conforme o tipo de serviço e complexidade. Oferecemos orçamento personalizado sem compromisso após análise inicial.'
  },
  {
    question: 'Preciso de algum documento específico para iniciar?',
    answer: 'Iniciamos com a localização e características básicas. Orientamos sobre toda documentação necessária durante o processo.'
  },
  {
    question: 'Atendem em todo território nacional?',
    answer: 'Sim, atendemos projetos em todos os estados brasileiros, com visitas técnicas quando necessário.'
  }
]

export default function RADLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de envio - integrar com API posteriormente
    console.log('Dados do formulário:', formData)
    alert('Orçamento solicitado com sucesso! Entraremos em contato em até 48h.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RAD</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-900">RAD Consultoria</div>
                <div className="text-sm text-gray-500 -mt-1">Aeronáutica</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Serviços
              </a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Processos
              </a>
              <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Cases
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                FAQ
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contato
              </a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
              >
                Solicitar Orçamento
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-6">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Serviços
                </a>
                <a href="#process" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Processos
                </a>
                <a href="#cases" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Cases
                </a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Contato
                </a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar Orçamento
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - OTIMIZADA */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge de Autoridade */}
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Especialistas Credenciados ANAC & DECEA
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Regularize seu aeródromo ou heliponto com{' '}
                <span className="text-blue-700 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  segurança jurídica e agilidade
                </span>
              </h1>

              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                Para <span className="font-semibold text-gray-900">Grandes Produtores Rurais, Construtoras e Empresas</span> que necessitam regularizar suas operações aéreas.
                Evite multas da ANAC e garanta operações 100% seguras e legais.
              </p>

              {/* CTA Principal Transformado */}
              <div className="mt-10">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-800 text-white px-10 py-5 rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-lg hover:shadow-xl font-semibold text-lg gap-3 cursor-pointer"
                >
                  <Calendar className="w-6 h-6" />
                  Agendar Consulta Estratégica Gratuita
                  <ArrowRight size={22} />
                </motion.a>

                <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-medium">Diagnóstico preliminar em 24h</span>
                  <span className="mx-2">•</span>
                  <span>Conversa direta com nosso engenheiro sênior</span>
                </div>
              </div>

              {/* Prova Social - Selos de Credibilidade */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { label: '200+ Projetos', sub: 'Regularizados' },
                  { label: '15+ Anos', sub: 'Experiência' },
                  { label: '100% Aprovação', sub: 'ANAC/DECEA' },
                  { label: 'Todo Brasil', sub: 'Atendimento' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">{item.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.sub}</div>
                  </div>
                ))}
              </motion.div>

              {/* Logos de Clientes (Placeholder - adicionar logos reais depois) */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Confiado por:</p>
                <div className="flex items-center gap-8 opacity-70">
                  <div className="h-8 w-32 bg-gray-200 rounded"></div>
                  <div className="h-8 w-32 bg-gray-200 rounded"></div>
                  <div className="h-8 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image - Mantida com pequenas melhorias */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl shadow-blue-500/20 border border-gray-200 overflow-hidden">
                {/* Badge no Card */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  PROJETO APROVADO
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-6 h-80 flex items-center justify-center relative">
                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Building className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-800 font-semibold text-lg">Aeródromo Agronegócio</p>
                    <p className="text-gray-600 mt-2">Pista 1.200m • Registro ANAC • Homologado</p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Mato Grosso - MT</span>
                    </div>
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-12 -translate-y-12"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500/10 rounded-full translate-x-12 translate-y-12"></div>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-6 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span>60 dias para homologação</span>
                  </div>
                  <div className="text-blue-700 font-semibold">
                    R$ 2.8M investidos
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas em consultoria aeronáutica para sua operação
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group border border-gray-200"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona Nosso Processo
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia comprovada para garantir agilidade e conformidade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
                  <Clock size={16} />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Projetos entregues com excelência em todo território nacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-xl h-48 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Building className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Projeto {caseItem.title.split(' ')[0]}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {caseItem.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <MapPin size={16} />
                  {caseItem.location}
                </div>
                <ul className="space-y-2 mb-4">
                  {caseItem.scope.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">
                    ✅ {caseItem.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Responsável Técnico
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Ricardo Augusto Dantas</div>
                  <div className="text-blue-100">Engenheiro Aeronáutico</div>
                </div>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Com mais de 15 anos de experiência em consultoria aeronáutica, já atendei mais de 200 projetos
                em todo Brasil. Especialista em processos regulatórios junto à ANAC, DECEA e órgãos correlatos.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium cursor-pointer"
              >
                Agendar Conversa
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '200+', label: 'Projetos Atendidos' },
                { number: '15+', label: 'Anos de Experiência' },
                { number: '25+', label: 'Estados Atendidos' },
                { number: '100%', label: 'Projetos Aprovados' }
              ].map((stat, index) => (
                <div key={stat.label} className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section 
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Checklist Gratuito
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Baixe nosso checklist completo de documentação para registro de aeródromos e evite erros comuns no processo.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <Download size={20} />
              Baixar Checklist
            </motion.button>
          </motion.div>
        </div>
      </section>*/}

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-xl text-gray-600">
              Entre em contato para uma consultoria personalizada
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa / Projeto
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Nome da empresa ou projeto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Projeto *
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Selecione...</option>
                  <option value="aerodromo">Aeródromo</option>
                  <option value="heliponto">Heliponto</option>
                  <option value="papi">PAPI</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Localização (Cidade/UF) *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="São Paulo - SP"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload de Documentos (Opcional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Clique para upload ou arraste arquivos aqui</p>
                <p className="text-sm text-gray-500 mt-1">Plantas, fotos, documentos (até 10MB)</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Descreva brevemente seu projeto ou dúvidas..."
              ></textarea>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                required
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">
                Concordo com a política de privacidade e receber comunicações
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowRight size={20} />
              Solicitar Orçamento — Retorno em 48h
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RAD</span>
                </div>
                <div className="ml-3">
                  <div className="text-xl font-bold">RAD Consultoria</div>
                  <div className="text-sm text-gray-400 -mt-1">Aeronáutica</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Especialistas em consultoria aeronáutica e regularização de aeródromos,
                helipontos e sistemas de aproximação.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contato@radconsultoria.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>São Paulo - SP</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Registro de Aeródromos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Registro de Helipontos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Homologação PAPI</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Consultoria Regulatória</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RAD Consultoria Aeronáutica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={24} />
      </motion.a>
    </main>
  )
}