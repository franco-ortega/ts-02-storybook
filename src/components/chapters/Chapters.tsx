import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';

interface Props {
  userName: string
}

const Chapters: React.FC<Props> = ({ userName }) => {
  return (
    <section className={styles.Chapters}>
      <h1>Chapters</h1>
      <p>
        Hello, {userName}. This is where you create your story.
      </p>
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Chapters;
