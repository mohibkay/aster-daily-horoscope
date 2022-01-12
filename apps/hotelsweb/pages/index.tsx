import { ZodiacSignListContainer } from '@aster-daily-horoscope/shared-components';

export function Index() {
  return (
    <div className="bg-green-300">
      <h1 className='text-3xl px-8 py-8 mt-8 mx-auto w-2/3'>Daily Horoscope</h1>
      <ZodiacSignListContainer />
    </div>
  );
}

export default Index;
