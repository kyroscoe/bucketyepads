import { cn } from '@/components/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center')}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-red">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
