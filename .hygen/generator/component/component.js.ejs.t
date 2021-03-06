---
to: "<%= absPath %>/<%= componentName %>.js"
---
<% if (hasPropTypes) { %>import PropTypes from 'prop-types';

<% } _%>
import { Root } from './<%= componentName %>.styles';

export default function <%= componentName %>() {
  return <Root></Root>;
}
<% if (hasPropTypes) { %>
<%= componentName %>.propTypes = {};

<%= componentName %>.defaultProps = {};
<% } %>
