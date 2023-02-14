import Link from 'next/link';
import { type FC } from 'react';

type Props = {
    href: string
};

export const SidebarCtaBlock: FC<Props> = ({href}) => {

  return (
    <div
    id="dropdown-cta"
    className="p-4 mt-6 rounded-lg bg-slate-300 dark:bg-slate-900"
    role="alert"
  >
    <div className="flex items-center mb-3">
      <span className="bg-slate-100 text-slate-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-slate-900">
        Hey
      </span>
    </div>
    <p className="mb-3 text-sm text-slate-800 dark:text-slate-400">
      If you like this personal site, please give me a start on github and
      fork it, it&apos;s open source.
    </p>
    <Link
      className="text-sm text-slate-800 underline hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
      href={href}
    >
      Repository link
    </Link>
  </div>
  );
};
