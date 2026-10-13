import { createFileRoute } from '@tanstack/react-router'
import { ContentDetail } from '@/components/ui/resort'
import { resortHead } from '@/lib/metadata'
export const Route=createFileRoute('/wellness')({head:()=>resortHead('Wellness & Renewal','Find your rhythm with mindful movement, restorative spa inspirations and peaceful ocean surroundings.'),component:Page})
function Page(){return <ContentDetail page="wellness"/>}
