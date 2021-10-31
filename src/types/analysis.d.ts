interface Airport {
  id: string
  name: string
  elevationFt: number
  municipality: string
  lat: number
  lon: number
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
