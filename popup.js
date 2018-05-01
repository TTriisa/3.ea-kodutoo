// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

let colorsContainer = document.getElementById('colors');

chrome.storage.sync.get("allColors", function(data){
  for(let i=0;i<data.allColors.length; i++) {
    let btn = document.createElement("button")
    btn.style.backgroundColor = data.allColors[i]
    btn.addEventListener("click", function(event) {
      let colorCode = event.target.style.backgroundColor
      chrome.storage.sync.set({color: colorCode}, function() {
        console.log('color is ' + colorCode) ;
      })
      console.log(colorCode)
        //chrome.tabs.executeScript(
          //  {code: 'document.body.style.backgroundColor = "' + color + '";'});
    })
    colorsContainer.appendChild(btn)
  
  }
  
})


