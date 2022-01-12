// @ts-nocheck
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  mapStateToProps,
  mapDispatchToProps,
  HoroscopeCardProps,
} from './horoscope-card.props';

export function HoroscopeCard({
  zodiacItem,
  horoscope,
  loadingStatus,
  getUserHoroscope,
}: HoroscopeCardProps) {
  useEffect(() => {
    if (zodiacItem?.zodiacSign) {
      getUserHoroscope(zodiacItem.zodiacSign, 'today');
    }
  }, [zodiacItem, getUserHoroscope]);

  const LoadingStatus = {
    Success: 'success',
    Error: 'error'
  }

  console.log('loadingStatus', loadingStatus)

  return (
    <div>
      <div>
        <div>
          <h3 className='p-4 text-center text-3xl'>{zodiacItem?.zodiacSign}</h3>
          <hr />
          <h4 className='text-center p-4 text-lg'>
            Your Horoscope for Today
          </h4>
          {loadingStatus === LoadingStatus.Success ? (
            <>
              <p style={{ marginTop: 10 }}>{horoscope.description}</p>
              <p style={{ marginTop: 10 }}>Mood: {horoscope.mood}</p>
              <p style={{ marginTop: 10 }}>Color: {horoscope.color}</p>
              <p style={{ marginTop: 10 }}>
                Compatibility: {horoscope.compatibility}
              </p>
              <p style={{ marginTop: 10 }}>
                Lucky Number: {horoscope.luckyNumber}
              </p>
              <p style={{ marginTop: 10 }}>
                Lucky Time: {horoscope.luckyTime}
              </p>
            </>
          ) : loadingStatus === LoadingStatus.Error ? (
            <p className='text-center'>Oops! Something went wrong. Please try agian.</p>
          ) : (
           <p></p>
          )}
        </div>
      </div>
    </div>
  );
}

export const HoroscopeCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HoroscopeCard);