const params = new URLSearchParams(window.location.search);
const rideID = params.get("id");
const ride = getRideRecord(rideID);

document.addEventListener("DOMContentLoaded", async () => {
  const firstPosition = ride.data[0];
  const firstLocationData = await getLocationData(
    firstPosition.latitude,
    firstPosition.longitude
  );

  const dataElement = document.createElement("div");

  const cityDiv = document.createElement("div");
  cityDiv.innerText = `${firstLocationData.city} - ${firstLocationData.countryCode}`;
  cityDiv.className = "font-h1";

  const maxSpeedDiv = document.createElement("div");
  maxSpeedDiv.innerText = `Max speed: ${getMaxSpeed(ride.data)} Km/h`;
  maxSpeedDiv.className = "font-speed";

  const distanceDiv = document.createElement("div");
  distanceDiv.innerText = `Distance: ${getDistance(ride.data)}`;

  const durationDiv = document.createElement("div");
  durationDiv.innerText = getDuration(ride);

  const dateDiv = document.createElement("div");
  dateDiv.innerText = getStartDate(ride);

  dataElement.appendChild(cityDiv);
  dataElement.appendChild(maxSpeedDiv);
  dataElement.appendChild(distanceDiv);
  dataElement.appendChild(durationDiv);
  dataElement.appendChild(dateDiv);

  document.querySelector("#data").appendChild(dataElement);

  const deleteButton = document.querySelector("#deleteBtn");
  deleteButton.addEventListener("click", () => {
    deleteRide(rideID);
    window.location.href = "./";
  });

  const map = L.map("mapDetail");
  map.setView([firstPosition.latitude, firstPosition.longitude], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 5,
    maxZoom: 18,
    ext: "png",
  }).addTo(map);

  const positionsArray = ride.data.map((position) => {
    return [position.latitude, position.longitude];
  });

  const polyline = L.polyline(positionsArray, { color: "blue" });
  polyline.addTo(map);

  map.fitBounds(polyline.getBounds());
});
