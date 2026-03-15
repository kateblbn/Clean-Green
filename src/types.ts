export type Language = 'no' | 'en'

export type ServiceItem = {
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  included: string[]
  beforeAfter: string[]
}

export type TranslationSchema = {
  brandSubtitle: string
  nav: {
    home: string
    services: string
    about: string
    contact: string
  }
  cta: {
    requestCleaning: string
    requestConsultation: string
    exploreServices: string
    sendRequest: string
    learnMore: string
  }
  hero: {
    label: string
    title: string
    description: string
  }
about: {
  label: string
  title: string
  description: string
  details: {
    title: string
    text: string
    items: string[]
  }
}
  servicesSection: {
    label: string
    title: string
  }
  services: ServiceItem[]
serviceModal: {
  includedTitle: string
  beforeAfterTitle: string
  before: string
  after: string
  order: string
  close: string
  quickAnswer: string
  whatsappChat: string
  quickQuote: string
  quickQuoteMessage: string
}
  whyChoose: {
    label: string
    title: string
    reasons: string[]
  }
  processSection: {
    label: string
    title: string
    items: {
      step: string
      title: string
      text: string
    }[]
  }
  testimonialsSection: {
    label: string
    title: string
    items: {
      quote: string
      author: string
    }[]
  }
  areasSection: {
    label: string
    title: string
    items: string[]
  }
  contactSection: {
    label: string
    title: string
    description: string
    phone: string
    email: string
    org: string
    form: {
      name: string
      phone: string
      email: string
      propertySize: string
      serviceNeeded: string
      message: string
      placeholders: {
        name: string
        phone: string
        email: string
        propertySize: string
        message: string
      }
      options: string[]
    }
  }
  footer: {
    subtitle: string
    copyright: string
  }
}