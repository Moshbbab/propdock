import { SectionBook } from "./section-book"
import { SectionCaseStudy } from "./section-case-study"
import { SectionForvaltning } from "./section-forvaltning"
import { SectionMarkedspuls } from "./section-markedspuls"
import { SectionPricing } from "./section-pricing"
import { SectionProblem } from "./section-problem"
import { SectionSolution } from "./section-solution"
import { SectionStart } from "./section-start"
import { SectionTeam } from "./section-team"
import { SectionTransaksjon } from "./section-transaksjon"
import { SectionVerdivurdering } from "./section-verdivurdering"
import type { PitchContext } from "./types"

type Props = {
  ctx: PitchContext
}

// Print mode: all sections stacked vertically with page breaks for PDF export.
// Map slide is skipped here — Leaflet tiles don't print reliably and the static
// version would be a separate asset.
export function PrintPitch({ ctx }: Props) {
  const slides = [
    <SectionStart key="start" ctx={ctx} />,
    <SectionProblem key="problem" ctx={ctx} />,
    <SectionSolution key="solution" clientName={ctx.clientName} />,
    <SectionMarkedspuls key="markedspuls" />,
    <SectionForvaltning key="forvaltning" />,
    <SectionTransaksjon key="transaksjon" />,
    <SectionVerdivurdering key="verdivurdering" />,
    <SectionCaseStudy key="case" />,
    <SectionTeam key="team" ctx={ctx} />,
    <SectionPricing key="pricing" />,
    <SectionBook key="book" clientName={ctx.clientName} />,
  ]

  return (
    <>
      <style>{`
        @media print {
          @page { size: 1280px 900px; margin: 0; }
          html, body { background: #1f1d1a !important; }
          .pitch-page { page-break-after: always; break-after: page; }
          .pitch-page:last-child { page-break-after: auto; break-after: auto; }
        }
        .pitch-page { width: 100%; }
      `}</style>
      <main className="bg-warm-grey">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="pitch-page"
            style={{ minHeight: "900px" }}
          >
            {slide}
          </div>
        ))}
      </main>
    </>
  )
}
