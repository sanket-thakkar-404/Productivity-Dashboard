export function generateSlot (){
  const slots = []

  for (let hour = 0; hour < 24; hour++) {
    const from = hour.toString().padStart(2 , '0')
    const to = ((hour + 1) % 24).toString().padStart(2 , '0')
      slots.push(`${from}:00 - ${to}:00`)
  }
  return slots
}
