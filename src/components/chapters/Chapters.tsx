import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  userName: string
}

const Chapters: React.FC<Props> = ({ userName }) => {
  return (
    <section>
      Hello, {userName}. This is where you create your story.
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Chapters;
