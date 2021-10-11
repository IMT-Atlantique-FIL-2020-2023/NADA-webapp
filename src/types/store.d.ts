import { Airport, Measure } from '@/types/analysis'

interface Common {
  theme: any
}

interface Analysis {
  period: Array<Date>
  day: boolean
  airport: Airport
  airports: Array<Aiport>
  measure: Measure
  measures: Array<Measure>
}

interface State {
  common: Common
  graphs: Analysis
}

export { Common, Analysis, State }
