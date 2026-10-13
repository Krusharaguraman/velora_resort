import { useState } from "react";
import { ArrowUpRight, BedDouble, Waves, Leaf, Utensils, Sun, Wine, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import suiteImage from "@/assets/velora-suite.jpg";
import gardenImage from "@/assets/velora-garden.jpg";
import villaImage from "@/assets/velora-villa.jpg";
import diningImage from "@/assets/velora-dining.jpg";
import spaImage from "@/assets/velora-coast.jpg";

const suites = [
  {
    name: "Ocean Terrace Suite",
    image: suiteImage,
    type: "Suites",
    subtitle: "Wake up to the horizon",
    description:
      "An airy king bedroom, a private ocean-facing terrace, and interiors shaped by sun-warmed stone and soft linen.",
    features: ["King bedroom", "Ocean-view terrace", "Lounge seating"],
    detail:
      "Glass doors bring the coast into an elegant, open bedroom. A private terrace is the perfect setting for a quiet morning coffee, while a comfortable lounge invites long afternoons with a book.",
  },
  {
    name: "Garden Sanctuary Suite",
    image: gardenImage,
    type: "Suites",
    subtitle: "A world of green, all your own",
    description:
      "A peaceful garden hideaway, with a king bedroom and a shaded terrace tucked among tropical palms.",
    features: ["King bedroom", "Private garden terrace", "Indoor lounge"],
    detail:
      "Set among lush palms, this garden retreat pairs a softly furnished king bedroom with a secluded outdoor sitting area. Natural textures and garden views lend every corner a sense of stillness.",
  },
  {
    name: "Private Pool Villa",
    image: villaImage,
    type: "Villas",
    subtitle: "The coast, without compromise",
    description:
      "A generous private living space opening onto your own infinity pool, with uninterrupted views of the sea.",
    features: ["Private infinity pool", "Separate living space", "Ocean panorama"],
    detail:
      "The most private expression of Velora. A spacious living area flows onto a sunlit pool terrace, creating a seamless connection between indoors and out. Slow breakfasts, afternoon swims, and golden-hour views become your daily rhythm.",
  },
];
const amenities = [
  {
    Icon: Waves,
    name: "Beach & infinity pool",
    text: "Saltwater mornings and leisurely poolside afternoons.",
  },
  {
    Icon: Sparkles,
    name: "Spa & wellness",
    text: "Restorative treatments in a serene coastal setting.",
  },
  {
    Icon: Utensils,
    name: "Coastal dining",
    text: "Seasonal flavours, alfresco tables, and ocean views.",
  },
  {
    Icon: Sun,
    name: "Curated experiences",
    text: "Thoughtful moments on the shore and out at sea.",
  },
];
const menus = {
  Breakfast: [
    { name: "A slow coastal morning", detail: "Seasonal fruit, artisan pastries & fresh juices" },
    { name: "From the kitchen", detail: "Eggs your way, garden herbs & sourdough" },
    { name: "Something nourishing", detail: "Coconut yoghurt, tropical fruit & toasted granola" },
  ],
  Dinner: [
    { name: "From the sea", detail: "Grilled catch, citrus butter & seasonal greens" },
    { name: "From the garden", detail: "Roasted vegetables, fresh herbs & aged cheese" },
    { name: "A sweet ending", detail: "Coconut panna cotta & tropical fruit" },
  ],
  "Sunset bar": [
    { name: "The Velora spritz", detail: "Botanical citrus, sparkling wine & coastal herbs" },
    { name: "Golden hour", detail: "Fresh pineapple, lime & ginger — alcohol-free" },
    { name: "To share", detail: "Olives, artisan bread & seasonal small plates" },
  ],
};
export function SuitesSection() {
  const [filter, setFilter] = useState("All sanctuaries");
  const [selected, setSelected] = useState<(typeof suites)[number] | null>(null);
  return (
    <section id="suites" className="suites-section content-wrap">
      <div className="section-heading">
        <div>
          <div className="eyebrow">Suites & private villas</div>
          <h2>Your own little world.</h2>
        </div>
        <p className="section-description">
          From garden hideaways to oceanfront villas.
          <br />
          Find a sanctuary that feels like you.
        </p>
      </div>
      <div className="suite-tabs" role="group" aria-label="Accommodation type">
        {["All sanctuaries", "Suites", "Villas"].map((t) => (
          <Button
            key={t}
            variant="ghost"
            className={filter === t ? "suite-tab active" : "suite-tab"}
            aria-pressed={filter === t}
            onClick={() => setFilter(t)}
          >
            {t}
          </Button>
        ))}
      </div>
      <div className="suite-grid">
        {suites
          .filter((s) => filter === "All sanctuaries" || s.type === filter)
          .map((s) => (
            <article className="suite-item" key={s.name}>
              <div className="suite-photo">
                <img src={s.image} alt={s.name} width={1440} height={1024} loading="lazy" />
                <span>{s.type === "Villas" ? "Signature villa" : "Signature suite"}</span>
              </div>
              <div className="suite-copy">
                <div className="eyebrow">{s.subtitle}</div>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.features.map((f, i) => (
                    <li key={f}>
                      {i === 0 ? (
                        <BedDouble size={13} />
                      ) : i === 1 ? (
                        <Waves size={13} />
                      ) : (
                        <Leaf size={13} />
                      )}{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="editorial"
                  onClick={() => setSelected(s)}
                  aria-label={`Explore ${s.name}`}
                >
                  Explore sanctuary <ArrowUpRight />
                </Button>
              </div>
            </article>
          ))}
      </div>
      <p className="concept-caption">
        Accommodation concepts shown for inspiration. Final room specifications and rates to be
        confirmed.
      </p>
      <Dialog
        open={selected !== null}
        onOpenChange={(o) => {
          if (!o) setSelected(null);
        }}
      >
        <DialogContent className="detail-dialog">
          {selected && (
            <>
              <img
                className="detail-image"
                src={selected.image}
                alt={selected.name}
                width={1440}
                height={1024}
              />
              <div className="detail-copy">
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.detail}</DialogDescription>
                <ul className="room-features">
                  {selected.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button
                  variant="coastal"
                  onClick={() => {
                    setSelected(null);
                    document.getElementById("plan-stay")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Plan your stay <ArrowUpRight />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
export function AmenitiesSection() {
  return (
    <section className="amenities-band">
      <div className="content-wrap">
        <div className="eyebrow">Every detail, thoughtfully considered</div>
        <div className="amenities-grid">
          {amenities.map(({ Icon, name, text }) => (
            <div key={name}>
              <Icon strokeWidth={1} />
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function DiningSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<keyof typeof menus>("Dinner");
  return (
    <section id="dining" className="dining-section content-wrap">
      <div className="dining-layout">
        <img
          src={diningImage}
          alt="An intimate sunset dining table overlooking the coast"
          width={1440}
          height={1024}
          loading="lazy"
        />
        <div className="dining-copy">
          <div className="eyebrow">Dining at Velora</div>
          <h2>
            The coast,
            <br />
            <em>on your plate.</em>
          </h2>
          <p>
            A celebration of simple ingredients and extraordinary surroundings. Gather for long
            lunches, discover a seasonal menu, or let a candlelit table turn dinner into a memory.
          </p>
          <div className="dining-venues">
            <div>
              <Utensils size={17} />
              <span>
                <strong>The Coastal Table</strong>
                <small>Seasonal cuisine · Open-air dining</small>
              </span>
            </div>
            <div>
              <Wine size={17} />
              <span>
                <strong>The Sunset Terrace</strong>
                <small>Signature drinks · Small plates · Sea views</small>
              </span>
            </div>
          </div>
          <Button variant="editorial" onClick={() => setMenuOpen(true)}>
            A taste of our menu <ArrowUpRight />
          </Button>
        </div>
      </div>
      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <DialogContent className="menu-dialog">
          <span className="eyebrow">The Coastal Table</span>
          <DialogTitle className="font-display text-4xl font-normal">
            Good food. Great company.
          </DialogTitle>
          <DialogDescription>
            An illustrative taste of our coastal dining concept.
          </DialogDescription>
          <div className="suite-tabs" role="group" aria-label="Menu selection">
            {(Object.keys(menus) as (keyof typeof menus)[]).map((t) => (
              <Button
                key={t}
                variant="ghost"
                className={t === tab ? "suite-tab active" : "suite-tab"}
                aria-pressed={t === tab}
                onClick={() => setTab(t)}
              >
                {t}
              </Button>
            ))}
          </div>
          <div className="menu-list">
            {menus[tab].map((d) => (
              <div key={d.name}>
                <h3>{d.name}</h3>
                <p>{d.detail}</p>
              </div>
            ))}
          </div>
          <p className="concept-caption">
            Sample menu. Dishes, dietary options, and pricing are to be confirmed.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
export function WellnessSection() {
  return (
    <section id="wellness" className="wellness-section">
      <img
        src={spaImage}
        alt="Velora’s ocean-facing spa with linen-draped treatment spaces"
        width={1440}
        height={1024}
        loading="lazy"
      />
      <div className="wellness-copy">
        <div className="eyebrow">Spa, wellness & balance</div>
        <h2>
          A deeper
          <br />
          <em>kind of escape.</em>
        </h2>
        <p>
          Let the outside world fall away. From a quiet morning stretch to a restorative treatment,
          discover a rhythm that leaves you feeling more like yourself.
        </p>
        <div className="wellness-rituals">
          <span>01 &nbsp; Restorative body rituals</span>
          <span>02 &nbsp; Ocean-inspired relaxation</span>
          <span>03 &nbsp; Mindful movement</span>
        </div>
        <Button variant="resort" asChild>
          <a href="#plan-stay">
            Make time for yourself <ArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
export function GuestInformation() {
  return (
    <section className="guest-section content-wrap" id="guest-information">
      <div>
        <div className="eyebrow">Before you arrive</div>
        <h2>
          A little good
          <br />
          <em>to know.</em>
        </h2>
        <p>Thoughtful preparation for an effortless escape.</p>
      </div>
      <Accordion type="single" collapsible className="guest-questions">
        <AccordionItem value="location">
          <AccordionTrigger>Where is Velora Retreat located?</AccordionTrigger>
          <AccordionContent>
            The destination and exact address will be announced with the resort’s confirmed details.
            The website currently presents a coastal resort concept.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="booking">
          <AccordionTrigger>Can I book a suite or villa?</AccordionTrigger>
          <AccordionContent>
            You can explore the accommodation concepts and plan your preferred dates. Live
            availability, prices, and confirmed reservations are not yet available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="transfers">
          <AccordionTrigger>How do I arrange my arrival?</AccordionTrigger>
          <AccordionContent>
            Airport transfer options, travel guidance, and arrival arrangements will be published
            once the destination is confirmed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="diet">
          <AccordionTrigger>Are dietary requirements accommodated?</AccordionTrigger>
          <AccordionContent>
            Please discuss dietary needs with the resort team once enquiries open. The sample menus
            are illustrative; confirmed dietary and allergen information will be supplied by the
            resort.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
