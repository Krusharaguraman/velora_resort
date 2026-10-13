import { createFileRoute } from '@tanstack/react-router'
import { ContentDetail } from '@/components/ui/resort'
import { resortHead } from '@/lib/metadata'
export const Route=createFileRoute('/about')({head:()=>resortHead('Our Story','Discover the philosophy of Velora Retreat: thoughtful coastal living, natural design and warm hospitality.'),component:Page})
function Page(){return <ContentDetail page="about"/>}
