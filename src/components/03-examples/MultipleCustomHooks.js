import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    //Usando el custom Hook useFetch
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)

  return (
    <h1>Custom Hooks</h1>
  )
}
