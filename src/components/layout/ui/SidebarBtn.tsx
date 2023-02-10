import { ExternalLink, Github } from 'lucide-react';
import { type FC } from 'react';

type Props = {
    Icon: FC<{ className?: string}>,
    title: string
    hasExternalLink?: true
};

export const SidebarBtn: FC<Props> = ({ Icon, title, hasExternalLink }) => {

  return (
    <div className="flex items-center px-6 py-1 gap-4 w-full rounded-md text-zinc-900 hover:text-zinc-50 hover:bg-zinc-900">
        <Icon className="w-5" />
        <span className='text-sm font-medium'>{title}</span>
        {hasExternalLink && <ExternalLink className="ml-auto w-4" />}
  </div>
  );
};
