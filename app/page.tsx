"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, Menu, X } from "lucide-react";

const projects = [
  {
    title: "The Courtyard Garden",
    location: "North London",
    image: "/courtyard-garden.jpg",
    tag: "Design + Build",
    text: "A calm, layered courtyard designed for slow mornings and long lunches.",
  },
  {
    title: "The Meadow Plot",
    location: "Hertfordshire",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=85",
    tag: "Planting Design",
    text: "A generous, wildlife-friendly planting scheme with year-round structure.",
  },
  {
    title: "The Terrace Garden",
    location: "St Albans",
    image: "/tile-merchant-ireland.jpg",
    tag: "Landscape Construction",
    text: "Transparent wall, honest timber and a garden made for hosting.",
  },
];

const services = [
  [
    "01",
    "Garden Design",
    "A thoughtful plan that makes the most of your space, light and everyday life.",
  ],
  [
    "02",
    "Landscape Construction",
    "Carefully built gardens, from first dig to final detail.",
  ],
  [
    "03",
    "Planting Plans",
    "Layered, resilient planting that changes beautifully through the seasons.",
  ],
  [
    "04",
    "Hardscaping",
    "Paths, patios and retaining walls with a sense of permanence.",
  ],
  [
    "05",
    "Timber Features",
    "Screens, pergolas and planter boxes made to sit naturally in their setting.",
  ],
  [
    "06",
    "Garden Makeovers",
    "A clear, considered refresh for gardens ready for a new chapter.",
  ],
];

const steps = [
  "Consultation",
  "Concept Design",
  "Detailed Plan",
  "Construction",
  "Planting",
  "Aftercare",
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="#top" className="brand" aria-label="Verdant Habitat home">
          <span className="brand-mark">VH</span>
          <span>
            Verdant Habitat<span className="brand-sub">Garden Design</span>
          </span>
        </Link>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <Link href="#work" onClick={() => setMenuOpen(false)}>
            Our work
          </Link>
          <Link href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </nav>
        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">
              Garden design & construction · London & Hertfordshire
            </p>
            <h1>
              Beautiful gardens designed with <em>intention.</em>
            </h1>
            <p className="hero-intro">
              We create natural, enduring outdoor spaces through thoughtful
              design and quality construction.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#contact">
                Request a quote <ArrowUpRight size={17} />
              </Link>
              <Link className="button button-text" href="#work">
                View our work <span>↓</span>
              </Link>
            </div>
            <div className="hero-note">
              <span className="leaf-line" />
              Thoughtful gardens, built to last.
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image
              className="hero-image"
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=90"
              alt="Lush green garden with a stone path and mature planting"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 56vw"
            />
            <div className="image-caption">
              A garden in Hampstead
              <br />
              <span>Designed & built by Verdant Habitat</span>
            </div>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="section-label">A little about us</div>
          <div className="intro-content">
            <h2>Gardens that feel like they have always belonged.</h2>
            <div>
              <p>
                I&apos;m Daniel Hart, a horticulturist and landscape builder
                with 15 years of experience designing and constructing gardens
                that feel alive, welcoming, and deeply personal.
              </p>
              <Link className="arrow-link" href="#about-story">
                More about Verdant Habitat <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="project-section" id="work">
          <div className="section-heading">
            <div>
              <div className="section-label">Selected work</div>
              <h2>A few places we&apos;ve made.</h2>
            </div>
            <Link className="arrow-link desktop-only" href="#all-projects">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article
                className={
                  i === 1
                    ? "project-card project-card-featured"
                    : "project-card"
                }
                key={project.title}
              >
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.title}, ${project.location}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
                <div className="project-meta">
                  <div>
                    <p className="project-tag">{project.tag}</p>
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
                <p className="project-description">{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="services-top">
            <div className="section-label">What we do</div>
            <h2>
              From the first sketch
              <br />
              to the final <em>plant.</em>
            </h2>
            <p>
              Good gardens are a conversation between a place and the people who
              live there. We bring the design thinking and practical know-how to
              make that conversation work.
            </p>
          </div>
          <div className="services-grid">
            {services.map(([num, title, text]) => (
              <div className="service-item" key={num}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="process-intro">
            <div className="section-label">How we work</div>
            <h2>A clear path to a better garden.</h2>
            <p>
              We keep things open, practical and enjoyable. You&apos;ll always
              know what happens next.
            </p>
          </div>
          <ol className="steps-list">
            {steps.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                <strong>{step}</strong>
                <Check size={17} />
              </li>
            ))}
          </ol>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <blockquote>
            Daniel understood that we wanted a garden that felt natural, not
            designed. The result is calm, generous and completely ours.
          </blockquote>
          <p>— Emma & Tom, Highbury</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <div className="section-label">Let&apos;s talk</div>
            <h2>Have a garden in mind?</h2>
            <p>
              Tell us a little about your space and what you&apos;d like it to
              become. We&apos;ll be in touch within two working days.
            </p>
            <a className="phone-link" href="tel:+442079460128">
              020 7946 0128 <ArrowUpRight size={18} />
            </a>
            <div className="contact-details">
              <span>Serving London & Hertfordshire</span>
              <span>hello@verdant-habitat.co.uk</span>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="success-message">
                <div className="success-icon">
                  <Check />
                </div>
                <h3>Thank you for getting in touch.</h3>
                <p>We&apos;ll be back in touch within two working days.</p>
              </div>
            ) : (
              <>
                <label>
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Tell us about your garden
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="A few words about your space and what you have in mind..."
                  />
                </label>
                <label className="upload-label">
                  Upload a photo of your garden
                  <input type="file" accept="image/*" />
                </label>
                <button className="button button-primary" type="submit">
                  Send enquiry <ArrowUpRight size={17} />
                </button>
              </>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">VH</span>
          <p>
            Thoughtful gardens,
            <br />
            built to last.
          </p>
        </div>
        <div className="footer-links">
          <Link href="#work">Our work</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Verdant Habitat Garden Design</span>
          <span>London · Hertfordshire</span>
          <a href="#top" aria-label="Back to top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

// Image URLs are remote Unsplash assets; Next's image configuration is intentionally avoided by using unoptimized image loading in CSS-sized containers.
