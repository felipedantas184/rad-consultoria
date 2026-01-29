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
  Clock,
  Users,
  Building,
  Shield,
  Award,
  FileText,
  Settings,
  Target,
  Zap,
  Globe,
  ChevronRight,
  BarChart,
  Plane,
  ClipboardCheck
} from 'lucide-react'
import { useState } from 'react'

// Dados específicos para aeródromos
const aerodromeTypes = [
  {
    title: 'Aeródromo Agrícola',
    description: 'Para grandes propriedades rurais e agronegócio',
    features: ['Pista para aeronaves agrícolas', 'Área de manobra', 'Pátio de estacionamento'],
    time: '60-75 dias',
    highlight: true
  },
  {
    title: 'Aeródromo Executivo',
    description: 'Para empresas e propriedades de alto padrão',
    features: ['Pista 800-1600m', 'Sistema PAPI opcional', 'Infraestrutura completa'],
    time: '75-90 dias',
    highlight: true
  },
  {
    title: 'Aeródromo de Mineração',
    description: 'Para operações em locais remotos',
    features: ['Projeto adaptado ao terreno', 'Sistema resistente', 'Logística otimizada'],
    time: '90-120 dias'
  },
  {
    title: 'Aeródromo Comunitário',
    description: 'Para comunidades e aldeias indígenas',
    features: ['Projeto simplificado', 'Custos reduzidos', 'Manutenção facilitada'],
    time: '45-60 dias'
  }
]

const requirements = [
  'Documentação do terreno (matrícula, CCIR, ITR)',
  'Estudo de impacto ambiental (quando aplicável)',
  'Projeto técnico assinado por CREA',
  'Relatório de compatibilidade aeroportuária',
  'Plano de zoneamento do aeródromo',
  'Laudo de segurança operacional',
  'Projeto de pista e pátio',
  'Estudo de vento predominante'
]

const processSteps = [
  {
    step: '01',
    title: 'Análise de Viabilidade',
    description: 'Avaliação técnica e regulatória do local proposto',
    duration: '5-7 dias'
  },
  {
    step: '02',
    title: 'Projeto Técnico Completo',
    description: 'Elaboração de toda documentação exigida pela ANAC',
    duration: '15-30 dias'
  },
  {
    step: '03',
    title: 'Licenciamento Ambiental',
    description: 'Obtenção das licenças necessárias junto aos órgãos ambientais',
    duration: '30-45 dias'
  },
  {
    step: '04',
    title: 'Homologação ANAC/DECEA',
    description: 'Tramitação e aprovação final junto aos órgãos regulatórios',
    duration: '30-60 dias'
  }
]

const aerodromeCases = [
  {
    title: 'FAZENDA CANAÃ EXECUTIVO',
    location: 'Teresina, PI',
    size: '1600m',
    type: 'Aeródromo Agrícola/Executivo',
    result: 'Homologado em 67 dias',
    features: ['Pista asfaltada', 'Sistema PAPI', 'Pátio iluminado'],
    code: 'SD7E'
  },
  {
    title: 'FAZENDA SANTA THEREZA',
    location: 'Aparecida do Rio Doce, GO',
    size: '1200m',
    type: 'Aeródromo Agrícola',
    result: 'Regularizado em 58 dias',
    features: ['Pista de terra compactada', 'Sinalização completa', 'Abastecimento'],
    code: 'SWXK',
    highlight: true
  },
  {
    title: 'AERÓDROMO FLY VILLAGE',
    location: 'Altos, PI',
    size: '800m',
    type: 'Aeródromo Residencial',
    result: 'Aprovado em 72 dias',
    features: ['Condomínio aeronáutico', 'PAPI instalado', 'Hangares privativos'],
    code: 'SSPF'
  }
]

const faqs = [
  {
    question: 'Qual o tamanho mínimo para um aeródromo?',
    answer: 'O tamanho mínimo varia conforme o tipo de aeronava. Para aeronaves leves (até 5700kg), recomenda-se no mínimo 600m. Para aeronaves executivas, idealmente 800-1200m. Fazemos análise específica para cada caso.'
  },
  {
    question: 'Precisa de licenciamento ambiental?',
    answer: 'Sim, aeródromos exigem licenciamento ambiental. Nossa equipe gerencia todo o processo junto aos órgãos estaduais e federais, incluindo estudos necessários.'
  },
  {
    question: 'Quanto custa registrar um aeródromo?',
    answer: 'Os custos variam conforme tamanho, localização e complexidade. Para aeródromos rurais simples, a partir de R$ 80.000. Para aeródromos executivos completos, pode chegar a R$ 250.000+. Oferecemos orçamento detalhado após análise.'
  },
  {
    question: 'Qual a manutenção necessária após homologação?',
    answer: 'Aeródromos requerem manutenção periódica da pista, sinalização e infraestrutura. Oferecemos planos de gestão contínua para garantir conformidade permanente.'
  }
]

export default function AerodromosPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertySize: '',
    location: '',
    aerodromeType: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead aeródromo:', formData)
    alert('✅ Solicitação enviada! Um especialista entrará em contato em até 24h.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertySize: '',
      location: '',
      aerodromeType: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Específica */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-green-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Plane className="w-4 h-4" />
                <span>ESPECIALISTAS EM AERÓDROMOS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Registro Completo de{' '}
                <span className="text-blue-800">Aeródromos Rurais e Executivos</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                Regularize seu aeródromo com segurança jurídica total. Mais de 45 projetos homologados para 
                <span className="font-semibold"> agronegócio, mineração e propriedades de alto padrão</span>.
              </p>

              {/* CTA Principal */}
              <div className="space-y-6">
                <motion.a
                  href="#consultoria"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg cursor-pointer shadow-lg group"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Consultoria Gratuita para Aeródromos
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Garantia de aprovação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Processo 60-90 dias</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card de Destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200"
            >
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl flex items-center justify-center">
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Aeródromo Aprovado</div>
                    <div className="text-gray-600">Case Real • 67 dias</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Propriedade</div>
                      <div className="font-bold text-gray-900">Fazenda Canaã</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Pista</div>
                      <div className="font-bold text-blue-800">1600m</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Registro ANAC completo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Licenciamento ambiental</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Sistema PAPI instalado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Código ICAO</div>
                <div className="text-2xl font-bold text-blue-800 font-mono">SD7E</div>
                <div className="text-sm text-gray-500 mt-1">Teresina, PI</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipos de Aeródromos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Aeródromos que Regularizamos
            </h2>
            <p className="text-lg text-gray-600">
              Especialistas em diferentes perfis de operação aérea
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aerodromeTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gray-50 rounded-xl p-6 border-2 ${type.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-200'} hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-blue-700 font-medium text-sm">
                    <Clock className="w-4 h-4" />
                    {type.time}
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Detalhado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo de Registro
            </h2>
            <p className="text-lg text-gray-600">
              Metodologia validada em 45+ projetos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-lg font-bold">{step.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-blue-700 font-medium text-sm">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos e Documentação */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Documentação Necessária
              </h2>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-700" />
                  <h3 className="text-lg font-bold text-gray-900">Checklist Completo</h3>
                </div>
                
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Importante:</span> Nossa equipe auxilia na obtenção de toda documentação necessária.
              </p>
            </motion.div>

            {/* Cases de Sucesso */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Aeródromos Homologados
              </h2>
              
              <div className="space-y-6">
                {aerodromeCases.map((caseItem, index) => (
                  <div key={index} className={`bg-gray-50 rounded-xl p-6 border ${caseItem.highlight ? 'border-blue-300' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{caseItem.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                          <MapPin className="w-3 h-3" />
                          {caseItem.location}
                        </div>
                      </div>
                      {caseItem.code && (
                        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-mono">
                          {caseItem.code}
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Tamanho</div>
                        <div className="font-bold text-gray-900">{caseItem.size}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Tipo</div>
                        <div className="font-bold text-gray-900">{caseItem.type}</div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-green-800 font-bold">{caseItem.result}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulário de Consultoria */}
      <section id="consultoria" className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultoria Especializada em Aeródromos
            </h2>
            <p className="text-lg text-gray-600">
              Receba um diagnóstico completo para seu projeto
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="aerodrome-name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    id="aerodrome-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="aerodrome-phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    id="aerodrome-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="(86) 99981-1672"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="aerodrome-email" className="block text-sm font-semibold text-gray-900 mb-2">
                    E-mail *
                  </label>
                  <input
                    id="aerodrome-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="aerodrome-type" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tipo de Aeródromo *
                  </label>
                  <select
                    id="aerodrome-type"
                    name="aerodromeType"
                    required
                    value={formData.aerodromeType}
                    onChange={handleInputChange}
                    className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="agricola">Aeródromo Agrícola</option>
                    <option value="executivo">Aeródromo Executivo</option>
                    <option value="mineracao">Aeródromo de Mineração</option>
                    <option value="comunitario">Aeródromo Comunitário</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="property-size" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tamanho da Propriedade (hectares)
                  </label>
                  <input
                    id="property-size"
                    type="text"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Ex: 500 ha"
                  />
                </div>

                <div>
                  <label htmlFor="aerodrome-location" className="block text-sm font-semibold text-gray-900 mb-2">
                    Localização (Cidade/UF) *
                  </label>
                  <input
                    id="aerodrome-location"
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Ex: Teresina - PI"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="aerodrome-message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Detalhes do Projeto
                </label>
                <textarea
                  id="aerodrome-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full text-gray-900 px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Conte-nos sobre sua propriedade e necessidades..."
                ></textarea>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="aerodrome-policy"
                      type="checkbox"
                      required
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                  </div>
                  <label htmlFor="aerodrome-policy" className="text-sm text-gray-700 cursor-pointer">
                    Concordo em receber contato para consultoria sobre aeródromos.
                    <span className="block text-gray-500 text-xs mt-1">
                      Seus dados estão protegidos. Não fazemos spam.
                    </span>
                  </label>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg cursor-pointer shadow-lg"
              >
                Solicitar Consultoria para Aeródromo
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dúvidas sobre Aeródromos
            </h2>
            <p className="text-lg text-gray-600">
              Respostas para as principais questões
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}