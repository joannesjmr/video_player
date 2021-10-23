const $video = document.querySelector("#video")
  const $play = document.querySelector("#play")
  const $pause = document.querySelector("#pause")
  const $backward = document.querySelector("#backward")
  const $forward = document.querySelector("#forward")

  $play.addEventListener("click", handlePlay)
  $pause.addEventListener("click", handlePausa)

  function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log("Le diste click en el boton play");
  }

  function handlePausa() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log("Le diste click en el boton pause");
  }


$backward.addEventListener("click", handleBackward)

function handleBackward(){
  $video.currentTime -= 10
  console.log("Para atras 10 segundos")
}

$forward.addEventListener("click", handleForward)

function handleForward(){
  $video.currentTime += 10
  console.log("Para adelante 10 segundos", $video.currentTime)
}

const $progress = document.querySelector("#progress")
$video.addEventListener("loadedmetadata", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpdate)


  function handleLoaded(){
    $progress.max = $video.duration
    console.log("Ha cargado mi video", $video.duration)
  }

  function handleTimeUpdate(){
    $progress.value = $video.currentTime
    //console.log("tiempo actual", $video.currentTime)
  }

  $progress.addEventListener("input", handleInput)

  function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
  }