import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "~/lib/utils";
import { HtmlHTMLAttributes } from "react";

const components = {
  h1: ({ className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "dark:text-slate-200 mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "dark:text-slate-200 mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "dark:text-slate-200 mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "dark:text-slate-200 mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "dark:text-slate-200 mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "dark:text-slate-200 mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: HtmlHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={""}
      className={cn(
        "dark:text-slate-200 font-medium text-zinc-900 underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("dark:text-slate-200 leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: HtmlHTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("dark:text-slate-200 my-6 ml-6 list-disc", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: HtmlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("dark:text-slate-200 my-6 ml-6 list-decimal", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: HtmlHTMLAttributes<HTMLLIElement>) => (
    <li className={cn("dark:text-slate-200 mt-2", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: HtmlHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "dark:text-slate-200 mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("dark:text-slate-200 rounded-md border border-zinc-200", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: HtmlHTMLAttributes<HTMLHRElement>) => (
    <hr
      {...props}
      className="dark:text-slate-200 my-4 border-zinc-200 md:my-8"
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="dark:text-slate-200 w-full my-6 overflow-y-auto">
      <table
        className={cn("dark:text-slate-200 w-full", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "dark:text-slate-200 m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
        className
      )}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: HtmlHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: HtmlHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn(
        "dark:text-slate-200 border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HtmlHTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "dark:text-slate-200 mt-6 mb-4 overflow-x-auto rounded-lg bg-zinc-900 py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HtmlHTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "dark:text-slate-200 relative rounded border bg-zinc-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-zinc-600",
        className
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="dark:text-slate-200 mdx">
      <Component components={components} />
    </div>
  );
}
