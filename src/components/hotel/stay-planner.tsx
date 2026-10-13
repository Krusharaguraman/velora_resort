import { useState, type FormEvent } from "react";
import { CalendarDays, ArrowUpRight, Check, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getStayNights } from "@/lib/stay-planning";

export function StayPlanner() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!getStayNights(arrival, departure)) {
      setError("Please choose a departure date after your arrival.");
      return;
    }
    setError("");
    setOpen(true);
  };
  return (
    <section className="stay-planner" id="plan-stay" aria-label="Plan your stay">
      <form onSubmit={submit} className="planner-inner">
        <div className="planner-title">
          <span className="eyebrow">Your coastal escape</span>
          <h2>Make room for you.</h2>
        </div>
        <label className="planner-field">
          <span>
            <CalendarDays size={13} />
            Arrival
          </span>
          <input
            type="date"
            aria-label="Arrival date"
            required
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </label>
        <label className="planner-field">
          <span>
            <CalendarDays size={13} />
            Departure
          </span>
          <input
            type="date"
            aria-label="Departure date"
            required
            min={arrival || undefined}
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </label>
        <label className="planner-field">
          <span>Guests</span>
          <select
            aria-label="Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>
        <Button variant="coastal" type="submit">
          Plan your stay <ArrowUpRight />
        </Button>
        {error && (
          <p role="alert" className="planner-error">
            {error}
          </p>
        )}
      </form>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="plan-dialog">
          <span className="eyebrow">A stay to look forward to</span>
          <DialogTitle className="font-display text-4xl font-normal">
            Your escape, considered.
          </DialogTitle>
          <DialogDescription>Your preferred stay at Velora Retreat.</DialogDescription>
          <div className="stay-summary">
            <div>
              <CalendarDays />
              <span>
                {arrival} — {departure}
              </span>
            </div>
            <div>
              <BedDouble />
              <span>
                {getStayNights(arrival, departure)} nights · {guests}{" "}
                {guests === "1" ? "guest" : "guests"}
              </span>
            </div>
          </div>
          <p className="planning-note">
            <Check size={16} />
            Stay plan only. Live rates and availability are not connected; no reservation has been
            made.
          </p>
          <Button
            variant="coastal"
            onClick={() => {
              setOpen(false);
              document.getElementById("suites")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore suites & villas <ArrowUpRight />
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
