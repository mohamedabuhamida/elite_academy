"use client"

import { webinars } from "@/translations/webinars"
import { WebinarCard, } from "./WebinarCard"


export default function WebinarsSection() {
  return (
    <section className="py-20 bg-cream" id="webinar">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {webinars.map((webinar, index) => (
          <WebinarCard key={index} {...webinar} />
        ))}
      </div>
    </section>
  )
}