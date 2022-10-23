# Page panning JS
Watch [example](https://evgenii-d.github.io/page-panning-js/) in full-screen mode (F11 in most browsers)

# Usage
Set `delay`(milliseconds) and `step`(pixels)  through [data.js](https://github.com/evgenii-d/page-panning-js/blob/main/js/data.js)
```
const DATA = {
   "pagePanning": {
      "delay": 1,
      "step": 1
   }
   ...
}
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

Change background video in [index.html](https://github.com/evgenii-d/page-panning-js/blob/main/index.html) if needed
```
<body>
    <main>
        <video src="assets/video/background.webm" loop autoplay muted></video>
    </main>
</body>
```
<br>

Update svg mask for new video and add `data-id` attribute to all clickable areas. Check [mask.svg](https://github.com/evgenii-d/page-panning-js/blob/main/assets/images/mask.svg) for an example.
<br>
Replace inline svg in `SVG_MASK` variable in [data.js](https://github.com/evgenii-d/page-panning-js/blob/main/js/data.js)


# API
|call|info|
|---|---|
|pagePanning.delay()|delay in milliseconds|
|pagePanning.step()|step in pixels|
|pagePanning.play()|start panning|
|pagePanning.pause()|stop panning|
|pagePanning.reset()|reset panning|

