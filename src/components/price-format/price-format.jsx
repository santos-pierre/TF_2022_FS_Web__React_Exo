import PropTypes from 'prop-types';

/**
 * Composant pour afficher un prix au format belge
 * @param {{value: number, className: string, style: object }} props 
 * @returns {JSX.Element}
 */
const PriceFormat = ({ value, className, style }) => {

  const price = value.toLocaleString('fr-be', {
    style: 'currency',
    currency: 'EUR'
  });

  return (
    <span className={className} style={style}>
      {price}
    </span>
  );
};

PriceFormat.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default PriceFormat;