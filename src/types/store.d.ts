import { Aeroport, Mesure } from '@/types/analysis'

interface Common {
  theme: any
}

interface Analysis {
  period: Array<Date>
  day: boolean
  aeroport: Aeroport
  aeroports: Array<Aeroport>
  measure: Mesure
  measures: Array<Mesure>
}

interface State {
  common: Common
  graphs: Analysis
}

export { Common, Analysis, State }
