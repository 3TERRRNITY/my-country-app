'use client'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { Country } from '@/lib/types'

interface HomePageProps {
  countries: Country[]
}

const HomePage: React.FC<HomePageProps> = ({ countries }) => {
  const [countryList, setCountryList] = useState<Country[]>(countries)

  const handleDelete = (isoCode: string) => {
    setCountryList((prevList) =>
      prevList.filter((country) => country.iso_code3 !== isoCode),
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список стран</h1>
      <motion.div layout>
        <AnimatePresence>
          {countryList.map((country) => (
            <motion.li
              key={country.iso_code3}
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{
                opacity: { duration: 0.3 },
                x: { duration: 0.5 },
              }}
              layout
              className="flex items-center justify-between p-2 border-b"
            >
              <div className="flex items-center space-x-2">
                <img
                  src={country.flag_url}
                  alt={country.name_ru}
                  className="w-6 h-4"
                />
                <span>{country.name_ru}</span>
              </div>
              <button
                onClick={() => handleDelete(country.iso_code3)}
                className="text-red-500 hover:text-red-700"
              >
                Удалить
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(
      'https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json',
    )
    return {
      props: {
        countries: response.data,
      },
    }
  } catch (error) {
    return {
      props: {
        countries: [],
      },
    }
  }
}

export default HomePage
