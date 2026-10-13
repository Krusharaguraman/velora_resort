<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the shared hotel navigation, footer, and reservation dialog in HotelShell at the root so every content page shares one booking entry point.
- Use separate file routes for hotel content and ExperiencePage for consistent editorial detail layouts.
- Keep visual tokens and reusable hotel layout styles in src/styles.css and interactive controls in the design-system Button.
- The reservation interface is a presentation-only stay planner until a real reservation service is connected; never imply a confirmed booking or live availability.
- Keep illustrative room specifications and rates in the shared hotel catalogue, used by both room listings and the stay planner so estimates cannot drift.
- Use the shared stay calculation helper for date validation and multi-room nightly estimates; keep its concrete arithmetic tests alongside existing tests.
