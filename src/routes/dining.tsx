import { createFileRoute } from '@tanstack/react-router'
import { ContentDetail } from '@/components/ui/resort'
import { resortHead } from '@/lib/metadata'
export const Route=createFileRoute('/dining')({head:()=>resortHead('Oceanfront Dining','Explore ocean-inspired flavours, sunset cocktails and private dining moments at Velora Retreat.'),component:Page})
function Page(){return <ContentDetail page="dining"/>}
