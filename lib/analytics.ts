// lib/analytics.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-SEU_ID_AQUI";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    trackGAEvent: (eventName: string, eventParams?: Record<string, any>) => void;
  }
}

// Função para rastrear eventos
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.trackGAEvent) {
    window.trackGAEvent(eventName, eventParams);
  }
};

// Eventos específicos para seu negócio
export const AnalyticsEvents = {
  // Leads
  contactFormSubmit: (projectType: string, location: string) => {
    trackEvent('contact_form_submit', {
      project_type: projectType,
      location: location,
      form_type: 'consulta_gratuita'
    });
  },
  
  // Contatos
  whatsappClick: (source: string, buttonLocation?: string) => {
    trackEvent('whatsapp_click', {
      source: source,
      button_location: buttonLocation || 'contact_section'
    });
  },
  
  phoneCallClick: (phoneNumber: string) => {
    trackEvent('phone_call_click', {
      phone_number: phoneNumber
    });
  },
  
  emailClick: (emailAddress: string) => {
    trackEvent('email_click', {
      email_address: emailAddress
    });
  },
  
  // Navegação
  pageView: (pageTitle: string, pagePath: string) => {
    trackEvent('page_view', {
      page_title: pageTitle,
      page_path: pagePath
    });
  },
  
  // Interações do site
  serviceClick: (serviceName: string) => {
    trackEvent('service_click', {
      service_name: serviceName
    });
  },
  
  caseStudyView: (caseName: string) => {
    trackEvent('case_study_view', {
      case_name: caseName
    });
  },
  
  galleryImageClick: (imageName: string) => {
    trackEvent('gallery_image_click', {
      image_name: imageName
    });
  },
  
  // Conversões
  consultationRequest: () => {
    trackEvent('consultation_request', {
      conversion_type: 'lead_qualificado'
    });
  },
  
  downloadBrochure: (brochureName: string) => {
    trackEvent('download_brochure', {
      brochure_name: brochureName
    });
  }
};