import type Ponent from "./ponent"

export default interface DayPonent {
  day: string,
  date: string,
  early?: Ponent[],
  late?: Ponent[]
}