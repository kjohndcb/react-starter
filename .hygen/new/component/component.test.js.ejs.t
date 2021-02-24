---
to: "<%= isTestIncluded ? `${absPath}/${componentName}.test.js` : null %>"
---
import { render } from '@testing-library/react';
import <%= componentName %> from './<%= componentName %>';

test('renders without errors', () => {
  render(<<%= componentName %> />);
});
