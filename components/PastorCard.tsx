import Image from 'next/image';

export default function PastorCard() {
  return (
    <div className="group relative w-full max-w-[320px] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-primary h-24 w-full absolute top-0 left-0 z-0 opacity-10"></div>

      <div className="relative z-10 flex flex-col items-center pt-8 pb-8 px-6 text-center">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-primary/20">
          <Image
            src="/church/pastor.png"
            alt="Apostle Kaikede Olowo John Stephen"
            fill
            className="object-cover object-top"
          />
        </div>

        <h3 className="text-lg font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          Apostle Kaikede Olowo John Stephen
        </h3>

        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-4">
          Senior Pastor
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed italic">
          "Raising, equipping, and sending believers into every sphere of life."
        </p>
      </div>

      <div className="bg-muted/30 py-3 px-6 border-t border-border/50 flex justify-center">
        <span className="text-xs font-medium text-muted-foreground">Visionary Leader</span>
      </div>
    </div>
  );
}