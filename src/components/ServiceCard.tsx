import type { ServiceItem } from '../types'

type ServiceCardProps = {
  service: ServiceItem
  learnMoreLabel: string
  onOpen: () => void
}

function ServiceCard({ service, learnMoreLabel, onOpen }: ServiceCardProps) {
  return (
    <article
      onClick={onOpen}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#ece4d6] bg-white shadow-[0_18px_40px_rgba(15,47,35,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(15,47,35,0.12)]"
    >
      <img
        src={service.image}
        alt={service.title}
        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-64 lg:h-72"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-2xl text-[#0F2F23] transition-colors duration-300 group-hover:text-[#C6A55C] sm:text-[2rem]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#5f5b54] sm:mt-4 sm:text-base">
          {service.shortDescription}
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onOpen()
          }}
          className="mt-auto inline-flex cursor-pointer items-center pt-5 text-xs uppercase tracking-[0.22em] text-[#C6A55C] sm:pt-6 sm:text-sm"
        >
          {learnMoreLabel}
        </button>
      </div>
    </article>
  )
}

export default ServiceCard