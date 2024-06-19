const params = new URLSearchParams(window.location.search)
const rideID = params.get("id")
const ride = getRideRecord(rideID)

document.addEventListener("DOMContentLoaded", async ()=>{




const firstPosition = ride.data[0]
const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude)


const dataElement = document.createElement("div")

const cityDiv = document.createElement("div")
cityDiv.innerText= `${firstLocationData.city} - ${firstLocationData.countryCode}`
cityDiv.className = "font-h1"

const maxSpeedDiv = document.createElement("div")
maxSpeedDiv.innerText = `Max speed: ${getMaxSpeed(ride.data)} Km/h`
maxSpeedDiv.className = "font-speed"

const distanceDiv = document.createElement("div")
distanceDiv.innerText = `Distance: ${getDistance(ride.data)}`

const durationDiv = document.createElement("div")
durationDiv.innerText = getDuration(ride)

const dateDiv = document.createElement("div")
dateDiv.innerText = getStartDate(ride)


dataElement.appendChild(cityDiv)
dataElement.appendChild(maxSpeedDiv)
dataElement.appendChild(distanceDiv)
dataElement.appendChild(durationDiv)
dataElement.appendChild(dateDiv)

document.querySelector("#data").appendChild(dataElement)

})