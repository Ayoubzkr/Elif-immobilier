export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 text-brand-navy/75">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse-soft" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/30 animate-pulse-soft [animation-delay:180ms]" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/20 animate-pulse-soft [animation-delay:360ms]" />
      </div>
    </div>
  )
}
