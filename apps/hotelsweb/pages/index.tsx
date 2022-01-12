import { ZodiacSignListContainer } from '@aster-daily-horoscope/shared-components';

export function Index() {
  return (
    <div className='bg-blue-500'>
      <div className="">
        <div className="">
          <div>
            <h1 className='text-3xl px-8 py-4 mx-auto w-2/3'>Daily Horoscope</h1>
          <ZodiacSignListContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
