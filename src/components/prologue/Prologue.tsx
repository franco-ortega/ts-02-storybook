import React from 'react';
import PropTypes from 'prop-types';

const Prologue: React.FC = ({ setUserName }) => {
  return (
    <section>
      <h1>Prologue</h1>
      <p>Intro and Instructions</p>
      <form action="">
        <input type="text" />
        <button>Submit</button>
      </form>
      
    </section>
  );
};

Prologue.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Prologue;
