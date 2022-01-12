import styles from './index.module.css';
import { ZodiacSignListContainer } from '@aster-daily-horoscope/shared-components';

export function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome hotelsweb 👋
            </h1>
          <ZodiacSignListContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
