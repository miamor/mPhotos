function imageZoom(imgID, resultID, enabled) {

    var img, lens, result, cx, cy
    img = document.getElementById(imgID)
    result = document.getElementById(resultID)
    /* Create lens: */
    lens = document.getElementById('img-zoom-lens')
    /* Set background properties for the result DIV */
    if (result) {
        result.style.backgroundImage = "url('" + img.src + "')"
    }

    if (result && lens && !enabled) {
        lens.style.visibility = "hidden"

        result.style.backgroundSize = "100% 100%"
        result.style.backgroundPosition = "0px 0px"

    } else if (result && lens) {
        // $('#img-zoom-lens').show()
        lens.style.visibility = "visible"
        // lens = document.createElement("DIV");
        // lens.setAttribute("class", "img-zoom-lens");
        // /* Insert lens: */
        // img.parentElement.insertBefore(lens, img);
        /* Calculate the ratio between result DIV and lens: */
        cx = result.offsetWidth / lens.offsetWidth
        cy = result.offsetHeight / lens.offsetHeight
        /* Set background properties for the result DIV */
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px"
        /* Execute a function when someone moves the cursor over the image, or the lens: */
        lens.addEventListener("mousemove", moveLens)
        img.addEventListener("mousemove", moveLens)
        /* And also for touch screens: */
        lens.addEventListener("touchmove", moveLens)
        img.addEventListener("touchmove", moveLens)
        function moveLens(e) {
            var pos, x, y
            /* Prevent any other actions that may occur when moving over the image */
            e.preventDefault()
            /* Get the cursor's x and y positions: */
            pos = getCursorPos(e)

            x = pos.x - (lens.offsetWidth / 2)
            y = pos.y - (lens.offsetHeight / 2)

            /* Calculate the position of the lens: */
            lens_x = x + img.offsetLeft
            lens_y = y + img.offsetTop

            /* Prevent the lens from being positioned outside the image: */
            if (lens_x > img.width - lens.offsetWidth/2) {
                lens_x = img.width - lens.offsetWidth + img.offsetLeft
            }
            if (lens_x < lens.offsetWidth / 2) {
                lens_x = 0 + img.offsetLeft
            }
            if (lens_y > img.offsetTop + img.height - lens.offsetHeight) {
                lens_y = img.offsetTop + img.height - lens.offsetHeight
            }
            if (lens_y < img.offsetTop + lens.offsetWidth / 2) {
                lens_y = img.offsetTop
            }

            /* Set the position of the lens: */
            lens.style.left = lens_x + "px"
            lens.style.top = lens_y + "px"
            /* Display what the lens "sees": */
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px"
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0
            e = e || window.event
            /* Get the x and y positions of the image: */
            a = img.getBoundingClientRect()
            /* Calculate the cursor's x and y coordinates, relative to the image: */
            x = e.pageX - a.left
            y = e.pageY - a.top
            /* Consider any page scrolling: */
            x = x - window.pageXOffset
            y = y - window.pageYOffset
            return {x : x, y : y}
        }
    }
} 


api = {
    path: '../php/index.php',
    onError: null
}
api.post = function (fn, params, callback) {
    params = $.extend({
        function: fn
    }, params)
    const success = (data) => {
        // Catch errors
        if (typeof data === 'string' && data.substring(0, 7) === 'Error: ') {
            console.log(data.substring(7, data.length), params, data)
            return false
        }
        callback(data)
    }
    const error = (jqXHR, textStatus, errorThrown) => {
        console.log('Server error or API not found.', params, errorThrown)
    }
    $.ajax({
        type: 'POST',
        url: api.path,
        data: params,
        dataType: 'json',
        success,
        error
    })
}


var slide_data = []
var slide_keys = []
var m = {
    albumID: localStorage.getItem('albumID')
}
api.post("Slide::getSlides", m, function (o) {
    //console.log(o)
    var j = 0
    slide_keys = Object.keys(o.content)
    $.each(o.content, function (i, slide) {
        // slide_data.push({
        //     'src': '../' + slide.url,
        //     'title': '', //slide.title,
        //     'copy': slide.description ? slide.description : ''
        // })
        // console.log(i)
        slide_data['s'+slide.id] = {
                'src': '../' + slide.url,
                'title': '', //slide.title,
                'copy': slide.description ? slide.description : ''
            }
    })
    console.log(slide_data)
    presentation(slide_data)
})

function presentation(slide_data) {
    var currentStage = JSON.parse(localStorage.getItem('currentStage')),
        currentIndex = parseInt(currentStage.index),
        nextIndex = currentIndex < slide_keys.length - 1 ? currentIndex + 1 : 0,
        prevIndex = currentIndex > 0 ? currentIndex - 1 : (slide_keys.length - 1)
    var currentKey = slide_keys[currentIndex],
        nextKey = slide_keys[nextIndex],
        prevKey = slide_keys[prevIndex]

    console.log(currentIndex)
    var slides = [],
        captions = []

    var container = document.getElementById('container')
    var leftSlider = document.getElementById('left-col')
    // console.log(leftSlider)

    // var caption = document.getElementById('slider-caption')
    // var caption_heading = caption.querySelector('caption-heading')

    // for (var i = 0; i < slide_data.length; i++) {
    for (var i in slide_data) {
        var slide = document.createElement('div'),
            caption = document.createElement('div'),
            slide_title = document.createElement('div')

        slide.classList.add('slide')
        slide.setAttribute('style', 'background-image:url(' + slide_data[i].src + ');background-repeat:no-repeat')
        // slide.setAttribute('src', slide_data[i].src)
        
        slide.setAttribute('id', i)
        caption.classList.add('caption')
        slide_title.classList.add('caption-heading')
        slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>'

        switch (i) {
            case currentKey:
                slide.classList.add('current')
                caption.classList.add('current-caption')
                break
            case nextKey:
                slide.classList.add('next')
                caption.classList.add('next-caption')
                break
            case prevKey:
                slide.classList.add('prev')
                caption.classList.add('previous-caption')
                break
            default:
                break
        }
        caption.appendChild(slide_title)
        caption.insertAdjacentHTML('beforeend', '<div class="caption-subhead"><span>' + slide_data[i].copy + ' </span></div>')
        slides.push(slide)
        captions.push(caption)
        leftSlider.appendChild(slide)
        container.appendChild(caption)

        // imageZoom(i, 'zoomed_image', true)

    }

    console.log(slides)
    console.log('currentStage='+currentStage)
    console.log('currentKey='+currentKey)

        
    // Get zoom window
    // console.log(localStorage.getItem('control'))
    // var control = JSON.parse(localStorage.getItem('control')),
    //     x = control.x,
    //     y = control.y,
    //     img = control.img,
    //     lens = control.lens,
    //     cx = slides[currentIndex].offsetWidth / lens.offsetWidth
    //     cy = slides[currentIndex].offsetHeight / lens.offsetHeight
    
    // if (control.enabled) {
    //     slides[currentIndex].style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px"
    //     slides[currentIndex].style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px"
    // }

    var reloadSlides = setInterval(function () {
        setSlide()
    }, 1000)

    reloadSlides


    function setSlide() {
        currentStage_new = JSON.parse(localStorage.getItem('currentStage'))
        // console.log(currentStage_new)
        currentIndex_new = parseInt(currentStage_new.index)
        nextIndex_new = currentIndex_new < slide_keys.length - 1 ? currentIndex_new + 1 : 0
        prevIndex_new = currentIndex_new > 0 ? (currentIndex_new - 1) : (slide_keys.length - 1)

        currentKey_new = slide_keys[currentIndex_new]
        nextKey_new = slide_keys[nextIndex_new]
        prevKey_new = slide_keys[prevIndex_new]

        if (currentIndex_new !== currentIndex) {
            slides[currentIndex].classList.remove('current')
            slides[currentIndex_new].classList.add('current')
            slides[nextIndex].classList.remove('next')
            slides[nextIndex_new].classList.add('next')
            slides[prevIndex].classList.remove('prev')
            slides[prevIndex_new].classList.add('prev')

            console.log('currentIndex = '+currentIndex)
            console.log('nextIndex = '+nextIndex)
            console.log('prevIndex = '+prevIndex)

            console.log('currentIndex_new = '+currentIndex_new)
            console.log('nextIndex_new = '+nextIndex_new)
            console.log('prevIndex_new = '+prevIndex_new)

            currentIndex = currentIndex_new
            nextIndex = nextIndex_new
            prevIndex = prevIndex_new

        }



        // Get zoom window
        var control = JSON.parse(localStorage.getItem('control')),
            img = control.img,
            rx = slides[currentIndex].offsetWidth / img.width,
            ry = slides[currentIndex].offsetHeight / img.height

        if (img.height * rx > slides[currentIndex].offsetHeight) {
            slide_height = slides[currentIndex].offsetHeight
            slide_width = img.width * ry

            // slides[currentIndex].offsetWidth = slide_width
            // slides[currentIndex].style.width = slide_width+'px'
        } else {
            slide_height = img.height * rx
            slide_width = slides[currentIndex].offsetWidth

            // slides[currentIndex].offsetHeight = slide_height
            // slides[currentIndex].style.height = slide_height+'px'
        }
        slides[currentIndex].style.width = (slide_width) + "px"
        slides[currentIndex].style.height = (slide_height) + "px"
        // console.log(control)

        var slide_width = slides[currentIndex].offsetWidth
        var slide_height = slides[currentIndex].offsetHeight
        // console.log(slide_width+' ~~ '+slide_height)

        if (control.enabled) {
            var x = control.x,
                y = control.y,
                lens = control.lens
            
            var cx = slide_width / lens.offsetWidth,
                cy = slide_height / lens.offsetHeight

            if (lens.offsetHeight * cx > slide_height) {
                cx = cy
            } else {
                cy = cx
            }
            // console.log(img.width+" * "+cx+" = "+(img.width * cx))
    
            slides[currentIndex].style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px"
            slides[currentIndex].style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px"

            // slides[currentIndex].style.width = ((img.width) * cx) + "px"
        } else {
            // slides[currentIndex].style.backgroundSize = (slides[currentIndex].offsetWidth) + "px " + (slides[currentIndex].offsetHeight) + "px"
            slides[currentIndex].style.backgroundSize = slide_width + "px " + slide_height + "px"

            slides[currentIndex].style.backgroundPosition = "0px 0px"

            // slides[currentIndex].style.width = (slide_width) + "px"
        }

        // margin = 
        // slides[currentIndex].style.margin = "0 "+margin+"px"
    }

    var heading = document.querySelector('.caption-heading')


    // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
    function whichTransitionEvent() {
        var t,
            el = document.createElement("fakeelement")

        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t]
            }
        }
    }

    var transitionEvent = whichTransitionEvent()
    caption.addEventListener(transitionEvent, customFunction)

    function customFunction(event) {
        caption.removeEventListener(transitionEvent, customFunction)
        console.log('animation ended')

        // Do something when the transition ends
    }
}