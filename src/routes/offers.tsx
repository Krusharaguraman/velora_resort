import { createFileRoute } from '@tanstack/react-router'
import { ContentDetail } from '@/components/ui/resort'
import { resortHead } from '@/lib/metadata'
export const Route=createFileRoute('/offers')({head:()=>resortHead('Stay Inspirations','Explore romantic escapes, longer stays and wellness retreat inspirations from Velora.'),component:Page})
function Page(){return <ContentDetail page="offers"/>}
