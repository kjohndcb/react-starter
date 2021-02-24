import PropTypes from 'prop-types';

import { H1, H2, H3, H4, H5, H6 } from './Heading.styles';

export default function Heading({ level, ...props }) {
  switch (`${level}`) {
    case '1':
      return <H1 {...props} />;
    case '2':
      return <H2 {...props} />;
    case '3':
      return <H3 {...props} />;
    case '4':
      return <H4 {...props} />;
    case '5':
      return <H5 {...props} />;
    case '6':
      return <H6 {...props} />;
    default:
      return <H1 {...props} />;
  }
}

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', 1, 2, 3, 4, 5, 6]),
};

Heading.defaultProps = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  level: '1',
};
