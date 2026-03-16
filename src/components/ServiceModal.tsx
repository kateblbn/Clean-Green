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
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

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

  const goToPrevImage = () => {
    setBeforeAfterIndex((prev) =>
      prev === 0 ? activeService.beforeAfter.length - 1 : prev - 1
    )
  }

  const goToNextImage = () => {
    setBeforeAfterIndex((prev) => (prev + 1) % activeService.beforeAfter.length)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return

    const distance = touchStartX - touchEndX
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      goToNextImage()
    }

    if (distance < -minSwipeDistance) {
      goToPrevImage()
    }
  }

  const whatsappMessage = modalTexts.quickQuoteMessage.replace(
    '{service}',
    activeService.title
  )

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-3 py-4 backdrop-blur-[3px] sm:px-4 sm:py-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:rounded-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={modalTexts.close}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-[#2F2F2F] shadow-md transition hover:scale-105 sm:right-5 sm:top-5 sm:h-11 sm:w-11 sm:text-3xl"
        >
          ×
        </button>

        <div className="max-h-[94vh] overflow-y-auto">
          <img
            src={activeService.image}
            alt={activeService.title}
            className="h-[220px] w-full object-cover sm:h-[260px] md:h-[340px]"
          />

          <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
            <div className="border-b border-[#ece4d6] pb-6">
              <div className="mb-5 flex flex-wrap gap-2 sm:mb-6 sm:gap-3">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => handleServiceChange(index)}
                    className={`rounded-full px-4 py-2 text-xs transition sm:px-5 sm:text-sm ${
                      activeIndex === index
                        ? 'bg-[#C6A55C] text-[#0F2F23]'
                        : 'bg-[#F7F4EE] text-[#2F2F2F] hover:bg-[#ede5d8]'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>

              <h3 className="font-serif text-3xl text-[#0F2F23] sm:text-4xl md:text-5xl">
                {activeService.title}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f5b54] sm:mt-5 sm:text-lg sm:leading-8">
                {activeService.fullDescription}
              </p>
            </div>

            <div className="grid gap-8 py-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <h4 className="font-serif text-2xl text-[#0F2F23] sm:text-3xl">
                  {modalTexts.includedTitle}
                </h4>

                <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                  {activeService.included.map((item) => (
                    <div key={item} className="flex items-start gap-3 sm:gap-4">
                      <div className="mt-1 text-lg text-[#C6A55C] sm:text-xl">✓</div>
                      <p className="text-base leading-7 text-[#3f3b35] sm:text-lg sm:leading-8">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-2xl text-[#0F2F23] sm:text-3xl">
                  {modalTexts.beforeAfterTitle}
                </h4>

                <div className="mt-5 overflow-hidden rounded-2xl border border-[#ece4d6] bg-[#fcfaf7] p-3 shadow-sm sm:mt-6 sm:p-4">
                  <div
                    className="group relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <img
                      src={activeService.beforeAfter[beforeAfterIndex]}
                      alt={`service image ${beforeAfterIndex + 1}`}
                      className="h-[240px] w-full rounded-xl object-cover sm:h-[300px] md:h-[360px]"
                    />

                    <button
                      type="button"
                      onClick={goToPrevImage}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/70 text-lg text-[#2F2F2F] opacity-100 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white sm:left-4 sm:h-11 sm:w-11 sm:text-xl sm:opacity-0 sm:group-hover:opacity-100"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={goToNextImage}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/70 text-lg text-[#2F2F2F] opacity-100 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white sm:right-4 sm:h-11 sm:w-11 sm:text-xl sm:opacity-0 sm:group-hover:opacity-100"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/60 px-3 py-2 backdrop-blur-sm sm:bottom-4">
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
                <p className="text-sm leading-6 text-[#6f675b]">
                  {modalTexts.quickAnswer}{' '}
                  <a
                    href="https://wa.me/4793454461"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0F2F23] underline-offset-4 hover:underline"
                  >
                    {modalTexts.whatsappChat}
                  </a>
                </p>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex justify-center rounded-full border border-[#C6A55C] bg-[#C6A55C] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#0F2F23] transition hover:bg-[#d3b26f] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.24em]"
                  >
                    {modalTexts.order}
                  </a>

                  <a
                    href={`https://wa.me/4793454461?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full border border-[#C6A55C] bg-transparent px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#0F2F23] transition hover:bg-[#F7F4EE] sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.24em]"
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