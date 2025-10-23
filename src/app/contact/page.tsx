import React from 'react'
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
      <main className="twinkling overflow-y-scroll no-scrollbar snap-mandatory snap-y px-10">
        <section className="h-screen snap-center flex items-center justify-center">
          <ContactForm />
        </section>
      </main>
  )
}
