import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const navLinks = [
  { href: "/#suites", label: "Suites & Villas" },
  { href: "/#dining", label: "Dining" },
  { href: "/#wellness", label: "Wellness" },
  { href: "/#guest-information", label: "Guest Info" },
];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function VeloraHeader() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="velora-header">
      <Link to="/" aria-label="Velora Retreat home" className="velora-brand">
        <span className="velora-brand-mark">℣</span>
        <span className="velora-brand-name">VELORA</span>
        <span className="velora-brand-caption">COASTAL RETREAT</span>
      </Link>
      <nav className="velora-nav" aria-label="Main navigation">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label.toUpperCase()}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Button variant="resort" className="hidden sm:inline-flex" asChild>
          <a href="/#plan-stay">
            PLAN YOUR STAY <ArrowUpRight />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </Button>
      </div>
      {menu && (
        <nav className="velora-mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenu(false)}>
              {l.label.toUpperCase()}
            </a>
          ))}
          <Button variant="resort" asChild>
            <a href="/#plan-stay" onClick={() => setMenu(false)}>
              PLAN YOUR STAY <ArrowUpRight />
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}

function VeloraFooter() {
  return (
    <footer className="velora-footer">
      <div className="footer-top">
        <Link to="/" aria-label="Velora Retreat home" className="velora-brand">
          <span className="velora-brand-mark">℣</span>
          <span className="velora-brand-name">VELORA</span>
          <span className="velora-brand-caption">COASTAL RETREAT</span>
        </Link>
        <div className="footer-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <span className="eyebrow text-muted-foreground">A SLOWER KIND OF LUXURY.</span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Velora Retreat. All rights reserved.</span>
        <span>A world apart. A feeling like home.</span>
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Velora Retreat | Timeless Coastal Luxury" },
      {
        name: "description",
        content:
          "Velora Retreat — a coastal resort concept of quiet grandeur, ocean suites, fine dining and restorative wellness.",
      },
      { property: "og:title", content: "Velora Retreat" },
      { property: "og:description", content: "A slower kind of luxury. Discover Velora Retreat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <VeloraHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <VeloraFooter />
    </QueryClientProvider>
  );
}
