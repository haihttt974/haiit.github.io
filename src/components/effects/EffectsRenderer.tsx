import { useEffects } from '@/contexts/EffectsContext';
import { ChristmasEffect } from './ChristmasEffect';
import { TetEffect } from './TetEffect';
import { ParallaxEffect } from './ParallaxEffect';

export const EffectsRenderer = () => {
  const { currentEffect } = useEffects();

  switch (currentEffect) {
    case 'christmas':
      return <ChristmasEffect />;
    case 'tet':
      return <TetEffect />;
    case 'parallax':
      return <ParallaxEffect />;
    default:
      return null;
  }
};
