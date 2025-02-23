"use client"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/components/RadioCardGroup"
import { cx } from "@/lib/utils"
import React from "react"

interface Step {
  name: string
  href: string
}

const steps: Step[] = [
  { name: "Formål", href: "purpose" },
  { name: "Bedrift", href: "company" },
  { name: "Kontakt", href: "contact" },
]

interface StepProgressProps {
  currentStep: number
}

const StepProgress = ({ currentStep }: StepProgressProps) => {
  return (
    <div aria-label="Onboarding progress" className="mb-8">
      <ol className="mx-auto flex w-24 flex-nowrap gap-1 md:w-fit">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={cx(
              "h-1 w-12 rounded-full",
              index <= currentStep - 1
                ? "bg-warm-grey dark:bg-warm-white"
                : "bg-warm-grey-2/30 dark:bg-warm-grey-1/30",
            )}
          >
            <span className="sr-only">
              {step.name}{" "}
              {index < currentStep - 1
                ? "completed"
                : index === currentStep - 1
                  ? "current"
                  : ""}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

const purposes = [
  {
    id: "valuation",
    title: "Verdivurdering",
    description: "Få nøyaktige verdivurderinger av eiendommer",
  },
  {
    id: "search",
    title: "Finne nye eiendommer",
    description: "Søk og analyser potensielle investeringsmuligheter",
  },
  {
    id: "market",
    title: "Markedsanalyse",
    description: "Få innsikt i eiendomsmarkedet og trender",
  },
  {
    id: "portfolio",
    title: "Porteføljestyring",
    description: "Administrer og optimaliser eiendomsporteføljen din",
  },
]

interface FormData {
  step: number
  purpose: string
  company: {
    name: string
    orgNumber: string
    address: string
  }
  contact: {
    name: string
    email: string
    phone: string
  }
}

export default function Products() {
  const [formData, setFormData] = React.useState<FormData>({
    step: 1,
    purpose: "",
    company: {
      name: "",
      orgNumber: "",
      address: "",
    },
    contact: {
      name: "",
      email: "",
      phone: "",
    },
  })
  const [loading, setLoading] = React.useState(false)

  const handleNextStep = () => {
    if (formData.step < 3) {
      setFormData((prev) => ({ ...prev, step: prev.step + 1 }))
    } else {
      handleSubmit()
    }
  }

  const handlePrevStep = () => {
    if (formData.step > 1) {
      setFormData((prev) => ({ ...prev, step: prev.step - 1 }))
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    // Placeholder for submission
    console.log("Form submitted:", formData)
    setTimeout(() => {
      setLoading(false)
      // Here you can add the redirect or success message
      alert("Takk for registreringen!")
    }, 1000)
  }

  const isStepValid = () => {
    switch (formData.step) {
      case 1:
        return formData.purpose !== ""
      case 2:
        return (
          formData.company.name !== "" &&
          formData.company.orgNumber !== "" &&
          formData.company.address !== ""
        )
      case 3:
        return (
          formData.contact.name !== "" &&
          formData.contact.email !== "" &&
          formData.contact.phone !== ""
        )
      default:
        return false
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-4">
      <StepProgress currentStep={formData.step} />

      {formData.step === 1 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-warm-grey dark:text-warm-white">
              Hva skal du bruke PropDock til?
            </h1>
            <p className="text-warm-grey-2 dark:text-warm-grey-1">
              Velg hovedformålet ditt for å få en tilpasset opplevelse.
            </p>
          </div>

          <RadioCardGroup
            value={formData.purpose}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, purpose: value }))
            }
            required
            aria-label="Velg formål"
            className="space-y-2"
          >
            {purposes.map((purpose, index) => (
              <div
                className="motion-safe:animate-revealBottom"
                key={purpose.id}
                style={{
                  animationDuration: "600ms",
                  animationDelay: `${100 + index * 50}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <RadioCardItem
                  className={cx(
                    "border-warm-grey-2/20 bg-warm-white active:scale-[99%] dark:border-warm-grey-1/20 dark:bg-warm-grey",
                    "has-[:checked]:border-warm-grey has-[:checked]:ring-1 has-[:checked]:ring-warm-grey dark:has-[:checked]:border-warm-white dark:has-[:checked]:ring-warm-white",
                    "hover:bg-warm-grey-2/5 dark:hover:bg-warm-grey-1/5",
                  )}
                  value={purpose.id}
                >
                  <div className="flex items-start gap-2.5">
                    <RadioCardIndicator className="mt-1 text-warm-grey dark:text-warm-white" />
                    <div>
                      <span className="block font-medium text-warm-grey dark:text-warm-white">
                        {purpose.title}
                      </span>
                      <span className="mt-1 block text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        {purpose.description}
                      </span>
                    </div>
                  </div>
                </RadioCardItem>
              </div>
            ))}
          </RadioCardGroup>
        </div>
      )}

      {formData.step === 2 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-warm-grey dark:text-warm-white">
              Bedriftsinformasjon
            </h1>
            <p className="text-warm-grey-2 dark:text-warm-grey-1">
              Fortell oss litt om bedriften din.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="companyName"
                className="text-warm-grey dark:text-warm-white"
              >
                Bedriftsnavn
              </Label>
              <Input
                id="companyName"
                value={formData.company.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    company: { ...prev.company, name: e.target.value },
                  }))
                }
                className="border-warm-grey-2/20 bg-warm-white text-warm-grey placeholder:text-warm-grey-2 dark:border-warm-grey-1/20 dark:bg-warm-grey dark:text-warm-white dark:placeholder:text-warm-grey-1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="orgNumber"
                className="text-warm-grey dark:text-warm-white"
              >
                Organisasjonsnummer
              </Label>
              <Input
                id="orgNumber"
                value={formData.company.orgNumber}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    company: { ...prev.company, orgNumber: e.target.value },
                  }))
                }
                className="border-warm-grey-2/20 bg-warm-white text-warm-grey placeholder:text-warm-grey-2 dark:border-warm-grey-1/20 dark:bg-warm-grey dark:text-warm-white dark:placeholder:text-warm-grey-1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="address"
                className="text-warm-grey dark:text-warm-white"
              >
                Adresse
              </Label>
              <Input
                id="address"
                value={formData.company.address}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    company: { ...prev.company, address: e.target.value },
                  }))
                }
                className="border-warm-grey-2/20 bg-warm-white text-warm-grey placeholder:text-warm-grey-2 dark:border-warm-grey-1/20 dark:bg-warm-grey dark:text-warm-white dark:placeholder:text-warm-grey-1"
              />
            </div>
          </div>
        </div>
      )}

      {formData.step === 3 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-warm-grey dark:text-warm-white">
              Kontaktinformasjon
            </h1>
            <p className="text-warm-grey-2 dark:text-warm-grey-1">
              Hvordan kan vi kontakte deg?
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-warm-grey dark:text-warm-white"
              >
                Navn
              </Label>
              <Input
                id="name"
                value={formData.contact.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, name: e.target.value },
                  }))
                }
                className="border-warm-grey-2/20 bg-warm-white text-warm-grey placeholder:text-warm-grey-2 dark:border-warm-grey-1/20 dark:bg-warm-grey dark:text-warm-white dark:placeholder:text-warm-grey-1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-warm-grey dark:text-warm-white"
              >
                E-post
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.contact.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, email: e.target.value },
                  }))
                }
                className="border-warm-grey-2/20 bg-warm-white text-warm-grey placeholder:text-warm-grey-2 dark:border-warm-grey-1/20 dark:bg-warm-grey dark:text-warm-white dark:placeholder:text-warm-grey-1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-warm-grey dark:text-warm-white"
              >
                Telefon
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.contact.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, phone: e.target.value },
                  }))
                }
                className="border-warm-grey-2/20 bg-warm-white text-warm-grey placeholder:text-warm-grey-2 dark:border-warm-grey-1/20 dark:bg-warm-grey dark:text-warm-white dark:placeholder:text-warm-grey-1"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        {formData.step > 1 && (
          <Button
            variant="secondary"
            onClick={handlePrevStep}
            className="border-warm-grey-2/20 text-warm-grey hover:bg-warm-grey-2/10 dark:border-warm-grey-1/20 dark:text-warm-white dark:hover:bg-warm-grey-1/10"
          >
            Tilbake
          </Button>
        )}
        <Button
          className={cx(
            "ml-auto bg-warm-grey text-warm-white hover:bg-warm-grey/90 dark:bg-warm-white dark:text-warm-grey dark:hover:bg-warm-white/90",
            "disabled:bg-warm-grey-2/30 disabled:text-warm-grey-2 dark:disabled:bg-warm-grey-1/30 dark:disabled:text-warm-grey-1",
          )}
          onClick={handleNextStep}
          disabled={!isStepValid() || loading}
          isLoading={loading}
        >
          {formData.step === 3 ? "Fullfør" : "Neste"}
        </Button>
      </div>
    </main>
  )
}
