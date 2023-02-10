import { ExternalLink, Github } from 'lucide-react';
import { type FC } from 'react';

type Props = {
    Icon: FC<{ className?: string}>,
    title: string
    onClick?: () => void
    hasExternalLink?: true
};

export const SidebarBtn: FC<Props> = ({ Icon, title, onClick, hasExternalLink }) => {

  return (
    <div onClick={onClick} className="group flex items-center pl-2 pr-6 py-1 gap-4 w-full rounded-md text-slate-900 hover:text-slate-50 hover:bg-slate-900">
        <Icon className="w-5 text-slate-700 group-hover:text-slate-50" />
        <span className='text-sm font-medium'>{title}</span>
        {hasExternalLink && <ExternalLink className="ml-auto w-[13px] text-slate-500 group-hover:text-slate-50" />}
  </div>
  );
};
