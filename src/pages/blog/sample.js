import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'Fashion'}
              title={'The Rise of Orujin Clothing'}
              image={'/blogFeatured.png'}
              alt={'Orujin Clothing Featured Look'}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Orujin Clothing was born from a love for bold self-expression
                  and the belief that fashion should be both fearless and
                  inclusive. Our collections bring together minimal design with
                  gothic undertones, creating a unique style that stands out on
                  the street and on the stage.
                </p>
                <p className={styles.blogParagraph}>
                  Each piece is carefully crafted to balance comfort with
                  statement design — from oversized hoodies and layered jackets
                  to versatile trousers that move with you. At Orujin, clothing
                  is more than fabric; it’s a way of telling the world who you
                  are without saying a word.
                </p>
                <p className={styles.blogParagraph}>
                  We collaborate with emerging designers and artists to keep our
                  collections fresh, experimental, and culturally relevant. This
                  spirit of collaboration ensures every drop feels original and
                  limited, giving our community something they can truly own.
                </p>
                <p className={styles.blogParagraph}>
                  Sustainability is also a core value. By focusing on smaller
                  runs, ethical sourcing, and timeless silhouettes, Orujin
                  creates clothing designed to last — both in quality and in
                  style.
                </p>
              </div>

              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/cloth.png')} alt={'Orujin Look 1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/collections/collection1.png')} alt={'Orujin Look 2'} />
                </div>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>Defining a New Standard</h2>
                <p className={styles.blogParagraph}>
                  We see fashion as a form of rebellion — a way to challenge
                  trends while creating your own. Orujin pieces are designed to
                  be layered, styled, and reinvented depending on the wearer’s
                  mood. There are no rules, only possibilities.
                </p>
                <p className={styles.blogParagraph}>
                  Whether it’s a casual day out or a late-night show, our
                  collections adapt to every setting. The result is clothing
                  that feels raw, authentic, and deeply personal to everyone who
                  wears it.
                </p>
                <p className={styles.blogParagraph}>
                  This is just the beginning. Orujin Clothing is more than a
                  brand — it’s a movement. And you’re invited to be a part of
                  it.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
