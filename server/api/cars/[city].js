import cars from "@/data/cars.json"

export default defineEventHandler((event) =>{
  const {city} = event.context.params;
  let filteredCars = cars;

  filteredCars = filteredCars.filter(car =>{
   return car.city.toLowerCase() === city.toLowerCase()
  })

  return filteredCars
})