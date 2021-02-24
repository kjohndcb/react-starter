import { Root } from './Home.styles';

import { Heading } from '@/components/Typography';

export default function Home() {
  return (
    <Root>
      <img src={require('@/assets/images/logo.svg').default} alt="logo" />
      <Heading>Hello</Heading>
    </Root>
  );
}
