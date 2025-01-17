import { motion } from 'framer-motion'
import { Country } from '@/lib/types'
import { fadeInOut } from '@/lib/animations'
import Image from 'next/image'

interface CountryItemProps {
  country: Country
  onDelete: (isoCode: string) => void
}

const CountryItem: React.FC<CountryItemProps> = ({ country, onDelete }) => (
  <motion.li
    key={country.iso_code3}
    initial={fadeInOut.initial}
    animate={fadeInOut.animate}
    exit={fadeInOut.exit}
    transition={fadeInOut.transition}
    layout
    className="flex items-center justify-between p-2 border-b"
  >
    <div className="flex items-center space-x-2">
      {country.flag_url ? (
        <div className="relative w-6 h-4">
          <Image
            src={
              country.flag_url?.startsWith('//')
                ? 'https:' + country.flag_url
                : country.flag_url
            }
            alt={country.name_ru}
            fill
            sizes="(max-width: 768px) 22px, 44px"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-6 h-4 bg-gray-200" />
      )}

      <span>{country.name_ru}</span>
    </div>
    <button
      onClick={() => onDelete(country.iso_code3)}
      className="text-red-500 hover:text-red-700"
    >
      Удалить
    </button>
  </motion.li>
)

export default CountryItem
