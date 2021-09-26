import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import styles from './Prologue.module.css';

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Prologue: React.FC<Props> = ({ setUserName }) => {
  const history = useHistory();

  // eslint-disable-next-line max-len
  const onNameSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    history.push('/chapters');
  };

  return (
    <section className={styles.Prologue}>
      <h1>Prologue</h1>
      <p>
        Welcome to this storybook world. When you submit your name below,
        you will be able to visit different lands to compose your very own
        story.
      </p>
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
