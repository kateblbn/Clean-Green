import { useEffect, useState } from 'react'
import type { ServiceItem, TranslationSchema } from '../types'

type ServiceModalProps = {
  services: ServiceItem[]
  activeIndex: number | null
  modalTexts: TranslationSchema['serviceModal']
  onClose: () => void
  onChangeService: (index: number) => void
}

function ServiceModal({
  services,
  activeIndex,
  modalTexts,
  onClose,
  onChangeService,
}: ServiceModalProps) {
  const [beforeAfterIndex, setBeforeAfterIndex] = useState(0)

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, onClose])

  if (activeIndex === null) return null

  const activeService = services[activeIndex]

  const handleServiceChange = (index: number) => {
    setBeforeAfterIndex(0)
    onChangeService(index)
  }
  const whatsappMessage = modalTexts.quickQuoteMessage.replace(
  '{service}',
  activeService.title
)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-[3px]"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={modalTexts.close}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-3xl text-[#2F2F2F] shadow-md transition hover:scale-105"
        >
          ×
        </button>

        <div className="max-h-[92vh] overflow-y-auto">
          <img
            src={activeService.image}
            alt={activeService.title}
            className="h-[260px] w-full object-cover md:h-[340px]"
          />

          <div className="px-6 py-8 md:px-10 md:py-10">
            <div className="border-b border-[#ece4d6] pb-6">
              <div className="mb-6 flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => handleServiceChange(index)}
                    className={`rounded-full px-5 py-2 text-sm transition ${
                      activeIndex === index
                        ? 'bg-[#C6A55C] text-[#0F2F23]'
                        : 'bg-[#F7F4EE] text-[#2F2F2F] hover:bg-[#ede5d8]'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>

              <h3 className="font-serif text-4xl text-[#0F2F23] md:text-5xl">
                {activeService.title}
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f5b54]">
                {activeService.fullDescription}
              </p>
            </div>

            <div className="grid gap-10 py-8 md:grid-cols-2">
              <div>
                <h4 className="font-serif text-3xl text-[#0F2F23]">
                  {modalTexts.includedTitle}
                </h4>

                <div className="mt-6 space-y-4">
                  {activeService.included.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="mt-1 text-xl text-[#C6A55C]">✓</div>
                      <p className="text-lg leading-8 text-[#3f3b35]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-3xl text-[#0F2F23]">
                  {modalTexts.beforeAfterTitle}
                </h4>

                <div className="mt-6 overflow-hidden rounded-2xl border border-[#ece4d6] bg-[#fcfaf7] p-4 shadow-sm">
                  <div className="group relative">
                    <img
                      src={activeService.beforeAfter[beforeAfterIndex]}
                      alt={`service image ${beforeAfterIndex + 1}`}
                      className="h-[360px] w-full rounded-xl object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setBeforeAfterIndex((prev) =>
                          prev === 0
                            ? activeService.beforeAfter.length - 1
                            : prev - 1
                        )
                      }
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/70 text-xl text-[#2F2F2F] opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white group-hover:opacity-100"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setBeforeAfterIndex(
                          (prev) => (prev + 1) % activeService.beforeAfter.length
                        )
                      }
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/70 text-xl text-[#2F2F2F] opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white group-hover:opacity-100"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/60 px-3 py-2 backdrop-blur-sm">
                      {activeService.beforeAfter.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setBeforeAfterIndex(index)}
                          aria-label={`Slide ${index + 1}`}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            beforeAfterIndex === index
                              ? 'w-6 bg-[#C6A55C]'
                              : 'w-2.5 bg-[#d8cfbf]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#ece4d6] pt-8">
              <div className="flex flex-col items-start gap-5">
                <p className="text-sm text-[#6f675b]">
                  {modalTexts.quickAnswer}{' '}
                  <a
                    href="https://wa.me/4793454461"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium t  ext-[#0F2F23] underline-offset-4 hover:underline"
                  >
                    {modalTexts.whatsappChat}
                  </a>
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex rounded-full border border-[#C6A55C] bg-[#C6A55C] px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-[#0F2F23] transition hover:bg-[#d3b26f]"
                  >
                    {modalTexts.order}
                  </a>

                  <a
                    href={`https://wa.me/4793454461?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[#C6A55C] bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-[#0F2F23] transition hover:bg-[#F7F4EE]"
                  >
                    {modalTexts.quickQuote}
                  </a>
                </div>
              </div>
            </div>       
        </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal