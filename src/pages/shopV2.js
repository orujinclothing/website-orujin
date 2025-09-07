import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';

const AboutPage = props => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = elementReference => {
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
          maxWidth="900px"
          image="/about.png"
          title={`Sydney\nBorn from the underground, built for the streets`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to="#history">
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to="#values">
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to="#sustainability"
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size="large" spacing="min">
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              What started as a small workshop has grown into a brand that thrives
              on raw edges, dark tones, and uncompromising detail. Sydney was built
              to break from the ordinary — clothes that aren’t polished to
              perfection, but cut for real streets and real people.
            </p>
            <br />
            <br />
            <p>
              From our earliest tees to jackets and accessories, we’ve kept one
              rule: authenticity first. Every piece carries the weight of craft,
              stripped back to its essentials and sharpened into something bold,
              wearable, and timeless.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt="shirt brand" src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size="large" spacing="min">
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                We design clothing meant to outlast trends. Heavy fabrics,
                oversized fits, and clean cuts define our style. Each drop is
                small, deliberate, and crafted with intent — never mass-produced.
                Every piece is built to be worn hard and lived in.
              </p>
              <ol>
                <li>Durable, everyday wear</li>
                <li>Limited, not disposable</li>
                <li>Crafted with natural and lasting materials</li>
              </ol>
              <img alt="founder" src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Sustainability</h3>
            <div id="#sustainability" ref={sustainabilityRef}>
              <p>
                We believe the future of streetwear is sustainable. Our fabrics
                are chosen for strength and longevity — cottons, wools, and blends
                that hold their shape and age with character.
              </p>
              <p>
                Each piece is cut to reduce waste and made in limited numbers.
                Slow fashion is at the core of what we do: fewer products,
                stronger construction, longer life.
              </p>
              <p>
                Clothes shouldn’t be disposable. They should carry stories. Our
                commitment is to create gear that lasts, in both style and
                durability.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt="shirt backwards" src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
