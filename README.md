# Page panning JS
Watch [example](https://evgenii-d.github.io/page-panning-js/) in full-screen mode (F11 in most browsers)

# Usage
Add [data.js](https://github.com/evgenii-d/page-panning-js/blob/main/js/data.js) and [page-panning.js](https://github.com/evgenii-d/page-panning-js/blob/main/js/page-panning.js) to your page
```
<script src="data.js" defer></script>
<script src="script.js" defer></script>
```
<br>

Set `delay`, `step`  through [data.js](https://github.com/evgenii-d/page-panning-js/blob/main/js/data.js)
```
const DATA = {
   "pagePanning": {
      "delay": 1,
      "step": 1
   }
   ...
}
```

or from your script
```
pagePanning.delay()
pagePanning.step()
```
<br>

Add images or videos to [data.js](https://github.com/evgenii-d/page-panning-js/blob/main/js/data.js) as shown below
```
const DATA = {
  ...
   "1": {
      "video": "assets/video/sky.webm",
      "caption": "Sky"      
   },
   "2": {
      "image": "assets/images/2.webp",
      "caption": "Moody cat"
   },
   "3": {
      "image": "assets/images/3.webp",
      "caption": "Gorgeous horse"
   },
   "4": {
      "video": "assets/video/ocean.webm",
      "caption": "3D ocean"
   },
   "5": {
      "image": "assets/images/1.webp",
      "caption": "Squirrel"
   }
   ...
}
```
<br>

And start panning from your script
```
pagePanning.play()
```

# API
|call|info|
|---|---|
|pagePanning.delay()|delay in milliseconds|
|pagePanning.step()|step in pixels|
|pagePanning.play()|start panning|
|pagePanning.pause()|stop panning|
|pagePanning.reset()|reset panning|

