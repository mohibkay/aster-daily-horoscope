import { AdhHoroscopeDay, AdhZodiacSign } from '@aster-daily-horoscope/models';

import { AztroHoroscpeResponse } from './aster-horoscope-response.interface';

async function getHoroscope(
  zodiacSign: AdhZodiacSign,
  day: AdhHoroscopeDay
): Promise<AztroHoroscpeResponse> {
  const response = await fetch(
    `https://aztro.sameerkumar.website/?sign=${zodiacSign}&day=${day}`
  );
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const asterService = { getHoroscope };