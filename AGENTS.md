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

## Website architecture
- Keep shared navigation and footer in the root shell; each content page owns its route and metadata so navigation remains consistent and every page is independently discoverable.
- Keep shared resort copy and media references in the browser-safe resort-content module; reusable resort sections live in the resort component module to avoid page duplication.
- Keep extended guest-content sections in resort-chapters, independent of the shared shell module, so rich page-specific content can grow without circular imports.
- Represent this unverified property as a concept resort; stay search creates inspirations and downloadable plans, not live availability or confirmed reservations.
- Express visual styling through semantic tokens and centralized styles, with hospitality-specific Button variants, to preserve a consistent luxury identity.
