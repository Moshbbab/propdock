import Image from "next/image"
import type { PitchContext } from "./types"

type TeamMember = {
  slug: string
  name: string
  role: string
  bio: string
  email: string
  initials: string
  image?: string
}

// Drop square headshots into public/team/ then set the image field below
// (e.g. image: "/team/christer.jpg"). Falls back to initials avatar if omitted.
const team: TeamMember[] = [
  {
    slug: "christer",
    name: "Christer Hagen",
    role: "Daglig leder & Transaksjon",
    bio: "15+ år med næringseiendom i Norge. Tidligere hos DNB Næringsmegling og Malling. Leder transaksjoner og strategisk rådgivning.",
    email: "christer@advantiestate.no",
    initials: "CH",
  },
  {
    slug: "daniel",
    name: "Daniel Adamsen",
    role: "Partner · Forvaltning & Utleie",
    bio: "Jurist og eiendomssjef. Leder daglig forvaltning, leieavtaler og utleie for porteføljene vi drifter.",
    email: "daniel@advantiestate.no",
    initials: "DA",
  },
  {
    slug: "havard",
    name: "Håvard Nome",
    role: "Partner · Verdivurdering & Marked",
    bio: "Sertifisert verdsetter og analytiker. Ansvarlig for Markedspuls, DCF- og yield-analyser og kvartalsrapporter.",
    email: "havard@advantiestate.no",
    initials: "HN",
  },
]

type Props = {
  ctx?: PitchContext
}

function pickPresenter(presenter?: string) {
  if (!presenter) return team
  const needle = presenter.toLowerCase().trim()
  const match = team.find(
    (m) =>
      m.name.toLowerCase().includes(needle) ||
      needle.includes(m.slug) ||
      needle.includes(m.name.split(" ")[0].toLowerCase()),
  )
  if (!match) return team
  const rest = team.filter((m) => m.slug !== match.slug)
  return [match, ...rest]
}

function Avatar({
  initials,
  image,
  name,
  size = "md",
}: {
  initials: string
  image?: string
  name: string
  size?: "md" | "lg"
}) {
  const sizeClass =
    size === "lg" ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg"
  const dimensions = size === "lg" ? 80 : 56

  if (image) {
    return (
      <div
        className={`relative ${sizeClass} flex-shrink-0 overflow-hidden rounded-full ring-1 ring-warm-white/10`}
      >
        <Image
          src={image}
          alt={name}
          width={dimensions}
          height={dimensions}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex ${sizeClass} flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-light-blue/40 to-warm-grey-2/30 font-medium text-warm-white ring-1 ring-warm-white/10`}
    >
      {initials}
    </div>
  )
}

export function SectionTeam({ ctx }: Props) {
  const [lead, ...rest] = pickPresenter(ctx?.presenter)
  const leadLabel = ctx?.presenter
    ? "Din presentatør"
    : "Din kontaktperson"

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-white pb-56 pt-24 text-warm-grey md:pb-48 md:pt-32 dark:bg-warm-grey dark:text-warm-white">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">10</span>
            <h2 className="text-xl font-medium tracking-tight">Teamet</h2>
          </div>
          <a
            href="https://www.advantiestate.no"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-warm-grey-2 transition-colors hover:text-warm-grey-1 sm:inline"
          >
            advantiestate.no
          </a>
        </div>

        <div className="mb-12 max-w-3xl space-y-4">
          <h3 className="text-3xl font-medium leading-tight md:text-5xl">
            Menneskene du vil snakke med
          </h3>
          <p className="text-lg text-warm-grey-2 dark:text-warm-grey-1">
            I Advanti Estate får du et lite team som kjenner porteføljen din —
            ikke et kundesenter som setter deg videre.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl bg-warm-grey-2/5 p-8 ring-1 ring-light-blue/30 dark:bg-warm-grey-2/10 lg:col-span-2">
            <div className="flex items-start gap-4">
              <Avatar
                initials={lead.initials}
                image={lead.image}
                name={lead.name}
                size="lg"
              />
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-widest text-light-blue">
                  {leadLabel}
                </p>
                <h4 className="text-2xl font-medium">{lead.name}</h4>
                <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  {ctx?.presenter && ctx?.presenterRole
                    ? ctx.presenterRole
                    : lead.role}
                </p>
              </div>
            </div>
            <p className="mt-6 text-warm-grey-2 dark:text-warm-grey-1">
              {lead.bio}
            </p>
            <div className="mt-6 border-t border-warm-grey-2/20 pt-6 text-sm">
              <a
                href={`mailto:${lead.email}`}
                className="inline-flex items-center gap-2 text-warm-grey-2 hover:text-warm-grey dark:text-warm-grey-1 dark:hover:text-warm-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {lead.email}
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-3">
            {rest.map((member) => (
              <div
                key={member.slug}
                className="flex items-start gap-4 rounded-2xl bg-warm-grey-2/5 p-6 dark:bg-warm-grey-2/10"
              >
                <Avatar
                  initials={member.initials}
                  image={member.image}
                  name={member.name}
                />
                <div className="flex-1 space-y-1">
                  <h4 className="text-lg font-medium">{member.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-warm-grey-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                    {member.bio}
                  </p>
                  <div className="pt-2 text-xs">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-warm-grey-2 hover:text-warm-grey dark:text-warm-grey-1 dark:hover:text-warm-white"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
