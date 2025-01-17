import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Country {
  name: string
  flag: string
}

interface CountriesState {
  countries: Country[]
}

const initialState: CountriesState = {
  countries: [],
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state.countries = action.payload
    },
    removeCountry: (state, action: PayloadAction<string>) => {
      state.countries = state.countries.filter(
        (country) => country.name !== action.payload,
      )
    },
  },
})

export const { setCountries, removeCountry } = countriesSlice.actions
export default countriesSlice.reducer
