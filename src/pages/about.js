import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Orujin Clothing \n Built for the New Generation`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded with a vision to redefine streetwear, Orujin Clothing is
              an independent brand with a bold edge. We make everyday essentials
              with a focus on individuality and culture.
            </p>
            <br />
            <br />
            <p>
              From oversized tees to signature hoodies, our journey has always
              been about pushing boundaries in both style and comfort. Every
              piece reflects the energy of today’s youth and the legacy we’re
              building for tomorrow.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                Orujin was born to celebrate creativity and fearless
                self-expression. What started as a simple vision — to make
                clothing that feels as good as it looks — has grown into a
                culture that inspires our community to stand out and stay true.
              </p>
              <ol>
                <li>Be sustainable and future-focused</li>
                <li>Craft pieces that are unique, not mass-produced</li>
                <li>Use high-quality, responsible materials</li>
              </ol>
              <img alt={'founder'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                From day one, Orujin has been committed to doing better — for
                both people and the planet. We focus on using durable fabrics,
                mindful production, and creating pieces that last longer than
                just one season.
              </p>
              <p>
                Every hoodie, tee, or jacket is designed with intention —
                minimal waste, quality construction, and timeless style that
                avoids fast fashion trends.
              </p>
              <p>
                Our mission is simple: make streetwear that not only represents
                individuality but also respects the world we live in.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
