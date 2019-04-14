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
var m = {
    albumID: localStorage.getItem('albumID')
}
api.post("Slide::getSlides", m, function (o) {
    //console.log(o)
    var j = 0
    $.each(o.content, function (i, slide) {
        slide_data.push({
            'src': '../' + slide.url,
            'title': '', //slide.title,
            'copy': slide.description ? slide.description : ''
        })
    })
    console.log(slide_data)
    presentation(slide_data)
})

function presentation(slide_data) {
    var currentStage = JSON.parse(localStorage.getItem('currentStage')),
        currentIndex = parseInt(currentStage.index),
        nextIndex = currentIndex < slide_data.length - 1 ? currentIndex + 1 : 0,
        prevIndex = currentIndex > 0 ? currentIndex - 1 : slide_data.length - 1

    var slides = [],
        captions = []

    var container = document.getElementById('container')
    var leftSlider = document.getElementById('left-col')
    // console.log(leftSlider)

    // var caption = document.getElementById('slider-caption')
    // var caption_heading = caption.querySelector('caption-heading')

    for (var i = 0; i < slide_data.length; i++) {
        var slide = document.createElement('div'),
            caption = document.createElement('div'),
            slide_title = document.createElement('div')

        slide.classList.add('slide')
        slide.setAttribute('style', 'background:url(' + slide_data[i].src + ')')
        caption.classList.add('caption')
        slide_title.classList.add('caption-heading')
        slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>'

        switch (i) {
            case currentIndex:
                slide.classList.add('current')
                caption.classList.add('current-caption')
                break
            case nextIndex:
                slide.classList.add('next')
                caption.classList.add('next-caption')
                break
            case prevIndex:
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
    }

    console.log(currentStage)
    console.log(slides)

    var reloadSlides = setInterval(function () {
        setSlide()
    }, 1000)

    reloadSlides


    function setSlide() {
        currentStage_new = JSON.parse(localStorage.getItem('currentStage'))
        currentIndex_new = parseInt(currentStage_new.index)
        nextIndex_new = currentIndex_new < slide_data.length - 1 ? currentIndex_new + 1 : 0
        prevIndex_new = currentIndex_new > 0 ? currentIndex_new - 1 : slide_data.length - 1

        if (currentIndex_new !== currentIndex) {
            console.log('currentStage new:')
            console.log(currentStage_new)
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