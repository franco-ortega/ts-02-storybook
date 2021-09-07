import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';

interface Props {
  userName: string
}

interface Land {
  title: string
}

const Chapters: React.FC<Props> = ({ userName }) => {

  const testChoices: Land[] = [
    { title: 'Forest' },
    { title: 'Mountains' },
    { title: 'Swamp' }
  ];

  // eslint-disable-next-line max-len
  const chapterOptions: JSX.Element[] = testChoices.map((choice: Land, i: number) => (
    <Link to={choice.title.toLowerCase()} key={i}>
      <li>
        {choice.title}
      </li>
    </Link>
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
