interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="max-w-5xl mx-auto text-center pt-16 pb-6 px-6">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        {title}
      </h1>
      <p className="mt-4 text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}
