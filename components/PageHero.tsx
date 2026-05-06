import { Container } from '@/components/Container';

export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-brand-gray to-white py-16">
      <Container>
        <h1 className="max-w-4xl text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </Container>
    </section>
  );
}
