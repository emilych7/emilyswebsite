import React from 'react'
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
      <main className="twinkling overflow-y-scroll no-scrollbar px-10">
        <section className="min-h-screen flex justify-center items-center snap-start py-16 md:py-24">
          <ContactForm />
        </section>
      </main>
  )
}
