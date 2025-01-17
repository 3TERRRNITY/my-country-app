'use client'

import { GetServerSideProps } from 'next'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { Country } from '@/lib/types'
import CountryItem from '@/components/CountryItem'

interface HomePageProps {
  countries: Country[]
}

const HomePage: React.FC<HomePageProps> = ({ countries }) => {
  const [countryList, setCountryList] = useState<Country[]>(countries)

  const handleDelete = useCallback((isoCode: string) => {
    setCountryList((prevList) =>
      prevList.filter((country) => country.iso_code3 !== isoCode),
    )
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Список стран</h1>
      <motion.ul layout>
        <AnimatePresence>
          {countryList.map((country) => (
            <CountryItem
              key={country.iso_code3}
              country={country}
              onDelete={handleDelete}
            />
          ))}
        </AnimatePresence>
      </motion.ul>
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
    console.error('Error fetching countries:', error)
    return {
      props: {
        countries: [],
      },
    }
  }
}

export default HomePage
