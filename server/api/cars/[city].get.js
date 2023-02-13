import cars from "@/data/cars.json"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) =>{
  console.log("i am hit")
  const {city} = event.context.params;
  const {make, minPrice, maxPrice} = getQuery(event)


  const filters ={
    city: city.toLowerCase(),
 
  }

  if(make){
    filters.make = make.toLowerCase()
  }
  if(minPrice || maxPrice){
    filters.price = {}
  }
  if(minPrice){
    filters.price.gte = parseInt(minPrice)
  }
  if(maxPrice){
    filters.price.lte = parseInt(maxPrice)
  }
  return prisma.car.findMany({
    where: filters,
    orderBy: {
      price: "asc"
    }
  })
})