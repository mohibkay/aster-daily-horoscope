import { AdhZodiacSign } from '@aster-daily-horoscope/models';
import { HoroscopeCardContainer } from '@aster-daily-horoscope/shared-components'
import React from 'react';

/* eslint-disable-next-line */
export interface HoroscopeCardProps {}

export function HoroscopeCard(props: HoroscopeCardProps) {
  return (
    <div className='px-8 w-2/3 mx-auto'>
      <HoroscopeCardContainer />
    </div>
  );
}

export default HoroscopeCard;