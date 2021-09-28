import React from 'react';
import { Link } from 'react-router-dom';
import {
  // ChapterInfo, 
  completedChapters } from '../../utils/interfaces';
import chapterData from '../../data/chapterData.json';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';

interface Props {
  userName: string,
  completed: completedChapters
}

// ChapterList is an array of ChapterInfo objects/interfaces
// type ChapterList = ChapterInfo[]

const Chapters: React.FC<Props> = ({ userName, completed }) => {
  // locations is an array of objects; each object contains info of one chapter
  // const locations: ChapterList = Object.values(chapterData);
  // titles is an array of the title property from each chapter object
  // const titles = locations.map(location => location.title);
  const locations: string[] = Object.keys(chapterData);
  
  const uppercaseFirstLetter = (word: string): string => {
    return word.replace(/^./, firstLetter => firstLetter.toUpperCase());
  };
  
  const chapters: JSX.Element[] = locations.map((title: string, i: number) => (
    (completed[title])
      ?
      <li key={i}>{uppercaseFirstLetter(title)}<br />(completed)</li>
      :
      <Link to={`chapters/${title}`} key={i}>
        <li>
          {uppercaseFirstLetter(title)}
        </li>
      </Link>
  ));

  return (
    <section className={styles.Chapters}>
      <h1>Chapters</h1>
      <p>
        Hello, {userName}. This is where you create your story.
        Pick a selection from each chapter.
      </p>
      <ul>{chapters}</ul>
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired,
  completed: PropTypes.shape({}).isRequired
};

export default Chapters;
