
function UpdateColor () {
  chrome.storage.sync.get('color', function (data) {
    let imgs = document.getElementsByTagName('img')
    for (let i = 0; i < imgs.length; i++) {
      let alt = imgs[i].alt
      if (alt.indexOf('Seen by ') >= 0) {
        imgs[i].style.border = '2px solid ' + data.color
      }
    }
  })
}
setInterval(UpdateColor, 3000)
