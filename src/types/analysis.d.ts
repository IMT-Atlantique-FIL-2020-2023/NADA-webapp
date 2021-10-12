interface Airport {
  id: string
  name: string | undefined
}

interface Sensor {
  id: string
  measurement: Measurement
  getMeanMeasureInterval: Array<Measure>
}

interface Measurement {
  id: string
  name: string
  unit: string
}

interface Measure {
  id: string
  value: number
  startDate: Date
  endDate: Date
}

export { Airport, Sensor, Measurement, Measure }
