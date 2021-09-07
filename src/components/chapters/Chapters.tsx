import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';

interface Props {
  userName: string
}

const Chapters: React.FC<Props> = ({ userName }) => {

  const testChoices: string[] = ['one', 'two', 'three', 'four', 'five', 'six'];

  // eslint-disable-next-line max-len
  const chapterOptions: JSX.Element[] = testChoices.map((choice: string, i: number) => (
    <li key={i}>{choice}</li>
  ));

  return (
    <section className={styles.Chapters}>
      <h1>Chapters</h1>
      <p>
        Hello, {userName}. This is where you create your story.
      </p>
      <ul>{chapterOptions}</ul>
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Chapters;
