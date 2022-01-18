import styles from './app.module.css';
import NxWelcome from './nx-welcome';
// import {
//   ZodiacSignListContainer,
//   HoroscopeCardContainer,
// } from '@aster-daily-horoscope/ui';
import { UiHeading, Login } from '@aster-daily-horoscope/ui-heading';

export function App() {
  return (
    <>
      <h1>Hello world</h1>
      <UiHeading />
      {/* <ZodiacSignListContainer /> */}
      <Login />
      <div />
    </>
  );
}

export default App;
