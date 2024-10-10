import { icons } from 'lucide-react';

const Icon = ({ name, color, size }: { name: string, color: string, size: string | number }) => {
    // @ts-expect-error
    const LucideIcon = icons[name];

    return <LucideIcon color={color} size={size} />;
};

export default Icon;