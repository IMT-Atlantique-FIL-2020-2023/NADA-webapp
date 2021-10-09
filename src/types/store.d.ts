interface Common {
  theme: any
}

interface Analysis {
  period: Array<Date>
  day: boolean
  aeroport: string
  aeroports: Array<string>
  measure: string
  measures: Array<string>
}

interface State {
  common: Common
  graphs: Analysis
}

export { Common, Analysis, State }
