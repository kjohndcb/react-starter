---
to: "<%= absPath %>/<%= componentName %>.js"
---
import { Root } from './<%= componentName %>.styles';

export default function <%= componentName %>() {
  return <Root></Root>;
}
