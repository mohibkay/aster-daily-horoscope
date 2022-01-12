import React from 'react'
import { AdhZodiacSignItem, AdhZodiacSignList } from '@aster-daily-horoscope/models'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import {
  ZodiacSignListProps,
  mapDispatchToProps,
} from './zodiac-sign-list.props';


export function ZodiacSignList({setUserZodiacSignItem}: ZodiacSignListProps) {
  const router = useRouter()
  const handleZodiacItemClick = (item: AdhZodiacSignItem) => {
    setUserZodiacSignItem(item)
    router.push(`${item.zodiacSign}`)
  }

  return (
    <ul className='px-8 w-2/3 mx-auto'>
      {AdhZodiacSignList.map(item => {
        return (
          <div key={item.zodiacSign} className='border-b'>
            <li className='cursor-pointer p-2 px-0 hover:text-blue-500 hover:shadow text-xl' onClick={() => handleZodiacItemClick(item)}>{item.zodiacSign}</li>
          </div>
        )
      }) }
    </ul>
    )
}

export const ZodiacSignListContainer = connect(
  null,
  mapDispatchToProps
)(ZodiacSignList);