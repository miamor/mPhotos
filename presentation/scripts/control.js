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


$(document).ready(function () {
    var m = {
        albumID: localStorage.getItem('albumID')
    };
    api.post("Slide::getSlides", m, function (o) {
        //console.log(o);
        var j = 0;
        $.each(o.content, function (i, slide) {
            console.log(slide);
            $('body').append('<div class="notes-handout">\
            <div class="slide-and-notes">\
                <div class="slide slideContainer">\
                    <div class="componentContainer">\
                        <div class="transformContainer" style="-webkit-transform: scale(1, 1);-moz-transform: scale(1, 1);transform: scale(1, 1)">\
                            <div style="font-size: 72px;" class="antialias">\
                                <img style="position:relative;width:100%;height:100%" src="../' + slide.url + '"/>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="notes">\
                    Notes: ' + (slide.description ? slide.description : '') + '\
                </div>\
            </div>\
        </div>')
        });
    });

})