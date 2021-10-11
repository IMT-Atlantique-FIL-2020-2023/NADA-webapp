import { Airport, Sensor, Measure } from '@/types/analysis'

interface Common {
  theme: any
}

interface Analysis {
  period: Array<Date>
  day: boolean
  airport: Airport
  airports: Array<Airport>
  sensor: Sensor
  sensors: Array<Sensor>
  timeline: Array<Measure>
}

interface State {
  common: Common
  graphs: Analysis
}

export { Common, Analysis, State }
