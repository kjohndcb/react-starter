---
to: "<%= isTestIncluded ? `${absPath}/__tests__/${componentName}.test.js` : null %>"
---
import { render } from '@testing-library/react';
import <%= componentName %> from '@/<%= path %>';

test('renders without errors', () => {
  render(<<%= componentName %> />);
});
