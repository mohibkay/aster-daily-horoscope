import React from 'react'
import { AdhZodiacSignItem, AdhZodiacSignList } from '@aster-daily-horoscope/models'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import {
  ZodiacSignListProps,
  mapDispatchToProps,
} from './zodiac-sign-list.props';


export function ZodiacSignList() {
  const router = useRouter()
  const handleZodiacItemClick = (item: AdhZodiacSignItem) => {
    console.log(item.zodiacSign)
    router.push(item.zodiacSign)
  }
  
  return (
    <ul>
      {AdhZodiacSignList.map(item => {
        return (
          <div key={item.zodiacSign} style={{borderBottom: '1px solid #ddd'}}>
            <li style={{cursor: 'pointer', padding: '.5rem', listStyle: 'none'}} onClick={() => handleZodiacItemClick(item)}>{item.zodiacSign}</li>
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