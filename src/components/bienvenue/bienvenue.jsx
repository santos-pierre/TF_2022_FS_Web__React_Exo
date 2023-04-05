import PropTypes from 'prop-types';
import style from './bienvenue.module.css';
import clsx from 'clsx';

const Bienvenue = ({ nom, age }) => {

  return (
    <>
      <p className={clsx(style['welcome-msg'], style['bg'])}>Bienvenu {nom} sur l'app React</p>
      <p className={style['age-msg']}>Vous avez {age} ans !</p>
    </>
  );
};

Bienvenue.defaultProps = {
  age: 18
};

Bienvenue.propTypes = {
  nom : PropTypes.string.isRequired,
  age: PropTypes.number
};

export default Bienvenue;