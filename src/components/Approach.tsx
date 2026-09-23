import { useReveal } from '@/hooks/useReveal';

type Step = {
  num: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    num: '01',
    title: 'Start with South Asian Health Risks',
    description: 'We begin by understanding your unique risk profile — not generic population averages. South Asian bodies respond differently to food, stress, and lifestyle, and your plan should reflect that reality.',
  },
  {
    num: '02',
    title: 'Personalize the Plan',
    description: 'No copy-paste meal plans. Your guidance is tailored to your biology, your goals, your family history, and your day-to-day routine — built around you, not around a template.',
  },
  {
    num: '03',
    title: 'Work with Your Food, Not Against It',
    description: 'Rice, roti, dal, sabzi — these aren\'t problems to eliminate. We help you eat the foods you love in ways that support your health, so you never have to choose between culture and wellness.',
  },
  {
    num: '04',
    title: 'Make It Work in American Life',
    description: 'Eating out, commuting, travel, busy weeks, family gatherings — your plan fits the life you actually live in the U.S., not an idealized routine that falls apart on Monday morning.',
  },
  {
    num: '05',
    title: 'Build Habits That Last',
    description: 'No quick fixes or crash diets. We focus on sustainable changes you can maintain for years — because real health isn\'t a 30-day challenge, it\'s a lifelong practice.',
  },
];

function StepRow({ step, index }: { step: Step; index: number }) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div ref={ref} className="reveal relative">
      {index < steps.length - 1 && (
        <div className="absolute left-[27px] top-16 bottom-0 w-px bg-border-subtle" aria-hidden="true" />
      )}
      <div className="flex items-start gap-6 sm:gap-8 pb-16 lg:pb-20 last:pb-0">
        <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-2 border-brand-primary bg-surface-primary font-display font-600 text-brand-deep text-[16px] tabular-nums z-10">
          {step.num}
        </div>
        <div className="flex-1 pt-2">
          <h3 className="font-display font-600 text-ink text-[20px] sm:text-[24px] lg:text-[26px] leading-[1.25] tracking-tight">
            {step.title}
          </h3>
          <p className="mt-3 text-ink-secondary text-[15px] sm:text-[16px] leading-[1.65] max-w-xl">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Approach() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="approach" className="py-20 lg:py-30 bg-surface-secondary scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal max-w-2xl mb-12 lg:mb-16">
          <span className="text-eyebrow text-brand-deep uppercase">What SA Wellness Does Differently</span>
          <h2 className="mt-4 font-display font-600 text-ink text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-tight text-balance">
            A more complete approach to South Asian health.
          </h2>
        </div>

        <div className="max-w-3xl">
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} index={i} />
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => document.querySelector('#consultation')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-brand-deep text-surface-white text-[15px] font-500 hover:bg-brand-primary transition-all duration-250 ease-editorial hover:-translate-y-0.5"
          >
            Book a Consultation Now
          </button>
        </div>
      </div>
    </section>
  );
}
