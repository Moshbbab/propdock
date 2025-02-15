"use client"

import { Card } from "@/components/Card"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import { cx } from "@/lib/utils"

export default function SelskapPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-warm-grey dark:text-warm-white">
                        ME WITHOUT THE BOYS AS
                      </h2>
                      <h3 className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Grunndata
                      </h3>
                    </div>
                    <span className="rounded-full bg-warm-grey px-2.5 py-0.5 text-sm font-medium text-warm-white dark:bg-warm-white dark:text-warm-grey">
                      AS
                    </span>
                  </div>
                  <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { label: "Org. nr.", value: "919 415 754" },
                      { label: "Ansatte", value: "0" },
                      { label: "Stiftet", value: "2017" },
                      { label: "Enhetsregisteret", value: "2017" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-warm-grey-2/20 p-4 dark:border-warm-grey-1/20"
                      >
                        <dt className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-warm-grey dark:text-warm-white">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <h3 className="font-medium text-warm-grey dark:text-warm-white">
                    Beskrivelse
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border border-warm-grey-2/20 p-4 dark:border-warm-grey-1/20">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        ME WITHOUT THE BOYS AS er et aksjeselskap etablert i
                        2017, og har ingen ansatt. Enheten er registrert i
                        enhetsregisteret med organisasjonsnummer 919 415 754, og
                        holder til i Skipperveien 11A, 8070 bodø. Selskapet
                        driver med konsulentvirksomhet tilknyttet
                        informasjonsteknologi.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-warm-grey dark:text-warm-white">
                        Vedtektsfestet formål
                      </h4>
                      <div className="rounded-lg border border-warm-grey-2/20 p-4 dark:border-warm-grey-1/20">
                        <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                          Konsulenttjenester innen informasjonsteknologi, samt
                          drift og utvikling av egne og andre selskapers
                          digitale løsninger. Investering i næringsvirksomhet,
                          herunder aksjer og andeler, samt deltagelse i andre
                          selskaper med lignende virksomhet.
                        </p>
                        <p className="mt-2 text-xs text-warm-grey-2/80 dark:text-warm-grey-1/80">
                          (jf. vedtekter 23. mars 2021)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-warm-grey dark:text-warm-white">
                    Registreringer
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      {
                        label: "Foretaksregisteret",
                        value: true,
                      },
                      {
                        label: "Frivillighetsregisteret",
                        value: false,
                      },
                      {
                        label: "MVA-registrert",
                        value: true,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-lg border border-warm-grey-2/20 p-4 dark:border-warm-grey-1/20"
                      >
                        <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                          {item.label}
                        </span>
                        <span
                          className={cx(
                            "rounded-full px-2 py-1 text-xs font-medium",
                            item.value
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                              : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400",
                          )}
                        >
                          {item.value ? "Ja" : "Nei"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-warm-grey dark:text-warm-white">
                    Adresser
                  </h3>
                  <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      {
                        type: "Forretningsadresse",
                        address: "Skipperveien 11A",
                        postal: "8070 Bodø",
                        country: "Norge",
                      },
                      {
                        type: "Postadresse",
                        address: "Skipperveien 11A",
                        postal: "8070 Bodø",
                        country: "Norge",
                      },
                    ].map((item) => (
                      <div
                        key={item.type}
                        className="rounded-lg border border-warm-grey-2/20 p-4 dark:border-warm-grey-1/20"
                      >
                        <dt className="text-sm font-medium text-warm-grey dark:text-warm-white">
                          {item.type}
                        </dt>
                        <dd className="mt-2 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                          <div>{item.address}</div>
                          <div>{item.postal}</div>
                          <div>{item.country}</div>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8 lg:col-span-1">
            <Card>
              <h3 className="font-medium text-warm-grey dark:text-warm-white">
                Roller og Verv
              </h3>
              <div className="mt-6 space-y-8">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-sm font-medium text-warm-grey dark:text-warm-white">
                      Daglig leder
                    </h4>
                    <span className="rounded-full bg-warm-grey-2/20 px-2 py-0.5 text-xs font-medium text-warm-grey-2 dark:bg-warm-grey-1/20 dark:text-warm-grey-1">
                      Signatur
                    </span>
                  </div>
                  <div className="rounded-lg border border-warm-grey-2/20 bg-warm-white/50 p-4 dark:border-warm-grey-1/20 dark:bg-warm-grey/30">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-warm-grey dark:text-warm-white">
                          Ola Nordmann
                        </p>
                        <p className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                          Tiltrådt: 01.01.2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-sm font-medium text-warm-grey dark:text-warm-white">
                      Styre
                    </h4>
                    <span className="rounded-full bg-warm-grey-2/20 px-2 py-0.5 text-xs font-medium text-warm-grey-2 dark:bg-warm-grey-1/20 dark:text-warm-grey-1">
                      3 medlemmer
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Kari Nordmann",
                        role: "Styreleder",
                        date: "01.01.2020",
                      },
                      {
                        name: "Per Hansen",
                        role: "Styremedlem",
                        date: "01.01.2020",
                      },
                      {
                        name: "Anne Pedersen",
                        role: "Styremedlem",
                        date: "01.01.2020",
                      },
                    ].map((member) => (
                      <div
                        key={member.name}
                        className="rounded-lg border border-warm-grey-2/20 bg-warm-white/50 p-4 dark:border-warm-grey-1/20 dark:bg-warm-grey/30"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-warm-grey dark:text-warm-white">
                              {member.name}
                            </p>
                            <p className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                              {member.role} • Tiltrådt: {member.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-medium text-warm-grey dark:text-warm-white">
                Selskapets bransjer
              </h3>
              <div className="mt-4 space-y-4">
                {[
                  {
                    code: "62.020",
                    name: "Konsulentvirksomhet tilknyttet informasjonsteknologi",
                    type: "Hovedbransje",
                  },
                ].map((industry) => (
                  <div
                    key={industry.code}
                    className="rounded-lg border border-warm-grey-2/20 bg-warm-white/50 p-4 dark:border-warm-grey-1/20 dark:bg-warm-grey/30"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-warm-grey dark:text-warm-white">
                          {industry.name}
                        </p>
                        <p className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                          {industry.code} • {industry.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
