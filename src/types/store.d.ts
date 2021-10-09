interface Common {
  theme: any
}

interface Analysis {}

interface State {
  common: Common
  graphs: Analysis
}

export { Common, Analysis, State }
