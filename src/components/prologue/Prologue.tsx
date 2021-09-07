import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Prologue: React.FC<Props> = ({ setUserName }) => {
  const history = useHistory();

  // eslint-disable-next-line max-len
  const onNameSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log('Name form clicked');
    history.push('/chapters');
  };

  return (
    <section>
      <h1>Prologue</h1>
      <p>Intro and Instructions</p>
      <form onSubmit={onNameSubmit}>
        <label htmlFor="user-name">
          <input
            type="text"
            id="user-name"
            placeholder="Enter name"
            onChange={(e) => setUserName(e.target.value)} />
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
