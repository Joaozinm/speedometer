const speedElement = document.querySelector("#speed")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

startBtn.addEventListener("click", ()=>{

    function handleSuccess(position)
    navigator.geolocation.watchPosition()
    startBtn.classList.add("d-none")
    stopBtn.classList.remove("d-none")
})

stopBtn.addEventListener("click", ()=>{
    
    stopBtn.classList.add("d-none")
    startBtn.classList.remove("d-none")

})