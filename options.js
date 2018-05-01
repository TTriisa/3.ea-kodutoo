// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

let colorArray = []
let buttonDiv = document.getElementById('buttonDiv')
let colorSubmit = document.getElementById('submitColor')
let colorPicker = document.getElementById('colorPicker')

chrome.storage.sync.get('allColors', function (data) {
  constructOptions(data.allColors)
  colorArray = data.allColors

  colorSubmit.addEventListener('click', function (event) {
    colorArray.push(colorPicker.value)
    createButton(colorPicker.value)
    saveColors()
  })
})

function saveColors () {
  chrome.storage.sync.set({allColors: colorArray})
}

function createButton (colorValue) {
  let button = document.createElement('button')
  button.dataset.color = colorValue
  button.style.backgroundColor = colorValue
  button.addEventListener('click', function (event) {
    if (confirm('Are you sure you wanna delete this color?')) {
      let index = colorArray.indexOf(this.dataset.color)
      if (index > -1) {
        colorArray.splice(index, 1)
      }
      this.parentElement.removeChild(this)
      saveColors()
    }
  })
  buttonDiv.appendChild(button)
}

function constructOptions (allColors) {
  for (let colorValue of allColors) {
    createButton(colorValue)
  }
}
