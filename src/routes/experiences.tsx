import { createFileRoute } from '@tanstack/react-router'
import { ContentDetail } from '@/components/ui/resort'
import { resortHead } from '@/lib/metadata'
export const Route=createFileRoute('/experiences')({head:()=>resortHead('Coastal Experiences','Discover coastal adventures, ocean moments and meaningful connections at Velora Retreat.'),component:Page})
function Page(){return <ContentDetail page="experiences"/>}
