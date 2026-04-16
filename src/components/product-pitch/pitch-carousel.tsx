"use client"

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/investor/carousel"
import { CarouselToolbar } from "@/components/investor/carousel-toolbar"
import { useEffect, useState } from "react"
import { SectionBook } from "./section-book"
import { SectionCaseStudy } from "./section-case-study"
import { SectionForvaltning } from "./section-forvaltning"
import { SectionMap } from "./section-map"
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

export function ProductPitchCarousel({ ctx }: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel className="relative min-h-full w-full" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SectionStart ctx={ctx} />
        </CarouselItem>
        <CarouselItem>
          <SectionProblem ctx={ctx} />
        </CarouselItem>
        <CarouselItem>
          <SectionSolution clientName={ctx.clientName} />
        </CarouselItem>
        <CarouselItem>
          <SectionMarkedspuls />
        </CarouselItem>
        <CarouselItem>
          <SectionMap />
        </CarouselItem>
        <CarouselItem>
          <SectionForvaltning />
        </CarouselItem>
        <CarouselItem>
          <SectionTransaksjon />
        </CarouselItem>
        <CarouselItem>
          <SectionVerdivurdering />
        </CarouselItem>
        <CarouselItem>
          <SectionCaseStudy />
        </CarouselItem>
        <CarouselItem>
          <SectionTeam ctx={ctx} />
        </CarouselItem>
        <CarouselItem>
          <SectionPricing />
        </CarouselItem>
        <CarouselItem>
          <SectionBook clientName={ctx.clientName} />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar views={1} />
    </Carousel>
  )
}
