import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';
import chapterData from '../../data/chapterData.json';

interface Props {
  userName: string
  // completed: {[key: string]: boolean}
}

type ChapterInfo = {
  title: string,
  choices: string[]
}

type ChapterList = ChapterInfo[]

const Chapters: React.FC<Props> = ({ userName }) => {
  const locations: ChapterList = Object.values(chapterData);
  // const [completed, setCompleted] = useState<{[key: string]: boolean}>({});

  // console.log(setCompleted);
  // console.log(completed);

  // const completedChapters: {[key: string]: boolean} = {};

  // locations.forEach(location => {
  //   const key = location.title;
  //   console.log('KEY: ' + key);
  //   completed[key] = false;
  // });

  // console.log(completedChapters);


  const titles = locations.map(location => location.title);
  console.log(titles);

  // eslint-disable-next-line max-len
  const chapters: JSX.Element[] = titles.map((title: string, i: number) => (
    <Link to={`chapters/${title.toLowerCase()}`} key={i}>
      <li>
        {title}
      </li>
    </Link>
  ));

  return (
    <section className={styles.Chapters}>
      <h1>Chapters</h1>
      <p>
        Hello, {userName}. This is where you create your story.
      </p>
      <ul>{chapters}</ul>
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired
  // completed: PropTypes.object.isRequired
};

export default Chapters;
