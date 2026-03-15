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
        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-3xl text-[#0F2F23] transition-colors duration-300 group-hover:text-[#C6A55C]">
          {service.title}
        </h3>

        <p className="mt-4 text-base leading-7 text-[#5f5b54]">
          {service.shortDescription}
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onOpen()
          }}
          className="mt-auto pt-6 inline-flex items-center text-sm uppercase cursor-pointer tracking-[0.2em] text-[#C6A55C]"
        >
          {learnMoreLabel}
        </button>
      </div>
    </article>
  )
}

export default ServiceCard