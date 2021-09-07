import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  userName: string
}

const Chapters: React.FC<Props> = ({ userName }) => {
  return (
    <section>
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
