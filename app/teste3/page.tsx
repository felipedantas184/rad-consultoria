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
  Zap
} from 'lucide-react'
import { useState } from 'react'

// Otimização: Separar dados em constantes para melhor manutenção
const CLIENT_SEGMENTS = [
  { name: 'Grandes Produtores Rurais', icon: Users, count: '80+' },
  { name: 'Construtoras e Incorporadoras', icon: Building, count: '45+' },
  { name: 'Empresas de Mineração', icon: Cpu, count: '30+' },
  { name: 'Operadoras de Aeroportos', icon: Globe, count: '25+' },
  { name: 'Hospitais de Referência', icon: Shield, count: '18+' },
  { name: 'Empresas de Óleo & Gás', icon: Zap, count: '22+' }
]

const services = [
  {
    icon: Building,
    title: 'Registro Completo de Aeródromos',
    description: 'Regularização ANAC para pistas particulares e públicas. Processo 100% garantido.',
    features: ['Projeto executivo', 'Licenciamento ambiental', 'Homologação DECEA'],
    time: '45-90 dias',
    highlight: true
  },
  {
    icon: Settings,
    title: 'Homologação de Helipontos',
    description: 'Para edifícios corporativos, hospitais e propriedades rurais. Normas atualizadas 2024.',
    features: ['Análise estrutural', 'Projeto luminotécnico', 'Laudo de segurança'],
    time: '30-60 dias'
  },
  {
    icon: Target,
    title: 'Sistemas PAPI & ILS',
    description: 'Certificação de sistemas de aproximação de precisão. Atendemos requisitos ICAO.',
    features: ['Certificação DECEA', 'Treinamento operacional', 'Manutenção preventiva'],
    time: '60-75 dias'
  },
  {
    icon: FileCheck,
    title: 'Due Diligence Aeronáutica',
    description: 'Auditoria completa para aquisições e fusões. Evite passivos regulatórios.',
    features: ['Análise documental', 'Due diligence técnica', 'Relatório de conformidade'],
    time: '15-30 dias',
    highlight: true
  },
  {
    icon: Shield,
    title: 'Gestão de Conformidade',
    description: 'Monitoramento contínuo para manter sua operação dentro das normas.',
    features: ['Auditorias periódicas', 'Atualização normativa', 'Suporte 24/7'],
    time: 'Contínuo'
  },
  {
    icon: Briefcase,
    title: 'Consultoria Estratégica',
    description: 'Planejamento de expansão e otimização de operações aéreas.',
    features: ['Plano de negócios', 'Análise de viabilidade', 'Estratégia regulatória'],
    time: 'Sob medida'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico Sem Custo',
    description: 'Análise gratuita da sua situação atual. Identificamos todas as exigências regulatórias.',
    duration: '24-48h',
    deliverable: 'Relatório de viabilidade'
  },
  {
    step: '02',
    title: 'Projeto e Documentação',
    description: 'Elaboramos toda documentação técnica necessária para aprovação.',
    duration: '15-30 dias',
    deliverable: 'Projeto executivo completo'
  },
  {
    step: '03',
    title: 'Aprovação e Homologação',
    description: 'Gerenciamos todo o processo junto à ANAC, DECEA e órgãos ambientais.',
    duration: '30-60 dias',
    deliverable: 'Certificado de homologação'
  },
  {
    step: '04',
    title: 'Suporte Pós-Homologação',
    description: 'Acompanhamento contínuo e atualizações para manter conformidade.',
    duration: 'Contínuo',
    deliverable: 'Gestão de compliance'
  }
]

const cases = [
  {
    title: 'Aeródromo Agronegócio São João',
    client: 'Grupo Agroindustrial',
    location: 'Ribeirão Preto - SP',
    scope: [
      'Pista 1.200m para aeronaves executivas',
      'Registro ANAC para operação particular',
      'Licenciamento ambiental completo'
    ],
    result: 'Operação regularizada em 67 dias',
    investment: 'R$ 2.8M',
    timeline: '2023'
  },
  {
    title: 'Heliponto Hospitalar Premium',
    client: 'Rede Hospitalar São Lucas',
    location: 'São Paulo - SP',
    scope: [
      'Homologação para operação aeromédica 24/7',
      'Projeto estrutural reforçado',
      'Sistema de emergência integrado'
    ],
    result: 'Aprovado para SAMU aeromédico',
    investment: 'R$ 1.2M',
    timeline: '2024',
    highlight: true
  },
  {
    title: 'Pista de Mineração Remota',
    client: 'Mineração Vale Verde',
    location: 'Pará - PA',
    scope: [
      'Pista 800m em área remota',
      'Sistema PAPI para condições adversas',
      'Infraestrutura completa'
    ],
    result: 'Operacional em 90 dias',
    investment: 'R$ 4.5M',
    timeline: '2023'
  }
]

const faqs = [
  {
    question: 'Qual o primeiro passo para regularizar um aeródromo?',
    answer: 'Agende uma consulta estratégica gratuita. Em 24h, nosso engenheiro sênior entrega um diagnóstico completo com roadmap, prazos e investimento estimado.',
    category: 'Processo'
  },
  {
    question: 'Quanto custa o registro de um heliponto corporativo?',
    answer: 'Os valores variam entre R$ 80.000 e R$ 250.000, dependendo da complexidade estrutural, localização e necessidade de estudos ambientais. Oferecemos garantia de aprovação.',
    category: 'Investimento'
  },
  {
    question: 'Vocês garantem a aprovação junto à ANAC?',
    answer: 'Sim, temos 100% de aprovação em mais de 200 projetos. Trabalhamos com metodologia própria que antecipa e resolve todas as objeções técnicas antes da submissão.',
    category: 'Garantia'
  },
  {
    question: 'Atendem emergências? Preciso regularizar rápido.',
    answer: 'Sim, temos processo acelerado para situações urgentes. Já homologamos projetos em 30 dias para clientes com necessidade imediata de operação.',
    category: 'Prazos'
  }
]

const trustSignals = [
  { text: 'Credenciados ANAC', icon: Award },
  { text: '15+ anos experiência', icon: Clock },
  { text: '200+ projetos', icon: BarChart },
  { text: 'Todo Brasil', icon: Globe }
]

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
    // Envio otimizado - apenas campos essenciais
    const quickData = {
      name: formData.name,
      phone: formData.phone,
      projectType: formData.projectType
    }
    
    console.log('Lead rápido captado:', quickData)
    
    // Simulação de envio
    alert('✅ Consulta agendada! Nosso engenheiro entrará em contato em até 24h.')
    
    // Reset do formulário rápido
    setFormData({...formData, name: '', phone: '', projectType: ''})
    setFormStep(1)
  }

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário completo:', formData)
    alert('📋 Orçamento solicitado com sucesso! Enviaremos a proposta em até 48h.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Otimizado */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo com Credibilidade */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">RAD</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  RAD Aeronáutica
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Credenciado ANAC</span>
                </div>
                <div className="text-sm text-gray-600 -mt-1">Consultoria & Engenharia</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#segmentos" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Para Quem
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Serviços
              </a>
              <a href="#process" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Processo
              </a>
              <a href="#cases" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Cases
              </a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Expertise
              </a>
              
              {/* CTA Header */}
              <motion.a
                href="#quick-contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-medium text-sm flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar size={16} />
                Consulta Grátis
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-6 shadow-lg">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#segmentos" className="text-gray-700 hover:text-blue-700 py-3 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                  Para Quem
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-700 py-3 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                  Serviços
                </a>
                <a href="#process" className="text-gray-700 hover:text-blue-700 py-3 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                  Processo
                </a>
                <a href="#cases" className="text-gray-700 hover:text-blue-700 py-3 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                  Cases
                </a>
                <a href="#expertise" className="text-gray-700 hover:text-blue-700 py-3 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                  Expertise
                </a>
                <motion.a
                  href="#quick-contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all font-medium mt-4 cursor-pointer text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar size={18} className="inline mr-2" />
                  Consulta Gratuita
                </motion.a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section Otimizada */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        {/* Elementos de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge de Autoridade */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <Award className="w-5 h-5" />
                <span>Credenciados ANAC • DECEA • ANATEL</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Regularize seu aeródromo ou heliponto com{' '}
                <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                  segurança jurídica total
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-700 leading-relaxed">
                Para <span className="font-semibold text-gray-900">Grandes Produtores Rurais, Construtoras, Hospitais e Empresas</span> que necessitam 
                operar com conformidade regulatória. Elimine riscos de multas e garanta operações 100% legais.
              </p>

              {/* CTA Principal Transformado */}
              <div className="mt-12">
                <motion.a
                  href="#quick-contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white px-12 py-6 rounded-2xl hover:shadow-2xl transition-all shadow-xl hover:shadow-blue-900/30 font-bold text-lg gap-4 cursor-pointer group"
                >
                  <Calendar className="w-7 h-7" />
                  Agendar Consulta Estratégica Gratuita
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </motion.a>
                
                <div className="mt-6 text-base text-gray-600 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Diagnóstico em 24h</span>
                  </div>
                  <div className="hidden sm:block text-gray-400">•</div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Garantia de aprovação</span>
                  </div>
                  <div className="hidden sm:block text-gray-400">•</div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Engenheiro sênior dedicado</span>
                  </div>
                </div>
              </div>

              {/* Prova Social - Selos de Credibilidade */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {trustSignals.map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{item.text.split(' ')[0]}</div>
                        <div className="text-sm text-gray-600">{item.text.split(' ').slice(1).join(' ')}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white p-8 shadow-2xl shadow-blue-500/20 border border-gray-200 overflow-hidden">
                {/* Badge no Card */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
                  ✅ PROJETO APROVADO
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8 h-96 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Elementos decorativos */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full -translate-x-20 -translate-y-20"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-500/10 rounded-full translate-x-24 translate-y-24"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-28 h-28 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                      <Building className="w-14 h-14 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">Aeródromo Agronegócio</p>
                    <p className="text-gray-700 mb-6">Pista 1.200m • ANAC Regularizado • Operação Segura</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">67</div>
                        <div className="text-sm text-gray-600">dias para homologação</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">100%</div>
                        <div className="text-sm text-gray-600">conformidade ANAC</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full">
                      <MapPin className="w-4 h-4 text-blue-700" />
                      <span className="font-medium">Mato Grosso - MT</span>
                    </div>
                  </div>
                </div>
                
                {/* Rodapé do Card */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Cliente do Setor</div>
                      <div className="text-xs text-gray-600">Agronegócio</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Investimento</div>
                    <div className="text-lg font-bold text-blue-800">R$ 2.8M</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção: Para Quem (Segmentação Clara) */}
      <section id="segmentos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especialistas para Grandes Operações
            </h2>
            <p className="text-xl text-gray-600">
              Atendemos os principais tomadores de decisão do setor aéreo nacional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLIENT_SEGMENTS.map((segment, index) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <segment.icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {segment.name}
                    </h3>
                    <div className="text-3xl font-bold text-blue-800 mb-1">{segment.count}</div>
                    <p className="text-gray-600 text-sm">
                      projetos entregues
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Regularização completa</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Due diligence técnica</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Gestão de compliance</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Expertise (Responsável Técnico - Movida para Cima) */}
      <section id="expertise" className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Star className="w-4 h-4" />
                Responsável Técnico
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Expertise que Faz a Diferença
              </h2>
              
              <div className="flex items-center gap-8 mb-10">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    15+ anos
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Ricardo Augusto Dantas</div>
                  <div className="text-blue-200 mb-4">Engenheiro Aeronáutico Sênior</div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">CREA-SP 123456</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">ANAC Credenciado</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-sm">DECEA Homologado</span>
                  </div>
                </div>
              </div>

              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Com mais de 200 projetos homologados em todo Brasil, lidero pessoalmente cada consultoria. 
                Minha expertise garante que seu projeto avance com agilidade e segurança jurídica total.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { value: '100%', label: 'Taxa de aprovação ANAC' },
                  { value: 'R$ 500M+', label: 'Em projetos gerenciados' },
                  { value: '25', label: 'Estados atendidos' },
                  { value: '0', label: 'Processos judiciais' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <motion.a
                href="#quick-contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-xl hover:shadow-2xl transition-all font-bold text-lg gap-3 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Falar Diretamente com o Engenheiro
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Especializações Exclusivas</h3>
              
              <div className="space-y-6">
                {[
                  'Regulamento Brasileiro da Aviação Civil (RBAC)',
                  'Normas DECEA para aeródromos e helipontos',
                  'Licenciamento ambiental para infraestrutura aeroportuária',
                  'Due diligence técnica em aquisições',
                  'Gestão de crise regulatória',
                  'Processos acelerados de homologação'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-blue-100 font-medium">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl border border-green-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-300" />
                  <div className="font-bold text-lg">Garantia RAD</div>
                </div>
                <p className="text-green-100 text-sm">
                  Se seu projeto não for aprovado pelos órgãos regulatórios, devolvemos 100% do investimento. 
                  Trabalhamos apenas com cases de sucesso garantido.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section Otimizada */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Premium para Operações de Alto Nível
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas com garantia de resultado e suporte dedicado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 ${service.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-200'} group cursor-pointer`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS PROCURADO
                  </div>
                )}
                
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6 mx-auto">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-blue-700 font-medium">
                    <Clock size={16} />
                    {service.time}
                  </div>
                  <button className="text-blue-700 hover:text-blue-900 font-semibold text-sm flex items-center gap-1 group">
                    Detalhes
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Otimizada */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo Garantido de Homologação
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia própria com 100% de aprovação junto aos órgãos regulatórios
            </p>
          </motion.div>

          <div className="relative">
            {/* Linha de conexão */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Círculo conectado */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-white text-2xl font-bold">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                    )}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-blue-700 font-medium mb-3">
                      <Clock size={16} />
                      {step.duration}
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <div className="text-sm font-medium text-blue-800">Entrega:</div>
                      <div className="text-sm text-blue-700">{step.deliverable}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section Otimizada */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cases Reais de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Projetos entregues para líderes do mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${caseItem.highlight ? 'from-blue-50 to-white' : 'from-gray-50 to-white'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border ${caseItem.highlight ? 'border-blue-200' : 'border-gray-200'}`}
              >
                {caseItem.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg">
                    DESTAQUE
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-blue-700 mb-2">{caseItem.timeline}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {caseItem.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{caseItem.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={16} />
                    {caseItem.location}
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-sm font-medium text-gray-700 mb-3">Escopo do Projeto:</div>
                  <ul className="space-y-3">
                    {caseItem.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                    <div className="text-green-800 font-bold text-lg mb-1">✅ {caseItem.result}</div>
                    <div className="text-green-700 text-sm">Projeto entregue dentro do prazo</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Investimento Total</div>
                      <div className="text-xl font-bold text-blue-800">{caseItem.investment}</div>
                    </div>
                    <button className="text-blue-700 hover:text-blue-900 font-semibold text-sm flex items-center gap-1 group">
                      Ver detalhes
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário Rápido de Contato (Lead Magnet) */}
      <section id="quick-contact" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agende Sua Consulta Estratégica Gratuita
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Em 24h, você recebe um diagnóstico completo do seu projeto com roadmap, prazos e investimento estimado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário Rápido */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Consulta em 3 minutos</div>
                  <div className="text-sm text-gray-600">Engenheiro sênior dedicado</div>
                </div>
              </div>

              {formStep === 1 ? (
                <form onSubmit={handleQuickSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Como gostaria de ser chamado"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp para Contato *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Projeto *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecione seu projeto...</option>
                      <option value="aerodromo">Aeródromo / Pista de Pouso</option>
                      <option value="heliponto">Heliponto Corporativo</option>
                      <option value="papi">Sistema PAPI / ILS</option>
                      <option value="regularizacao">Regularização de Operação</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm text-gray-600">
                      Concordo em receber o diagnóstico gratuito
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg cursor-pointer"
                  >
                    Agendar Consulta Grátis
                  </motion.button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Protegido por nossa política de privacidade. Sem spam.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Consulta Agendada!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Em até 24h, nosso engenheiro sênior entrará em contato no WhatsApp para sua consulta estratégica gratuita.
                  </p>
                  <button
                    onClick={() => setFormStep(1)}
                    className="text-blue-700 hover:text-blue-900 font-semibold"
                  >
                    Agendar outra consulta
                  </button>
                </div>
              )}
            </motion.div>

            {/* Benefícios da Consulta */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">O Que Você Recebe:</h3>
                <ul className="space-y-6">
                  {[
                    'Diagnóstico completo da sua situação regulatória',
                    'Roadmap com prazos realistas de homologação',
                    'Estimativa de investimento detalhada',
                    'Identificação de riscos e oportunidades',
                    'Estratégia personalizada para seu segmento'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testemunho */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-bold text-gray-900">Carlos Mendonça</div>
                    <div className="text-sm text-gray-600">Diretor - Grupo Agroindustrial</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "A RAD transformou nosso aeródromo em 67 dias. O processo que imaginávamos burocrático foi ágil e transparente. Recomendo para qualquer operação séria."
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section Otimizada */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas de Grandes Tomadores de Decisão
            </h2>
            <p className="text-xl text-gray-600">
              Respostas diretas para suas principais preocupações
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {faq.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <ChevronRight className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Não encontrou sua resposta?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nossos engenheiros estão prontos para responder qualquer pergunta técnica específica do seu projeto.
              </p>
              <motion.a
                href="#quick-contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold gap-3 cursor-pointer"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com Especialista Agora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Otimizado */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">RAD</span>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold">RAD Aeronáutica</div>
                  <div className="text-sm text-gray-400 -mt-1">Consultoria & Engenharia</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Especialistas em regularização aeronáutica para grandes operações. 
                Credenciados ANAC com 100% de aprovação em mais de 200 projetos.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Credenciado ANAC</div>
                  <div className="text-gray-400 text-xs">Portaria 1234/2023</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contato Direto</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="tel:+5511999999999" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="font-medium">(11) 99999-9999</div>
                      <div className="text-sm">WhatsApp Prioritário</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:engenharia@radaeronautica.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-medium">engenharia@radaeronautica.com</div>
                      <div className="text-sm">Engenheiro responsável</div>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-medium">São Paulo - SP</div>
                    <div className="text-sm">Atendimento em todo Brasil</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Serviços Premium</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Registro de Aeródromos
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Homologação de Helipontos
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Sistemas PAPI & ILS
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Due Diligence Aeronáutica
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Gestão de Conformidade
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Recursos Exclusivos</h3>
              <div className="space-y-4">
                <a href="#" className="block bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 transition-colors group">
                  <div className="text-sm text-gray-400 mb-1">E-Book Gratuito</div>
                  <div className="font-medium group-hover:text-blue-400 transition-colors">
                    Guia de Regularização ANAC 2024
                  </div>
                </a>
                <a href="#" className="block bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 transition-colors group">
                  <div className="text-sm text-gray-400 mb-1">Calculadora</div>
                  <div className="font-medium group-hover:text-blue-400 transition-colors">
                    Estimativa de Prazos e Custos
                  </div>
                </a>
                <a href="#" className="block bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 transition-colors group">
                  <div className="text-sm text-gray-400 mb-1">Checklist</div>
                  <div className="font-medium group-hover:text-blue-400 transition-colors">
                    Documentação Necessária
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p>&copy; 2024 RAD Aeronáutica Consultoria & Engenharia. Todos os direitos reservados.</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
                <a href="#" className="hover:text-white transition-colors">Mapa do Site</a>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              CREA-SP 123456 • CNPJ 12.345.678/0001-90 • Credenciamento ANAC Portaria 1234/2023
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button Otimizado */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all z-50 group"
      >
        <div className="relative">
          <MessageCircle size={28} />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            1
          </div>
        </div>
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Falar com Engenheiro
        </div>
      </motion.a>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-40 opacity-70 hover:opacity-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-6 h-6 rotate-90" />
      </motion.button>
    </main>
  )
}