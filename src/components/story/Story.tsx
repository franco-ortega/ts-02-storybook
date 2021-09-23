import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  userData: string[]
}

const Story: React.FC<Props> = ({ userData }) => {
  console.log(userData);
  return (
    <div>
      Your story...
    </div>
  );
};

Story.propTypes = {
  userData: PropTypes.array.isRequired
};

export default Story;
