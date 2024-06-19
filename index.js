const rideListElement = document.querySelector("#rideList")
const allRides = getAllRides()

allRides.forEach(async ([id, value])=>{
    const ride = JSON.parse(value)
    ride.id = id

    const itemElement= document.createElement("li")
    itemElement.id = ride.id
    itemElement.className = "d-flex"
    rideListElement.appendChild(itemElement)
    
    itemElement.addEventListener("click", ()=>{

        window.location.href = `./detail.html?id=${ride.id}`

    })


    const firstPosition = ride.data[0]
    const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude)

    const mapElement = document.createElement("div")
    mapElement.style = "width:100px;height:100px"
    mapElement.classList.add

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

    itemElement.appendChild(mapElement)
    itemElement.appendChild(dataElement)

 

})