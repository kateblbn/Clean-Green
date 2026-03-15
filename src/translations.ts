import type { Language, TranslationSchema } from './types'

import moving from './assets/moving3.png'
import cool from './assets/cool.jpg'
import cleaning from './assets/cleaning.png'
import bathroom from './assets/bathroom.jpg'
// import regular from './assets/regular.jpg'
import sinkBefore from './assets/sink-before.jpg'
import sinkAfter from './assets/sink-after.jpg'
import boxBefore from './assets/before-box.jpg'
import boxAfter from './assets/after-box.jpg'
import regularA from './assets/regularA.jpg'
import regularB from './assets/regularB.jpg'
import sink from './assets/sink.jpg'
import kitchenA from './assets/kitchenA.jpg'
import kitchenb from './assets/kitchenB.jpg'
import bord from './assets/bord.jpg'
import bedA from './assets/bedA.jpg'
import bedB from './assets/bedB.jpg'
import chandelierA from './assets/chandelierA.jpg'
import chandelierB from './assets/chandelierB.jpg'
import deepA from './assets/deepA.png'
import deepB from './assets/deepB.jpg'
import oppusBath from './assets/oppusBath.png'
import oppusKitchen from './assets/oppusKitchen.png'
import kran from './assets/kran.jpg'
import bathAfter from './assets/bathAfter.png'
import floor from './assets/floor.png'
import flower from './assets/flower.jpg'
import chand from './assets/chand.jpg'
import bBefore from './assets/bBefore.jpg'
import bAfter from './assets/bAfter.jpg'
import wash from './assets/wash.jpg'
import plateA from './assets/plateA.jpg'
import plateB from './assets/plateB.jpg'
import refrA from './assets/refrA.jpg'
import refrB from './assets/refrB.jpg'
import ovnA from './assets/ovnA.png'
import ovnB from './assets/ovnB.png'











export const translations: Record<Language, TranslationSchema> = {
  no: {
    brandSubtitle: 'Eksklusiv miljøvennlig rengjøring',
    nav: {
      home: 'Hjem',
      services: 'Tjenester',
      about: 'Om oss',
      contact: 'Kontakt',
    },
    cta: {
      requestCleaning: 'Bestill en privat konsultasjon',
      requestConsultation: 'Bestill en privat konsultasjon',
      exploreServices: 'Se tjenester',
      sendRequest: 'Send forespørsel',
      learnMore: 'Se mer',
    },
    hero: {
      label: 'Eksklusiv hjemmepleie i Oslo',
      title: 'Eksklusiv miljøvennlig rengjøring for elegante hjem',
      description:
        'Vi tilbyr diskret og miljøvennlig rengjøring for moderne leiligheter, villaer og eksklusive hjem i Oslo og Akershus.',
    },
    about: {
      label: 'Eksklusiv miljøvennlig rengjøring',
      title: 'En raffinert rengjøringsopplevelse for kunder som forventer mer',
      description:
        'Clean Green tilbyr eksklusiv og diskret rengjøring for elegante og moderne hjem i Oslo. Tjenesten er utviklet for kunder som verdsetter rolig kommunikasjon, høy kvalitet og perfekte resultater.',
      details: {
        title: 'Hvorfor kundene velger oss',
        text: 'Vi kombinerer miljøvennlige produkter, diskret service og høy standard i alle detaljer. Målet vårt er å skape et rent, harmonisk og innbydende hjem du virkelig trives i.',
        items: [
          'Miljøvennlige produkter av høy kvalitet',
          'Diskret og profesjonell service',
          'Skreddersydd rengjøring for hver kunde',
          'Perfekt for moderne hjem, leiligheter og villaer',
        ],
      },
    },
    servicesSection: {
      label: 'Våre signaturtjenester',
      title: 'Skreddersydd for eksklusive hjem',
    },
    services: [
      {
        title: 'Fast rengjøring',
        shortDescription:
          'Ukentlig vedlikehold av hjemmet med nøye rengjøring av kjøkken, bad og alle viktige overflater.',
        fullDescription:
          'Regelmessig rengjøring som holder hjemmet ditt rent, harmonisk og presentabelt uke etter uke.',
        image: cleaning,
        included: [
          'Støvtørking av overflater',
          'Støvsuging og gulvvask',
          'Rengjøring av kjøkkenflater',
          'Rengjøring av bad',
          'Speil og synlige detaljer',
        ],
        beforeAfter: [bord, flower, kitchenA, kitchenb,  sink],
      },
      {
        title: 'Detaljvask',
        shortDescription:
          'Grundig detaljvask for hjem som trenger ekstra oppmerksomhet og et perfekt resultat.',
        fullDescription:
          'En grundig vask med fokus på detaljer, overflater og områder som trenger ekstra oppmerksomhet.',
        image: cool,
        included: [
        "Rengjøring av lister og hjørner",
        "Rengjøring av skapfronter",
        "Rengjøring bak og under møbler",
        "Grundig støvfjerning fra alle overflater",
        "Ekstra fokus på detaljer",
        "Rengjøring av lysekroner og lamper",
        "Rengjøring inne i skap (ved forespørsel)"
        ],
        beforeAfter: [ bedA, bedB,  bBefore, bAfter,chandelierB, chandelierA,  boxBefore, boxAfter,  deepB, deepA],
      },
      {
        title: 'Oppussingsvask',
        shortDescription:
          'Effektiv fjerning av støv og rester etter oppussing, med fokus på finish og detaljer.',
        fullDescription:
          'Grundig rengjøring etter oppussing for å fjerne støv, rester og byggespor. Perfekt for nye eller renoverte hjem.',
        image: bathroom,
        included: [
        "Fjerning av byggestøv",
        "Rengjøring av kjøkken og skap",
        "Vask av vegger og lister",
        "Grundig gulvvask",
        "Rengjøring av bad",
        "Rengjøring av brytere og dørhåndtak",
        "Rengjøring av vinduskarmer og vindusbrett",
        "Fjerning av fint støv fra hjørner og kanter"
        ],
        beforeAfter: [oppusKitchen, regularB, regularA,  oppusBath, kran, sinkBefore, sinkAfter, wash, plateB, plateA],
      },
      {
        title: 'Flyttevask',
        shortDescription:
          'Profesjonell flyttevask for overtakelse, utleie og salg av eksklusive boliger.',
        fullDescription:
          'Grundig flyttevask som gjør boligen klar for overtakelse, salg eller utleie med et profesjonelt resultat.',
        image: moving,
        included: [
        "Helhetlig rengjøring av alle rom",
        "Detaljvask av kjøkken og hvitevarer",
        "Rengjøring av skap og skuffer",
        "Grundig rengjøring av bad",
        "Rengjøring av brytere og håndtak",
        "Vindusvask og rengjøring av karmer",
        "Grundig gulvvask",
        "Puss av speil og glassflater",
        "Sluttkontroll for et perfekt resultat",
        "Rengjøring av peis (ved forespørsel)"
        ],
        beforeAfter: [bathroom, floor, chand, bathAfter, refrB, refrA, ovnB, ovnA],
      },
    ],
    serviceModal: {
      includedTitle: 'Hva er inkludert',
      beforeAfterTitle: 'Før / Etter resultater',
      before: 'Før',
      after: 'Etter',
      order: 'Bestill en privat konsultasjon',
      close: 'Lukk',
       quickAnswer: 'Ønsker du et raskt svar?',
  whatsappChat: 'Chat med oss på WhatsApp',
  quickQuote: 'Få et raskt prisoverslag',
  quickQuoteMessage:
    'Hei! Jeg er interessert i {service} og ønsker et raskt prisoverslag.',

    },
    whyChoose: {
      label: 'Hvorfor velge Clean Green',
      title: 'Valgt av kunder som bryr seg om kvalitet, diskresjon og detaljer',
      reasons: [
        'Miljøvennlige produkter av høy kvalitet',
        'Diskret og profesjonell service',
        'Forsikret og registrert selskap',
        'Perfekt for moderne hjem og villaer',
        'Skreddersydd oppfølging for hver kunde',
      ],
    },
    processSection: {
      label: 'Slik fungerer det',
      title: 'Enkel, rolig og profesjonell prosess',
      items: [
        {
          step: '01',
          title: 'Send forespørsel',
          text: 'Send oss informasjon om boligtype, størrelse og ønsket tjeneste.',
        },
        {
          step: '02',
          title: 'Privat konsultasjon',
          text: 'Vi vurderer behovene dine og anbefaler riktig nivå av rengjøring.',
        },
        {
          step: '03',
          title: 'Premium rengjøring',
          text: 'Teamet vårt utfører rengjøringen med presisjon, diskresjon og kvalitet.',
        },
        {
          step: '04',
          title: 'Nyt hjemmet ditt',
          text: 'Du kommer tilbake til et rent, rolig og innbydende hjem.',
        },
      ],
    },
    testimonialsSection: {
      label: 'Kundeomtaler',
      title: 'Hva kundene våre sier',
      items: [
        {
          quote:
            'Fantastisk service fra start til slutt. Leiligheten så feilfri ut, og teamet var diskret og svært profesjonelt.',
          author: 'Kunde i Frogner',
        },
        {
          quote:
            'Clean Green føles mer som en privat hjemmetjeneste enn et vanlig rengjøringsfirma. Akkurat det vi ønsket.',
          author: 'Kunde i Bærum',
        },
        {
          quote:
            'Vakker sans for detaljer. Pålitelig, rolig og premium i hele opplevelsen.',
          author: 'Kunde i Nordstrand',
        },
      ],
    },
    areasSection: {
      label: 'Områder vi dekker',
      title: 'Vi tilbyr rengjøring i Oslo og omegn',
      items: [
        'Oslo',
        'Frogner',
        'Bærum',
        'Asker',
        'Nordstrand',
        'Holmenkolen',
        'Fornebu',
        'Sandvika',
        'Akershus',
      ],
    },
    contactSection: {
      label: 'Kontakt',
      title: 'Bestill privat rengjøring til hjemmet ditt',
      description:
        'Fortell oss litt om hjemmet ditt og hvilken type rengjøring du ønsker. Vi tar kontakt for å planlegge en løsning som passer dine behov.',
      phone: 'Telefon',
      email: 'E-post',
      org: 'Org. nr',
      form: {
        name: 'Navn',
        phone: 'Telefon',
        email: 'Din e-postadresse',
        propertySize: 'Boligstørrelse',
        serviceNeeded: 'Ønsket tjeneste',
        message: 'Melding',
        placeholders: {
          name: 'Ditt navn',
          phone: 'Ditt telefonnummer',
          email: 'Din e-postadresse',
          propertySize: 'f.eks. leilighet på 120 m²',
          message: 'Fortell oss om hjemmet ditt og dine ønsker',
        },
        options: [
          'Fast rengjøring',
          'Detaljvask',
          'Vask etter oppussing',
          'Flyttevask',
        ],
      },
    },
    footer: {
      subtitle: 'Eksklusiv miljøvennlig rengjøring i Oslo',
      copyright: '© 2026 Clean Green - Balabushkina Service. Alle rettigheter reservert.',
    },
  },

  en: {
    brandSubtitle: 'Exclusive eco-friendly cleaning',
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    cta: {
      requestCleaning: 'Book a Private Consultation',
      requestConsultation: 'Book a Private Consultation',
      exploreServices: 'Explore Services',
      sendRequest: 'Submit Inquiry',
      learnMore: 'See more',
    },
    hero: {
      label: 'Premium Home Care in Oslo',
      title: 'Exclusive Eco-Friendly Cleaning for Elegant Homes',
      description:
        'We offer discreet and eco-friendly cleaning for modern apartments, villas and exclusive homes in Oslo and Akershus.',
    },
    about: {
      label: 'Exclusive Eco Cleaning',
      title: 'A refined cleaning experience for clients who expect more',
      description:
        'Clean Green offers exclusive and discreet cleaning for elegant and modern homes in Oslo and Akershus. Our service is designed for clients who value calm communication, premium quality and immaculate results.',
      details: {
        title: 'Why clients choose us',
        text: 'We combine eco-friendly products, discreet service and premium standards in every detail. Our goal is to create a clean, harmonious and welcoming home where you truly feel comfortable.',
        items: [
          'High-quality eco-friendly products',
          'Discreet and professional service',
          'Tailored cleaning for every client',
          'Perfect for modern homes, apartments and villas',
        ],
      },
    },
    servicesSection: {
      label: 'Our Signature Services',
      title: 'Tailored for premium homes',
    },
    services: [
      {
        title: 'Regular Cleaning',
        shortDescription:
          'Weekly home maintenance with careful cleaning of kitchens, bathrooms and all key surfaces.',
        fullDescription:
          'Regular cleaning that keeps your home fresh, harmonious and beautifully maintained week after week.',
        image: cleaning,
        included: [
          'Dusting of surfaces',
          'Vacuuming and floor washing',
          'Kitchen surface cleaning',
          'Bathroom cleaning',
          'Mirrors and visible details',
        ],
        beforeAfter: [kitchenA, kitchenb,  sink,  bord, flower],
      },
      {
        title: 'Deep Cleaning',
        shortDescription:
          'Thorough deep cleaning for homes that need extra attention and a flawless result.',
        fullDescription:
          'A detailed cleaning service focused on surfaces, corners and areas that need extra care and attention.',
        image: cool,
        included: [
        "Trim and corner detailing",
        "Cabinet front cleaning",
        "Cleaning behind and under furniture",
        "Full surface dust removal",
        "Attention to fine details",
        "Chandelier and light fixture cleaning",
        "Interior cabinet cleaning (upon request)"
        ],
        beforeAfter: [ bedA, bedB,  bBefore, bAfter,chandelierB, chandelierA,  boxBefore, boxAfter,  deepB, deepA],
      },
      {
        title: 'Post Renovation',
        shortDescription:
          'Effective removal of dust and residue after renovation, with a focus on finish and detail.',
        fullDescription:
          'Thorough cleaning after renovation to remove dust, residue and construction traces. Perfect for newly renovated homes.',
        image: bathroom,
        included: [
        "Construction dust removal",
        "Kitchen and cabinet wipe-down",
        "Wall and trim wash",
        "Deep floor care",
        "Bathroom sanitising",
        "Switch and handle detailing",
        "Window frame and sill care",
        "Fine dust removal from edges and corners"
        ],
        beforeAfter: [oppusKitchen, regularB, regularA,  oppusBath, kran, sinkBefore, sinkAfter, wash, plateB, plateA],
      },
      {
        title: 'Move-Out Cleaning',
        shortDescription:
          'Professional move-out cleaning for property handover, rental and sale of exclusive homes.',
        fullDescription:
          'A complete move-out cleaning service that prepares the property for handover, rental or sale with a polished result.',
        image: moving,
        included: [
        "Complete room care",
        "Kitchen and appliance detailing",
        "Cabinet and drawer wipe-down",
        "Deep bathroom sanitising",
        "Switch and handle detailing",
        "Window wash and frame care",
        "Deep floor wash",
        "Mirror and glass polishing",
        "Final quality inspection",
        "Fireplace care (upon request)"
        ],
        beforeAfter: [bathroom, floor, chand, bathAfter, refrB, refrA, ovnB, ovnA],
      },
    ],
    serviceModal: {
      includedTitle: 'What’s Included',
      beforeAfterTitle: 'Before / After Results',
      before: 'Before',
      after: 'After',
      order:'Book a Private Consultation',
      close: 'Close',
      quickAnswer: 'Prefer a quick answer?',
  whatsappChat: 'Chat with us on WhatsApp',
  quickQuote: 'Request a Quick Quote',
  quickQuoteMessage:
    'Hi! I’m interested in {service} and would like a quick price estimate.',
    },
    whyChoose: {
      label: 'Why Choose Clean Green',
      title: 'Trusted by clients who care about quality, discretion and detail',
      reasons: [
        'Eco-friendly products of high quality',
        'Discreet and professional service',
        'Insured and registered company',
        'Perfect for modern homes and villas',
        'Tailored follow-up for every client',
      ],
    },
    processSection: {
      label: 'Our Process',
      title: 'Simple, calm and professional',
      items: [
        {
          step: '01',
          title: 'Submit Inquiry',
          text: 'Send us your property type, size and desired service.',
        },
        {
          step: '02',
          title: 'Private Consultation',
          text: 'We assess your needs and recommend the right level of cleaning.',
        },
        {
          step: '03',
          title: 'Premium Cleaning',
          text: 'Our team performs the cleaning with precision, discretion and quality.',
        },
        {
          step: '04',
          title: 'Enjoy Your Home',
          text: 'You return to a clean, calm and welcoming home.',
        },
      ],
    },
    testimonialsSection: {
      label: 'Testimonials',
      title: 'What our clients say',
      items: [
        {
          quote:
            'Exceptional service from start to finish. The apartment looked flawless, and the team was discreet and highly professional.',
          author: 'Client in Frogner',
        },
        {
          quote:
            'Clean Green feels more like a private home service than a standard cleaning company. Exactly what we wanted.',
          author: 'Client in Bærum',
        },
        {
          quote:
            'Beautiful attention to detail. Reliable, calm and premium in every part of the experience.',
          author: 'Client in Nordstrand',
        },
      ],
    },
    areasSection: {
      label: 'Service Areas',
      title: 'Serving premium homes in and around Oslo',
      items: [
        'Oslo',
        'Frogner',
        'Bærum',
        'Asker',
        'Nordstrand',
        'Holmenkolen',
        'Fornebu',
        'Sandvika',
        'Akershus',
      ],
    },
    contactSection: {
      label: 'Contact',
      title: 'Book a Private Consultation',
      description:
        'Tell us a little about your home and the type of cleaning you need. We will contact you to plan a solution that suits your needs.',
      phone: 'Phone',
      email: 'Email',
      org: 'Org. no',
      form: {
        name: 'Name',
        phone: 'Phone',
        email: 'E-post',
        propertySize: 'Property Size',
        serviceNeeded: 'Service Needed',
        message: 'Message',
        placeholders: {
          name: 'Your name',
          phone: 'Your phone number',
          email: 'Your email address',
          propertySize: 'e.g. 120 m² apartment',
          message: 'Tell us about your home and your preferences',
        },
        options: [
          'Regular Cleaning',
          'Deep Cleaning',
          'Post Renovation',
          'Move-Out Cleaning',
        ],
      },
    },
    footer: {
      subtitle: 'Exclusive Eco-friendly Cleaning Service in Oslo',
      copyright: '© 2026 Clean Green - Balabushkina Service. All rights reserved.',
    },
  },
}