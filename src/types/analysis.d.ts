interface Airport {
  id: string
  name: string | undefined
}

interface Sensor {
  id: string
  measurement: Measurement
  getMeanMeasureInterval: Array<Measure> | undefined
}

interface Measurement {
  id: string
  name: string | undefined
  unit: string | undefined
}

interface Measure {
  id: string | undefined
  value: number | undefined
  startDate: Date | undefined
  endDate: Date | undefined
}

export { Airport, Sensor, Measurement, Measure }
