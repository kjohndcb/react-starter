import { Root } from './Home.styles';

import { H1 } from '@/components/Typography';

export default function Home() {
  return (
    <Root>
      <H1>React Starter</H1>
      <img src={require('@/assets/images/logo.svg').default} alt="logo" />
    </Root>
  );
}
