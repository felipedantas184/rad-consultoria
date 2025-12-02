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
  Trees,
  Home,
  Factory,
  Landmark,
  Coffee,
  Warehouse,
  Plane
} from 'lucide-react'
import { useState } from 'react'

// DADOS REAIS DO PORTFOLIO
const REAL_CASES = [
  {
    title: 'Aeródromo ADÃO VERÍSSIMO',
    location: 'Itinga do Maranhão, MA',
    type: 'Aeródromo',
    client: 'Produtor Rural',
    timeline: '45 dias',
    highlight: true,
    region: 'Nordeste'
  },
  {
    title: 'Aeródromo AERO PARK',
    location: 'Teresina, PI',
    type: 'Aeródromo',
    client: 'Empresário',
    timeline: '60 dias',
    region: 'Nordeste'
  },
  {
    title: 'PAPI PREFEITURA DE ARAPONGAS',
    location: 'Arapongas, PR',
    type: 'PAPI',
    client: 'Prefeitura Municipal',
    timeline: '30 dias',
    highlight: true,
    region: 'Sul'
  },
  {
    title: 'Heliponto SOCÓ BEACH RESIDENCE',
    location: 'Cajueiro da Praia, PI',
    type: 'Heliponto',
    client: 'Residencial Premium',
    timeline: '40 dias',
    region: 'Nordeste'
  },
  {
    title: 'Aeródromo FAZENDA VONTOBEL',
    location: 'Brejo, MA',
    type: 'Aeródromo',
    client: 'Agronegócio',
    timeline: '55 dias',
    region: 'Nordeste'
  },
  {
    title: 'PAPI GOVERNO DA PARAÍBA',
    location: 'Cajazeiras, PB',
    type: 'PAPI',
    client: 'Governo Estadual',
    timeline: '35 dias',
    region: 'Nordeste'
  }
]

const REGIONAL_EXPERTISE = [
  { state: 'Maranhão (MA)', count: 28, icon: Trees },
  { state: 'Piauí (PI)', count: 22, icon: Coffee },
  { state: 'Pará (PA)', count: 8, icon: Warehouse },
  { state: 'Mato Grosso (MT)', count: 6, icon: Factory },
  { state: 'Bahia (BA)', count: 5, icon: Globe },
  { state: 'Outros Estados', count: 20, icon: MapPin }
]

const CLIENT_SEGMENTS = [
  { 
    name: 'Grandes Fazendas e Agronegócio', 
    icon: Trees, 
    count: '60+',
    description: 'Aeródromos para gestão de propriedades rurais',
    examples: ['Fazenda Vontobel', 'Fazenda Canãa', 'Fazenda Santa Thereza']
  },
  { 
    name: 'Prefeituras e Governos', 
    icon: Landmark, 
    count: '15+',
    description: 'Infraestrutura aeroportuária pública',
    examples: ['Pref. de Arapongas', 'Gov. da Paraíba', 'FUNAI']
  },
  { 
    name: 'Condomínios e Empreendimentos', 
    icon: Home, 
    count: '15+',
    description: 'Helipontos e aeródromos residenciais',
    examples: ['Fly Village', 'Socó Beach', 'Premier Condomínio']
  },
  { 
    name: 'Usinas e Empresas', 
    icon: Factory, 
    count: '10+',
    description: 'Infraestrutura para logística corporativa',
    examples: ['Itapecuru Bioenergia', 'Usinas de Energia', 'Mineração']
  }
]

const services = [
  {
    icon: Building,
    title: 'Aeródromos Rurais',
    description: 'Registro ANAC para fazendas e propriedades rurais',
    features: ['Projetos para agronegócio', 'Pistas 800-1600m', 'Regularização completa'],
    time: '45-90 dias',
    highlight: true
  },
  {
    icon: Settings,
    title: 'Helipontos Corporativos',
    description: 'Homologação para edifícios, hotéis e empreendimentos',
    features: ['Topo de edifícios', 'Áreas empresariais', 'Licenciamento municipal'],
    time: '30-60 dias'
  },
  {
    icon: Target,
    title: 'Sistemas PAPI',
    description: 'Instalação e certificação de sistemas de aproximação',
    features: ['Certificação DECEA', 'Para aeródromos públicos', 'Manutenção'],
    time: '30-45 dias',
    highlight: true
  },
  {
    icon: FileCheck,
    title: 'Regularização ANAC',
    description: 'Legalização de aeródromos já existentes',
    features: ['Documentação retroativa', 'Adequação às normas', 'Inspeções'],
    time: '60-120 dias'
  },
  {
    icon: Shield,
    title: 'Consultoria para Prefeituras',
    description: 'Assessoria técnica para municípios',
    features: ['Projetos públicos', 'Licitações', 'Gestão aeroportuária'],
    time: 'Sob medida'
  },
  {
    icon: Users,
    title: 'Treinamento e Capacitação',
    description: 'Para operadores e gestores de aeródromos',
    features: ['Normas ANAC/DECEA', 'Operação segura', 'Manutenção'],
    time: 'Personalizado'
  }
]

export default function RADLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    locationState: '',
    email: '',
    message: ''
  })

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead captado:', formData)
    alert('✅ Obrigado! Um de nossos especialistas em ' + formData.locationState + ' entrará em contato em até 24h.')
    setFormData({...formData, name: '', phone: '', projectType: ''})
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header com Foco Nordeste */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo com Especialização */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-md">
                <Plane className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  RAD Engenharia Aeronáutica
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Especialista Nordeste</span>
                </div>
                <div className="text-sm text-gray-600 -mt-1">Aeródromos • Helipontos • PAPI</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#expertise" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Especialização
              </a>
              <a href="#segmentos" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Clientes
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Serviços
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Portfólio
              </a>
              <a href="#regional" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-sm">
                Atuação
              </a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-medium text-sm flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar size={16} />
                Consulta Nordeste
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
        </div>
      </header>

      {/* Hero Section - Foco Agronegócio Nordeste */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge de Especialização Regional */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <MapPin className="w-5 h-5" />
                <span>ESPECIALISTA EM REGISTRO DE AERÓDROMOS</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Aeródromos para o{' '}
                <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                  Agronegócio do Nordeste
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Mais de 80 aeródromos homologados</span> no Maranhão, Piauí, Pará e região. 
                Regularizamos sua pista de pouso com agilidade e conhecimento local da ANAC/DECEA.
              </p>

              {/* Dados Reais de Atuação */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                  <div className="text-3xl font-bold text-blue-800">28</div>
                  <div className="text-gray-700 font-medium">Aeródromos no MA</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                  <div className="text-3xl font-bold text-blue-800">22</div>
                  <div className="text-gray-700 font-medium">Aeródromos no PI</div>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="mt-12">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white px-12 py-6 rounded-2xl hover:shadow-2xl transition-all shadow-xl hover:shadow-blue-900/30 font-bold text-lg gap-4 cursor-pointer group"
                >
                  <Calendar className="w-7 h-7" />
                  Consulta para seu Estado
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </motion.a>
                
                <div className="mt-6 text-base text-gray-600 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Especialista em Nordeste</span>
                  </div>
                  <div className="hidden sm:block text-gray-400">•</div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Conhecemos a ANAC regional</span>
                  </div>
                </div>
              </div>

              {/* Estados Atendidos */}
              <div className="mt-12">
                <p className="text-sm text-gray-500 mb-3">Atendimento direto em:</p>
                <div className="flex flex-wrap gap-3">
                  {['Maranhão', 'Piauí', 'Pará', 'Ceará', 'Bahia', 'Tocantins', 'Mato Grosso'].map((state) => (
                    <span key={state} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Hero Image - Caso Real */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white p-8 shadow-2xl shadow-blue-500/20 border border-blue-200 overflow-hidden">
                <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
                  ✅ AERÓDROMO REAL
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 h-96 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="relative z-10 text-center">
                    <div className="w-28 h-28 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                      <Trees className="w-14 h-14 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">FAZENDA VONTOBEL</p>
                    <p className="text-gray-700 mb-6">Brejo, MA • Aeródromo Regularizado</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">55</div>
                        <div className="text-sm text-gray-600">dias para aprovação</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">100%</div>
                        <div className="text-sm text-gray-600">conformidade ANAC</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full">
                      <span className="font-medium">Cliente real do agronegócio</span>
                    </div>
                  </div>
                </div>
                
                {/* Rodapé com Dados Reais */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Trees className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Agronegócio</div>
                      <div className="text-xs text-gray-600">Produção agrícola</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Código ANAC</div>
                    <div className="text-lg font-bold text-blue-800">SN4U</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção: Especialização Nordeste */}
      <section id="expertise" className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Especialistas em Infraestrutura Aérea do Nordeste
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Conhecemos as particularidades da ANAC regional e temos relacionamento direto 
              com os órgãos regulatórios do Maranhão, Piauí e estados vizinhos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REGIONAL_EXPERTISE.map((state, index) => (
              <motion.div
                key={state.state}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <state.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{state.count}</div>
                    <div className="text-blue-200">projetos</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{state.state}</h3>
                <div className="text-blue-200">
                  {index < 2 ? 'Especialidade da casa' : 'Atendimento regular'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Nossos Clientes Reais */}
      <section id="segmentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Para Quem Trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 80 projetos entregues para estes segmentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLIENT_SEGMENTS.map((segment, index) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <segment.icon className="w-8 h-8 text-blue-700" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {segment.name}
                </h3>
                
                <div className="text-3xl font-bold text-blue-800 mb-2">{segment.count}</div>
                <p className="text-gray-600 text-sm mb-6">{segment.description}</p>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-3">Exemplos reais:</div>
                  <ul className="space-y-2">
                    {segment.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio Real */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfólio de Projetos Reais
            </h2>
            <p className="text-xl text-gray-600">
              Alguns dos mais de 80 aeródromos, helipontos e PAPI homologados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_CASES.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border ${project.highlight ? 'border-blue-300' : 'border-gray-200'}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm font-medium text-blue-700 mb-2">{project.type}</div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                    {project.region}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="text-sm">
                    <div className="text-gray-600">Prazo de aprovação</div>
                    <div className="font-bold text-blue-700">{project.timeline}</div>
                  </div>
                  <div className="text-sm text-blue-700 font-medium">
                    ✅ Homologado
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-12 border border-blue-200 shadow-lg">
              <div className="text-4xl font-bold text-blue-800 mb-4">80+</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Projetos Homologados com Sucesso
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Desde aeródromos em fazendas remotas até sistemas PAPI para prefeituras, 
                temos experiência real comprovada em toda a região Nordeste.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold gap-3 cursor-pointer"
              >
                <FileCheck className="w-6 h-6" />
                Ver Portfólio Completo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços com Foco Real */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Comprovados em Mais de 80 Projetos
            </h2>
            <p className="text-xl text-gray-600">
              Especialidades que dominamos na prática
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 ${service.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS DE 40 PROJETOS
                  </div>
                )}
                
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
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
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-600" />
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
                  <div className="text-sm text-gray-500">
                    +20 projetos similares
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário com Foco Regional */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especialista no Seu Estado
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temos experiência direta com a ANAC no seu estado. Conte-nos sobre seu projeto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Atendimento Regional</div>
                  <div className="text-sm text-gray-600">Conhecemos a ANAC do seu estado</div>
                </div>
              </div>

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
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Como gostaria de ser chamado"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="(99) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Estado *
                  </label>
                  <select
                    name="locationState"
                    required
                    value={formData.locationState}
                    onChange={(e) => setFormData({...formData, locationState: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Selecione seu estado...</option>
                    <option value="MA">Maranhão (MA) - 28 projetos</option>
                    <option value="PI">Piauí (PI) - 22 projetos</option>
                    <option value="PA">Pará (PA) - 8 projetos</option>
                    <option value="MT">Mato Grosso (MT) - 6 projetos</option>
                    <option value="CE">Ceará (CE)</option>
                    <option value="BA">Bahia (BA) - 5 projetos</option>
                    <option value="TO">Tocantins (TO)</option>
                    <option value="OUTRO">Outro Estado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="aerodromo-rural">Aeródromo Rural/Fazenda</option>
                    <option value="heliponto">Heliponto Corporativo</option>
                    <option value="papi">Sistema PAPI</option>
                    <option value="regularizacao">Regularização de Aeródromo</option>
                    <option value="prefeitura">Projeto para Prefeitura</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Quero consultoria especializada para meu estado
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg cursor-pointer"
                >
                  Falar com Especialista Local
                </motion.button>
              </form>
            </motion.div>

            {/* Benefícios Regionais */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Vantagem Local</h3>
                <ul className="space-y-6">
                  {[
                    'Conhecemos os técnicos da ANAC regional',
                    'Experiência com as peculiaridades do seu estado',
                    'Visitas técnicas frequentes na região',
                    'Rede de contatos locais para agilizar processos',
                    'Conhecimento das normas estaduais específicas'
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

              {/* Depoimento Real */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 font-bold">MA</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Produtor Rural</div>
                    <div className="text-sm text-gray-600">Maranhão</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "A RAD já homologou 3 aeródromos na nossa região. Eles conhecem todos na ANAC do MA e fizeram em 55 dias o que outros prometiam em 6 meses."
                </p>
                <div className="text-sm text-blue-700 font-medium">
                  Fazenda Vontobel - Brejo/MA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa de Atuação */}
      <section id="regional" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Atuação Comprovada no Nordeste
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 80 projetos em 7 estados
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8 border border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Mapa Simplificado */}
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
                    {/* Representação simplificada do Nordeste */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-6">🗺️</div>
                        <div className="text-2xl font-bold text-gray-900">Especialidade: Região Nordeste</div>
                        <div className="text-gray-600 mt-2">Foco em MA, PI, PA, CE, BA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Dados por Estado</h3>
                {REGIONAL_EXPERTISE.map((state) => (
                  <div key={state.state} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3">
                      <state.icon className="w-5 h-5 text-blue-700" />
                      <span className="font-medium">{state.state}</span>
                    </div>
                    <div className="text-blue-800 font-bold">{state.count} projetos</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer com Foco Regional */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold">RAD Engenharia</div>
                  <div className="text-sm text-gray-400 -mt-1">Especialistas Nordeste</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Líder em homologação de aeródromos no Nordeste brasileiro. 
                Mais de 80 projetos entregues com 100% de aprovação ANAC.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Especialista Nordeste</div>
                  <div className="text-gray-400 text-xs">MA, PI, PA, CE, BA</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contato Regional</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="font-medium">(99) 99999-9999</div>
                      <div className="text-sm">Atendimento Nordeste</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-medium">nordeste@radengenharia.com</div>
                      <div className="text-sm">Especialista regional</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Estados Atendidos</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Maranhão', 'Piauí', 'Pará', 'Ceará', 'Bahia', 'Tocantins', 'Mato Grosso', 'Outros'].map((state) => (
                  <div key={state} className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <div className="text-sm">{state}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Cases por Estado</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="font-medium">MA:</span> 28 aeródromos rurais
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="font-medium">PI:</span> 22 projetos diversos
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="font-medium">PR:</span> PAPI para prefeitura
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  <span className="font-medium">MT:</span> Aeródromos rurais
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p>&copy; 2024 RAD Engenharia Aeronáutica - Especialistas no Nordeste</p>
              </div>
              <div className="text-sm">
                <span className="text-blue-400">●</span> Ativo desde 2009 no Nordeste
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp com Destaque Regional */}
      <motion.a
        href="https://wa.me/559999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all z-50 group"
      >
        <div className="relative">
          <MessageCircle size={28} />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            MA/PI
          </div>
        </div>
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Especialista Nordeste
        </div>
      </motion.a>
    </main>
  )
}