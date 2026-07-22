// lib/analytics.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-SEU_ID_AQUI";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    trackGAEvent: (eventName: string, eventParams?: Record<string, any>) => void;
    dataLayer: any[];
  }
}

// Helper para garantir que o dataLayer existe
const ensureDataLayer = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
};

// Função para rastrear eventos (envia tanto para gtag quanto para dataLayer)
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined') {
    // Chamada direta ao gtag (para quem já tem GA4 configurado no layout)
    if (window.trackGAEvent) {
      window.trackGAEvent(eventName, eventParams);
    }
    // Push padronizado para dataLayer (GTM)
    ensureDataLayer();
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
};

// Eventos específicos para o negócio
export const AnalyticsEvents = {
  // Leads
  contactFormSubmit: (projectType: string, location: string) => {
    trackEvent('contact_form_submit', {
      project_type: projectType,
      location: location,
      form_type: 'consulta_gratuita'
    });
  },

  // WhatsApp – agora com dataLayer padronizado
  whatsappClick: (source: string, buttonLocation?: string) => {
    trackEvent('click_whatsapp', {
      button_location: buttonLocation || source,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    });
  },

  phoneCallClick: (phoneNumber: string) => {
    trackEvent('click_phone', {
      phone_number: phoneNumber,
    });
  },

  emailClick: (emailAddress: string) => {
    trackEvent('click_email', {
      email_address: emailAddress,
    });
  },

  // Conversão principal
  generateLead: (projectType: string, location: string, formName: string = 'consulta_gratuita') => {
    trackEvent('generate_lead', {
      project_type: projectType,
      location: location,
      form_name: formName,
      lead_source: 'landing_page_form',
      currency: 'BRL',
      value: 1.0,
    });
  },

  // Erro de validação
  formError: (errorType: 'validation' | 'api', fields?: string[], message?: string, projectType?: string, location?: string) => {
    trackEvent('form_error', {
      error_type: errorType,
      error_fields: fields || [],
      error_message: message || '',
      form_name: 'consulta_gratuita',
      project_type: projectType || '',
      location: location || '',
    });
  },

  // Início do formulário
  formStart: (projectType: string, location: string) => {
    trackEvent('form_start', {
      form_name: 'consulta_gratuita',
      project_type: projectType,
      location: location,
    });
  },

  // Outros eventos (mantidos como estavam, agora com dataLayer)
  pageView: (pageTitle: string, pagePath: string) => {
    trackEvent('page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  },

  serviceClick: (serviceName: string) => {
    trackEvent('service_click', {
      service_name: serviceName,
    });
  },

  caseStudyView: (caseName: string) => {
    trackEvent('case_study_view', {
      case_name: caseName,
    });
  },

  galleryImageClick: (imageName: string) => {
    trackEvent('gallery_image_click', {
      image_name: imageName,
    });
  },

  consultationRequest: () => {
    trackEvent('consultation_request', {
      conversion_type: 'lead_qualificado',
    });
  },

  downloadBrochure: (brochureName: string) => {
    trackEvent('download_brochure', {
      brochure_name: brochureName,
    });
  }
};