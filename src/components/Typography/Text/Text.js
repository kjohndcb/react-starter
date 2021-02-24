import PropTypes from 'prop-types';

import { Root } from './Text.styles';

export default function Text(props) {
  return <Root {...props} />;
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Text.defaultProps = {
  children: '',
};
