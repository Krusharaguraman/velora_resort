import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SuitesSection,
  AmenitiesSection,
  DiningSection,
  WellnessSection,
  GuestInformation,
} from "@/components/hotel/resort-sections";
import { StayPlanner } from "@/components/hotel/stay-planner";
import coastImage from "@/assets/velora-coast.jpg";
import villaImage from "@/assets/velora-villa.jpg";
import suiteImage from "@/assets/velora-suite.jpg";
import diningImage from "@/assets/velora-dining.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velora Retreat | Timeless Coastal Luxury" },
      {
        name: "description",
        content:
          "Discover Velora Retreat — ocean suites, private villas, coastal dining and restorative wellness.",
      },
      { property: "og:title", content: "Velora Retreat | Timeless Coastal Luxury" },
      {
        property: "og:description",
        content: "A slower kind of luxury on the coast. Discover Velora Retreat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="hero">
        <img
          src={coastImage}
          className="hero-image"
          alt="A serene coastal retreat overlooking a calm ocean at golden hour"
          width={1440}
          height={1024}
          fetchPriority="high"
        />
        <div className="hero-content">
          <div className="hero-ornament">
            <Waves size={14} />
          </div>
          <p className="eyebrow text-gold">A SLOWER KIND OF LUXURY</p>
          <h1>Velora Retreat</h1>
          <p className="hero-subtitle">Where the sea sets the pace.</p>
          <p className="hero-copy">
            Wake to the horizon. Unwind by the water.
            <br className="hidden sm:block" /> Not just a stay — a rhythm that becomes you.
          </p>
          <Button variant="imageOutline" className="mt-8" asChild>
            <a href="/#suites">
              DISCOVER OUR SANCTUARIES <ArrowUpRight />
            </a>
          </Button>
        </div>
        <div className="hero-bottom">
          <span className="flex items-center gap-2">
            <span className="text-gold">✦</span> ROOTED BY THE SEA. CRAFTED FOR YOU.
          </span>
          <a href="/#welcome" className="flex items-center gap-3">
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </div>
      </section>

      <section id="welcome" className="border-t">
        <div className="content-wrap intro">
          <p className="eyebrow text-muted-foreground">WELCOME TO VELORA</p>
          <h2 className="section-title">
            Some places are visited.
            <br />
            <span className="italic">Others are felt.</span>
          </h2>
          <p className="section-description">
            An ode to the coast — its light, its stillness, its quiet generosity. At Velora, every
            detail is considered, every view is framed, and every moment is made to become a memory.
          </p>
        </div>
        <div className="content-wrap pt-0! editorial-grid">
          <article className="editorial-item">
            <a href="/#suites" className="photo-wrap block">
              <img
                src={villaImage}
                className="editorial-photo"
                alt="A private pool villa opening onto the ocean"
                width={1440}
                height={1024}
                loading="lazy"
              />
            </a>
            <p className="eyebrow mt-6 text-gold!">THE ART OF REST</p>
            <h3>Your own sanctuary.</h3>
            <p>
              Ocean terraces, garden hideaways and private villas, where considered comfort meets
              the calm of the coast.
            </p>
            <a href="/#suites" className="editorial-link">
              EXPLORE SUITES & VILLAS <ArrowUpRight size={15} />
            </a>
          </article>
          <article className="editorial-item">
            <a href="/#dining" className="photo-wrap block">
              <img
                src={diningImage}
                className="editorial-photo"
                alt="A candlelit coastal dining table at sunset"
                width={1440}
                height={1024}
                loading="lazy"
              />
            </a>
            <p className="eyebrow mt-6 text-gold!">A TASTE OF THE COAST</p>
            <h3>Every flavour tells a story.</h3>
            <p>
              Seasonal ingredients, alfresco tables and ocean views — dining that lingers long after
              the sun sets.
            </p>
            <a href="/#dining" className="editorial-link">
              DISCOVER OUR DINING <ArrowUpRight size={15} />
            </a>
          </article>
        </div>
      </section>

      <SuitesSection />
      <AmenitiesSection />
      <DiningSection />
      <WellnessSection />
      <StayPlanner />
      <GuestInformation />

      <section className="signature-band">
        <p className="eyebrow text-gold">MOMENTS, MADE VELORA</p>
        <h2>
          For the occasions that deserve <span className="italic">everything.</span>
        </h2>
        <p>Intimate gatherings. Quiet celebrations. A lifetime of coastal memories.</p>
        <Button variant="imageOutline" asChild>
          <a href="/#plan-stay">
            PLAN YOUR STAY <ArrowUpRight />
          </a>
        </Button>
      </section>
    </main>
  );
}
