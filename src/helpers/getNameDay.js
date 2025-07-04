export const getNameDay = (date) => {
  const numberDay = date.getDay();
  const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

  return weekDays[numberDay]
}