import { ZodiacSignListContainer } from '@aster-daily-horoscope/shared-components';
import { UiHeading } from '@aster-daily-horoscope/ui-heading';

export function Index() {
  return (
    <div className="px-8 mx-auto w-2/3">
      <UiHeading />
      {/* <h1 className="text-3xl px-8 py-8 mt-8 mx-auto w-2/3">Daily Horoscope</h1> */}
      <ZodiacSignListContainer />
    </div>
  );
}

export default Index;
