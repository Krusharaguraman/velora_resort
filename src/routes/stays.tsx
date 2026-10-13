import { createFileRoute } from '@tanstack/react-router'
import { StayPage } from '@/components/ui/resort'
import { resortHead } from '@/lib/metadata'
export const Route=createFileRoute('/stays')({validateSearch:(search:Record<string,unknown>):{arrival?:string,departure?:string,guests?:string}=>({arrival:typeof search['arrival']==='string'?search['arrival']:'',departure:typeof search['departure']==='string'?search['departure']:'',guests:typeof search['guests']==='string'?search['guests']:'2'}),head:()=>resortHead('Suites & Private Villas','Explore the Ocean Pool Villa, Coastal Garden Suite and Velora Residence. Find and save your ideal coastal stay inspiration.'),component:StayPage})
