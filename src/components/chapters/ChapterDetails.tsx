import React from 'react';
import { useParams } from 'react-router-dom';
import lands from '../../data/chapterData.json';

interface Location {
 title: string,
  choices: string[]
}

const ChapterDetails: React.FC = () => {
  const { locale } = useParams<{ locale: keyof typeof lands }>();

  const setting: Location = lands[locale];
  const header = setting.title;
  const options = setting.choices.map((choice, i) => (
    <li key={i}>{choice}</li>
  ));

  return (
    <main>
      <h1>{header}</h1>
      <p>Choose your words wisely.</p>
      <ul>{options}</ul>
    </main>
  );
};

export default ChapterDetails;
