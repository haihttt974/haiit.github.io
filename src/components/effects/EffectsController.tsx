import { Sparkles, Snowflake, Flower2, Box, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffects, EffectType } from '@/contexts/EffectsContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const effects: { type: EffectType; label: string; icon: React.ReactNode; description: string }[] = [
  { type: 'none', label: 'Tắt hiệu ứng', icon: <X className="h-4 w-4" />, description: 'Không có hiệu ứng nền' },
  { type: 'christmas', label: 'Giáng Sinh', icon: <Snowflake className="h-4 w-4" />, description: 'Tuyết rơi & đèn Noel' },
  { type: 'tet', label: 'Tết', icon: <Flower2 className="h-4 w-4" />, description: 'Hoa đào & lì xì' },
  { type: 'parallax', label: '3D Parallax', icon: <Box className="h-4 w-4" />, description: 'Hiệu ứng depth theo chuột' },
];

export const EffectsController = () => {
  const { currentEffect, setCurrentEffect } = useEffects();

  const currentEffectData = effects.find(e => e.type === currentEffect) || effects[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`fixed bottom-4 right-4 z-[60] rounded-full w-12 h-12 shadow-lg transition-all ${
            currentEffect !== 'none' 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary' 
              : 'bg-background/80 backdrop-blur-sm'
          }`}
        >
          <Sparkles className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mb-2">
        <div className="px-2 py-1.5 text-sm font-semibold">Hiệu ứng nền</div>
        <DropdownMenuSeparator />
        {effects.map((effect) => (
          <DropdownMenuItem
            key={effect.type}
            onClick={() => setCurrentEffect(effect.type)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentEffect === effect.type ? 'bg-primary/10 text-primary' : ''
            }`}
          >
            <div className={`p-1.5 rounded-md ${
              currentEffect === effect.type ? 'bg-primary text-primary-foreground' : 'bg-muted'
            }`}>
              {effect.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{effect.label}</span>
              <span className="text-xs text-muted-foreground">{effect.description}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
