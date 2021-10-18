import { Airport, Sensor, Measure } from '@/types/analysis'

interface Common {
  theme: any | undefined
  error: string | undefined
  info: string | undefined
  loading: string | undefined
  resized: Date | undefined
}

interface Analysis {
  layout: string
  period: Array<Date>
  day: boolean
  airport: Airport | undefined
  airports: Array<Airport>
  sensor: Sensor | undefined
  sensors: Array<Sensor>
  selection: Array<number>
  activemap: boolean
}

interface State {
  common: Common
  analysis: Analysis
}

export { Common, Analysis, State }
