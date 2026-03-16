import { useRef, useState } from 'react'
import './App.css'

import background from './assets/background.jpg'
import regular from './assets/regular.jpg'

import WhatsAppButton from './WhatsAppButton'
import ServiceCard from './components/ServiceCard'
import ServiceModal from './components/ServiceModal'
import emailjs from '@emailjs/browser'
import { translations } from './translations'
import type { Language } from './types'

const reviews = [
  {
    quote:
      'Fantastisk service fra start til slutt. Flyttevasken var ekstremt grundig og leiligheten så helt ny ut. Veldig profesjonelle og utrolig hyggelige.',
    author: 'Kunde i Frogner',
  },
  {
    quote:
      'Beste rengjøringsfirmaet vi har brukt. De er utrolig nøye med detaljer og alt føles virkelig premium.',
    author: 'Kunde i Bærum',
  },
  {
    quote:
      'Vi bestilte byggevask etter oppussing, og resultatet var imponerende. Alt støv var borte, selv på steder jeg ikke ville tenkt på.',
    author: 'Kunde i Asker',
  },
  {
    quote:
      'Flyttevasken var helt perfekt. Ny eier kommenterte hvor rent alt var. Anbefales virkelig.',
    author: 'Kunde i Oslo',
  },
  {
    quote:
      'Utrolig detaljert rengjøring. De tok seg tid til alt fra lister til lamper og små hjørner. Huset føltes helt nytt etterpå.',
    author: 'Kunde i Nordstrand',
  },
  {
    quote:
      'Veldig profesjonelt team. Rolig, diskret og ekstremt nøye. Akkurat den typen service vi ønsket.',
    author: 'Kunde i Holmenkollen',
  },
  {
    quote:
      'Vi brukte Clean Green til flyttevask og jeg ble virkelig imponert over hvor grundig de jobbet. Selv ovn og kjøleskap var skinnende rene.',
    author: 'Kunde i Fornebu',
  },
  {
    quote:
      'Byggevasken etter renovering var helt perfekt. Alt byggestøv var fjernet og hjemmet føltes friskt igjen.',
    author: 'Kunde i Sandvika',
  },
  {
    quote:
      'Utrolig detaljfokus. Man merker at de bryr seg om kvaliteten. Hver eneste overflate var nøye rengjort.',
    author: 'Kunde i Bærum',
  },
  {
    quote:
      'Dette føles mer som en privat hjemmetjeneste enn et vanlig rengjøringsfirma. Elegant, diskret og veldig profesjonelt.',
    author: 'Kunde i Oslo',
  },
]

function App() {
  const [language, setLanguage] = useState<Language>('no')
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertySize: '',
    serviceNeeded: '',
    message: '',
  })
  const [toast, setToast] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const reviewsRef = useRef<HTMLDivElement | null>(null)

  const scrollReviews = (direction: 'left' | 'right') => {
    if (!reviewsRef.current) return

    reviewsRef.current.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    })
  }

  const t = translations[language]

  const openServiceModal = (index: number) => {
    setActiveServiceIndex(index)
  }

  const closeServiceModal = () => {
    setActiveServiceIndex(null)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await emailjs.send(
        'service_k1vdvce',
        'template_l1qtgvm',
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          property_size: formData.propertySize,
          service_needed: formData.serviceNeeded,
          message: formData.message,
        },
        'bd3dKwqEKl-xYxVgk'
      )

      setToast({
        type: 'success',
        message:
          language === 'no'
            ? 'Forespørselen din er sendt. Vi kontakter deg snart.'
            : 'Your consultation request has been sent. We will contact you shortly.',
      })

      setFormData({
        name: '',
        phone: '',
        email: '',
        propertySize: '',
        serviceNeeded: '',
        message: '',
      })

      setTimeout(() => setToast(null), 4000)
    } catch {
      setToast({
        type: 'error',
        message:
          language === 'no'
            ? 'Noe gikk galt. Prøv igjen om et øyeblikk eller kontakt oss via WhatsApp.'
            : 'Something went wrong. Please try again shortly or reach us via the WhatsApp button.',
      })

      setTimeout(() => setToast(null), 4000)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1E1E1E]">
      <header className="sticky top-0 z-50 border-b border-[#e8dfcf] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10 lg:py-5">
          <div className="min-w-0">
            <p className="font-serif text-xl tracking-[0.14em] text-[#0F2F23] sm:text-2xl lg:text-3xl lg:tracking-[0.2em]">
              CLEAN GREEN
            </p>
            <p className="mt-1 max-w-[220px] text-[10px] uppercase tracking-[0.26em] text-[#8b7a55] sm:max-w-none sm:text-xs sm:tracking-[0.35em]">
              {t.brandSubtitle}
            </p>
          </div>

          <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.18em] md:flex lg:gap-8 lg:text-sm lg:tracking-[0.2em]">
            <a
              href="#home"
              className="cursor-pointer text-[#0F2F23] transition-colors duration-500 ease-out hover:text-[#C6A55C]"
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              className="cursor-pointer text-[#0F2F23] transition-colors duration-500 ease-out hover:text-[#C6A55C]"
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              className="cursor-pointer text-[#0F2F23] transition-colors duration-500 ease-out hover:text-[#C6A55C]"
            >
              {t.nav.services}
            </a>
            <a
              href="#contact"
              className="cursor-pointer text-[#0F2F23] transition-colors duration-500 ease-out hover:text-[#C6A55C]"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center text-[11px] uppercase tracking-[0.24em] sm:text-[13px] sm:tracking-[0.28em]">
              <span
                onClick={() => setLanguage('no')}
                className={`cursor-pointer transition-colors duration-300 ${
                  language === 'no'
                    ? 'text-[#C6A55C]'
                    : 'text-[#2F2F2F] hover:text-[#C6A55C]'
                }`}
              >
                NO
              </span>
              <span className="mx-1 text-[#2F2F2F]">|</span>
              <span
                onClick={() => setLanguage('en')}
                className={`cursor-pointer transition-colors duration-300 ${
                  language === 'en'
                    ? 'text-[#C6A55C]'
                    : 'text-[#2F2F2F] hover:text-[#C6A55C]'
                }`}
              >
                EN
              </span>
            </div>

            <a
              href="#contact"
              className="rounded-full border border-[#C6A55C] bg-[#C6A55C] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0F2F23] transition hover:bg-[#d3b26f] sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.22em]"
            >
              {t.cta.requestCleaning}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-[78vh] items-center overflow-hidden sm:min-h-[85vh] lg:min-h-[92vh]"
        >
        <img
          src={background}
          alt="Luxury Scandinavian interior"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[64%_center] md:object-[60%_center] lg:object-center"
        />
            <div className="absolute inset-0 bg-[#0F2F23]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2F23]/60 via-[#0F2F23]/30 to-transparent" />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 md:pb-20 md:pt-24 lg:grid-cols-12 lg:px-10 lg:py-24">
              <div className="lg:col-span-7 lg:pr-10">
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#D8BF86] sm:text-sm sm:tracking-[0.35em]">
                {t.hero.label}
              </p>

              <h1 className="max-w-4xl font-serif text-4xl leading-[1.04] text-white sm:text-5xl md:max-w-3xl md:text-[4.5rem] lg:max-w-4xl lg:text-7xl">
                </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#F7F4EE] sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
                {t.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <a
                  href="#contact"
                  className="rounded-full border border-[#C6A55C] bg-[#C6A55C] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#0F2F23] transition hover:bg-[#d3b26f] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.24em]"
                >
                  {t.cta.requestConsultation}
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-[#D8BF86] bg-[#C6A55C]/40 px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.24em]"
                >
                  <div className="text-white drop-shadow-lg">{t.cta.exploreServices}</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#0F2F23] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="mx-auto mb-8 h-px w-24 bg-[#C6A55C]" />
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#D8BF86] sm:text-sm sm:tracking-[0.35em]">
                {t.about.label}
              </p>

              <h2 className="font-serif text-3xl leading-tight text-[#F7F4EE] sm:text-4xl md:text-5xl">
                {t.about.title}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#e7e0d4] sm:mt-8 sm:text-lg sm:leading-8">
                {t.about.description}
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
              <div>
                <h3 className="font-serif text-2xl text-white sm:text-3xl md:text-4xl">
                  {t.about.details.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-[#e7e0d4] sm:mt-6 sm:text-lg sm:leading-8">
                  {t.about.details.text}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {t.about.details.items.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#C6A55C] bg-[#C6A55C] text-[13px] leading-none text-white shadow-[0_4px_12px_rgba(198,165,92,0.28)]">
                      ✓
                    </div>

                    <p className="text-base leading-7 text-[#F7F4EE] sm:text-lg sm:leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-14">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#8b7a55] sm:text-sm sm:tracking-[0.35em]">
                {t.servicesSection.label}
              </p>
              <h2 className="font-serif text-3xl text-[#0F2F23] sm:text-4xl md:text-5xl">
                {t.servicesSection.title}
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
              {t.services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  learnMoreLabel={t.cta.learnMore}
                  onOpen={() => openServiceModal(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(15,47,35,0.14)]">
              <img
                src={regular}
                alt="Elegant living room"
                className="h-full min-h-[320px] w-full object-cover sm:min-h-[420px] lg:min-h-[520px]"
              />
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#8b7a55] sm:text-sm sm:tracking-[0.35em]">
                {t.whyChoose.label}
              </p>
              <h2 className="font-serif text-3xl leading-tight text-[#0F2F23] sm:text-4xl md:text-5xl">
                {t.whyChoose.title}
              </h2>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {t.whyChoose.reasons.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1"
                  >
                    <div className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#C6A55C] bg-[#C6A55C] text-[13px] leading-none text-white shadow-[0_4px_12px_rgba(198,165,92,0.28)]">
                      ✓
                    </div>

                    <p className="text-base leading-7 text-[#2E2A25] sm:text-lg sm:leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F1ECE2] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-14">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#8b7a55] sm:text-sm sm:tracking-[0.35em]">
                {t.processSection.label}
              </p>
              <h2 className="font-serif text-3xl text-[#0F2F23] sm:text-4xl md:text-5xl">
                {t.processSection.title}
              </h2>
            </div>

            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {t.processSection.items.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-white p-6 shadow-[0_15px_35px_rgba(15,47,35,0.06)] sm:p-8"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[#C6A55C] sm:text-sm sm:tracking-[0.3em]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-[#0F2F23] sm:mt-4 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#59554d] sm:mt-4 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F2F23] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-14">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#D8BF86] sm:text-sm sm:tracking-[0.35em]">
                {t.testimonialsSection.label}
              </p>
              <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
                {t.testimonialsSection.title}
              </h2>
            </div>

            <div className="relative overflow-hidden">
              <button
                type="button"
                onClick={() => scrollReviews('left')}
                className="absolute left-2 top-1/2 z-30 hidden -translate-y-1/2 text-[#D8BF86]/40 drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] transition hover:text-[#D8BF86]/75 md:block"
                aria-label="Previous reviews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-14 w-14 lg:h-20 lg:w-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <div
                ref={reviewsRef}
                className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth px-0 sm:gap-6 md:px-14 lg:px-20"
              >
                {reviews.map((item, index) => (
                  <article
                    key={`${item.author}-${index}`}
                    className="flex min-h-[290px] min-w-[280px] flex-col justify-between rounded-2xl border border-[#29483c] bg-[#17392C] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:min-h-[320px] sm:min-w-[320px] sm:p-8"
                  >
                    <div>
                      <p className="text-[#D8BF86]">★★★★★</p>

                      <p className="mt-5 text-base leading-7 text-[#f0eadf] sm:mt-6 sm:text-lg sm:leading-8">
                        “{item.quote}”
                      </p>
                    </div>

                    <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#C6A55C] sm:mt-10 sm:text-sm sm:tracking-[0.22em]">
                      {item.author}
                    </p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollReviews('right')}
                className="absolute right-2 top-1/2 z-30 hidden -translate-y-1/2 text-[#D8BF86]/40 drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] transition hover:text-[#D8BF86]/75 md:block"
                aria-label="Next reviews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-14 w-14 lg:h-20 lg:w-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5 15.75 12l-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section id="areas" className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#8b7a55] sm:text-sm sm:tracking-[0.35em]">
              {t.areasSection.label}
            </p>

            <h2 className="font-serif text-3xl text-[#0F2F23] sm:text-4xl md:text-5xl">
              {t.areasSection.title}
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4">
              {t.areasSection.items.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[#dfd5c3] bg-[#F7F4EE] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#0F2F23] sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.22em]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#F1ECE2] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#8b7a55] sm:text-sm sm:tracking-[0.35em]">
                {t.contactSection.label}
              </p>

              <h2 className="font-serif text-3xl leading-tight text-[#0F2F23] sm:text-4xl md:text-5xl">
                {t.contactSection.title}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#59554d] sm:mt-6 sm:text-lg sm:leading-8">
                {t.contactSection.description}
              </p>

              <div className="mt-8 space-y-3 text-sm text-[#3f3b35] sm:mt-10 sm:space-y-4 sm:text-base">
                <p>
                  <span className="font-medium text-[#0F2F23]">
                    {t.contactSection.phone}:
                  </span>{' '}
                  +47 934 54 461
                </p>
                <p>
                  <span className="font-medium text-[#0F2F23]">
                    {t.contactSection.email}:
                  </span>{' '}
                  cleangreen.no@gmail.com
                </p>
                <p>
                  <span className="font-medium text-[#0F2F23]">
                    {t.contactSection.org}:
                  </span>{' '}
                  930 689 688
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] bg-white p-6 shadow-[0_20px_60px_rgba(15,47,35,0.08)] sm:p-8 md:p-10"
            >
              <div className="grid gap-4 sm:gap-5">
                <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-[#6f675b] sm:text-sm sm:tracking-[0.16em]">
                  {t.contactSection.form.name}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contactSection.form.placeholders.name}
                    className="h-12 rounded-md border border-[#ddd3c2] px-4 text-sm outline-none transition focus:border-[#C6A55C] sm:h-14 sm:text-base"
                    required
                  />
                </label>

                <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-[#6f675b] sm:text-sm sm:tracking-[0.16em]">
                  {t.contactSection.form.phone}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contactSection.form.placeholders.phone}
                    className="h-12 rounded-md border border-[#ddd3c2] px-4 text-sm outline-none transition focus:border-[#C6A55C] sm:h-14 sm:text-base"
                    required
                  />
                </label>

                <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-[#6f675b] sm:text-sm sm:tracking-[0.16em]">
                  {t.contactSection.form.email}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contactSection.form.placeholders.email}
                    className="h-12 rounded-md border border-[#ddd3c2] px-4 text-sm outline-none transition focus:border-[#C6A55C] sm:h-14 sm:text-base"
                    required
                  />
                </label>

                <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-[#6f675b] sm:text-sm sm:tracking-[0.16em]">
                  {t.contactSection.form.propertySize}
                  <input
                    type="text"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    placeholder={t.contactSection.form.placeholders.propertySize}
                    className="h-12 rounded-md border border-[#ddd3c2] px-4 text-sm outline-none transition focus:border-[#C6A55C] sm:h-14 sm:text-base"
                  />
                </label>

                <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-[#6f675b] sm:text-sm sm:tracking-[0.16em]">
                  {t.contactSection.form.serviceNeeded}
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="h-12 rounded-md border border-[#ddd3c2] px-4 text-sm outline-none transition focus:border-[#C6A55C] sm:h-14 sm:text-base"
                    required
                  >
                    <option value="" disabled>
                      {t.contactSection.form.serviceNeeded}
                    </option>
                    {t.contactSection.form.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-[#6f675b] sm:text-sm sm:tracking-[0.16em]">
                  {t.contactSection.form.message}
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contactSection.form.placeholders.message}
                    className="min-h-[140px] rounded-md border border-[#ddd3c2] px-4 py-4 text-sm outline-none transition focus:border-[#C6A55C] sm:min-h-[180px] sm:text-base"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 rounded-full border border-[#C6A55C] bg-[#C6A55C] px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[#0F2F23] transition hover:bg-[#d3b26f] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.24em]"
                >
                  {t.cta.sendRequest}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B2219] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-xl tracking-[0.14em] text-white sm:text-2xl sm:tracking-[0.18em]">
              CLEAN GREEN
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#C6A55C] sm:text-sm sm:tracking-[0.25em]">
              {t.footer.subtitle}
            </p>
          </div>
          <p className="text-sm text-[#d7d0c4]">{t.footer.copyright}</p>
        </div>
      </footer>

      <ServiceModal
        key={activeServiceIndex ?? 'closed'}
        services={t.services}
        activeIndex={activeServiceIndex}
        modalTexts={t.serviceModal}
        onClose={closeServiceModal}
        onChangeService={setActiveServiceIndex}
      />

      <WhatsAppButton />

      {toast && (
        <div className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center px-4">
          <div
            className={`relative w-full max-w-md overflow-hidden rounded-[1.5rem] border backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.22)] animate-toastIn sm:rounded-[1.75rem]
            ${
              toast.type === 'success'
                ? 'border-[#d8c08a]/40 bg-white/88 text-[#0F2F23]'
                : 'border-[#e7b7b7]/50 bg-white/90 text-[#0F2F23]'
            }`}
          >
            <div
              className={`absolute left-0 top-0 h-full w-1.5 ${
                toast.type === 'success' ? 'bg-[#C6A55C]' : 'bg-[#c96b6b]'
              }`}
            />

            <div className="flex items-center gap-4 px-5 py-4 pl-6 sm:px-6 sm:py-5 sm:pl-7">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base shadow-sm sm:h-11 sm:w-11 sm:text-lg
                ${
                  toast.type === 'success'
                    ? 'bg-[#0F2F23] text-white'
                    : 'border border-[#efcaca] bg-[#fff5f5] text-[#b94a48]'
                }`}
              >
                {toast.type === 'success' ? '✓' : '!'}
              </div>

              <div className="flex-1">
                <p className="font-serif text-xl leading-none text-[#0F2F23] sm:text-2xl">
                  {toast.type === 'success'
                    ? language === 'no'
                      ? 'Takk'
                      : 'Thank you'
                    : language === 'no'
                    ? 'Beklager'
                    : 'Sorry'}
                </p>

                <p className="mt-2 text-sm leading-6 text-[#4f4a42] sm:text-base">
                  {toast.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App