import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Prologue: React.FC<Props> = ({ setUserName }) => {
  return (
    <section>
      <h1>Prologue</h1>
      <p>Intro and Instructions</p>
      <form action="">
        <label htmlFor="">
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
      
    </section>
  );
};

Prologue.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Prologue;
