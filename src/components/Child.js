import PropTypes from 'prop-types';

function Child(props) {
  return (
    <p>
      {props.name}
      {props.text}
    </p>
  );
}

Child.defaultProps = {
  name: 'Pony',
  text: '沒有',
};

Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Child;
