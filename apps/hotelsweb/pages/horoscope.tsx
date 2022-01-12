import { AdhZodiacSign } from '@aster-daily-horoscope/models';
import React from 'react';

/* eslint-disable-next-line */
export interface HoroscopeCardProps {}

export function HoroscopeCard(props: HoroscopeCardProps) {
  return (
    <div>
      <h3>zodiac-leo</h3>
      <div>{AdhZodiacSign.Leo}</div>
      <hr />
      <h4 style={{ width: '100%', textAlign: 'center' }}>
        Your Horoscope for Today
      </h4>
    </div>
  );
}

export default HoroscopeCard;