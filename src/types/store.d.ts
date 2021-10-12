import { Airport, Sensor, Measure } from '@/types/analysis'

interface Common {
  theme: any | undefined
  error: string | undefined
  info: string | undefined
}

interface Analysis {
  period: Array<Date>
  day: boolean
  airport: Airport | undefined
  airports: Array<Airport>
  sensor: Sensor | undefined
  sensors: Array<Sensor>
}

interface State {
  common: Common
  graphs: Analysis
}

export { Common, Analysis, State }
