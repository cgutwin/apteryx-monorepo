export function toUnixDatestamp(unixTimestamp: number): number {
  const dateString: string = new Date(unixTimestamp).toString().split(" ").splice(1, 3).join(" ")
  const dateObject: Date = new Date(dateString)
  return Date.parse(dateObject.toString())
}
