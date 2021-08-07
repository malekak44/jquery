$(document).ready(function () {
    $('#inner div:eq(1)');
    $('#inner div:lt(3)');
    $('#inner div:gt(1)');
    $('#intro').on({
        click: function () {
            $(this).css('background-color', 'tan');
        },
        dblclick: function () {
            $(this).css('background-color', 'teal')
        },
        mouseover: function () {
            $(this).css({ 'background-color': 'skyblue', 'color': 'white' });
        },
        mouseleave: function () {
            $(this).css('background-color', 'lightgray');
        },
        mouseenter: function () {
            $(this).css('background-color', 'forestgreen');
        },
        mousemove: function () {
            $(this).css('background-color', 'rgb(188, 195, 204)');
        },
        mousedown: function () {
            $(this).css('background-color', 'salmon');
        },
        mouseup: function () {
            $(this).css('background-color', 'pink');
        },
        mouseout: function () {
            $(this).css({ 'background-color': 'white', 'color': '#2b4468' });
        },
        contextmenu: function () {
            $(this).css('background-color', '#C10037');
        }
    });

    $('#offBtn').click(function () {
        $('#intro').off();
        $('#intro').off('mousemove');
    });

    $('#form').hover(function () {
        $(this).css('color', '#C10037');
    })

    $('input').on({
        // focus: function () {
        //     $(this).css('background-color', 'gray');
        // },
        // blur: function () {
        //     $(this).css('background-color', 'white');
        // },
        select: function () {
            $(this).css('background-color', 'aliceblue');
        }
        // keyup: function () {
        //     $(this).css('background-color', '#72C2A3');
        // }
        // keypress keydown 
    });

    $('select').on({
        change: function () {
            $(this).css({ 'background-color': 'gray', 'color': 'white' })
        }
    });

    $('form').submit(function (e) {
        e.preventDefault();
        e.isDefaultPrevented(); //return true 
        $('#submitBtn').val('Submitted');
    });

    $('#hideBtn').click(function () {
        $('#box').hide('slow');
    });

    $('#showBtn').click(function () {
        $('#box').show('slow');
    });

    $('#toggleBtn').click(function () {
        $('#box').toggle('slow');
    });

    $('#fadeInBtn').click(function () {
        $('#box').fadeIn(1000);
    });

    $('#fadeOutBtn').click(function () {
        $('#box').fadeOut(1000);
    });

    $('#fadeToggleBtn').click(function () {
        $('#box').fadeToggle('fast');
    });

    $('#fadeToBtn').click(function () {
        $('#box').fadeTo(1000, 0.5, function () {
            console.log('Now box is trasparent')
        })
    });

    $('#addClassBtn').click(function () {
        $('#box').addClass('bluish');
    });

    $('#removeClassBtn').click(function () {
        $('#box').removeClass('bluish');
    });

    $('#toggleClassBtn').click(function () {
        $('#box').toggleClass('bluish');
    });

    $('#slideUpBtn').click(function () {
        $('#box').slideUp('slow');
    });

    $('#slideDownBtn').click(function () {
        $('#box').slideDown('slow');
    });

    $('#slideToggleBtn').click(function () {
        $('#box').slideToggle('slow');
    });

    $('#animateBtn').click(function () {
        $('#box').animate({
            width: 'toggle',
            padding: '+=2px',
            overflow: 'hidden'
        }, 'slow')
    });

    $('#multiAnimateBtn').click(function () {
        $('#box').animate({
            marginRight: '60%'
        }, 'slow')
        $('#box').animate({
            marginRight: '1%'
        }, 'slow')
        $('#box').animate({
            marginRight: '30%'
        }, 'slow')
    });

    $('#stopBtn').click(function () {
        $('#box').stop(); //stop the first animation
        $('#box').stop(true); //stop all animations
        $('#box').stop(true, true); //take to the end point
    });

    $('#chainBtn').click(function () {
        $('#box').slideUp('slow').slideDown('slow');
    });

    $('#getBtn').click(function () {
        $('#box').html();
        $('#box').text();
        $('#country').val();
        $('#bridge').attr('src');
    });

    $('#setBtn').click(function () {
        $('#heading').text('Intro of jQuery');
        $('#box').html(`<h3>Beautiful Pictures</h3>
        <div class='images'>
        <img id='bridge' src='images/bridge.jpg' alt='bridge'>
        <img src='images/shanghai.jpg' alt='shanghai'>
        <img src='images/paris.jpg' alt='paris'></div>`);
        $('#country').val('Canada');
        $('#bridge').attr({
            'src': 'images/garden-bridge.jpg',
            'title': 'Beautiful Garden Bridge'
        })
    });

    $('#appendBtn').click(function () {
        $('#box').append(`<img src='images/sea-moon.jpg' alt='sea-moon'>`);
    });

    $('#prependBtn').click(function () {
        $('#box').prepend(`<img src='images/pond-cottage.jpg' alt='cottage'>`);
    });

    $('#appendToBtn').click(function () {
        $('#data p').appendTo('#box');
    });

    $('#prependToBtn').click(function () {
        $('#intro p').prependTo('#box');
    });

    $('#cloneBtn').click(function () {
        $('#data img').clone().prependTo('#box');
    });

    $('#afterBtn').click(function () {
        $('#box').after(`<div class='imageDiv'>
        <img src='images/blue-bird.jpg' alt='bird'>
        </div>`);
    });

    $('#beforeBtn').click(function () {
        $('#box').before(`<div class='imageDiv'>
        <img src='images/parrot.jpg' alt='parrot'>
        </div>`);
    });

    $('#replaceBtn').click(function () {
        $('#box h3').replaceWith('<h3>Flowery Pictures</h3>');
    });

    $('#replaceAllBtn').click(function () {
        // $('h3').replaceAll(`<h3>Replacement</h3>`);
    });

    $('#wrapBtn').click(function () {
        $('#data p').wrap('<div class="bluish"></div>');
    });

    $('#unWrapBtn').click(function () {
        $('#data p').unwrap();
    });

    $('#wrapAllBtn').click(function () {
        $('img').wrapAll('<div class="bluish"></div>');
    });

    $('#wrapInnerBtn').click(function () {
        $('p').wrapInner('<i></i>');
    });

    $('#emptyBtn').click(function () {
        $('#box').empty();
    });

    $('#removeBtn').click(function () {
        $('#box').remove();
        $('div').remove('#intro, #form');
    });

    $('#widthBtn').click(function () {
        $('#box').width(); //only width
        $('#box').innerWidth(); //includes padding
        $('#box').outerWidth(); //includes padding and border
        $('#box').outerWidth(true); //includes padding, border and margin
    });

    $('#heightBtn').click(function () {
        $('#box').height(); //only height
        $('#box').innerHeight(); //includes padding
        $('#box').outerHeight(); //includes padding and border
        $('#box').outerHeight(true); //includes padding, border and margin
    });

    $('#positionBtn').click(function () {
        const position = $('#box').position();
        alert('Top: ' + position.top + ', Left: ' + position.left);
    });

    $('#offsetBtn').click(function () {
        const offset = $('#box').offset();
        alert('Top: ' + offset.top + ', Left: ' + offset.left);
    });

    $('#box').offset({ top: 335, left: 404.5 });

    $(window).scroll(function () {
        'Window is scrolling';
    });

    $(window).resize(function () {
        'Window is resizing';
    });

    $(window).scrollTop(); //assign value to it
    $(window).scrollLeft(); //assign value to it

    // Traversing Dom
    // Ancestors
    $('#inner').parent();
    $('#inner').parents();
    $('#inner').parents('#main-outer');
    $('#inner div').parentsUntil('#main-outer');
    $('#inner').offsetParent();

    // Descendants
    $('#inner').children();
    $('#inner').children('#child-C');
    $('#inner').find('*');
    $('#inner').find('h2');

    // Siblings
    $('#child-C').siblings();
    $('#child-C').siblings('#child-B');
    $('#child-C').next();
    $('#child-B').nextAll();
    $('#child-A').nextUntil('#child-D');
    $('#child-D').prev();
    $('#child-D').prevAll();
    $('#child-D').prevUntil('#child-A');
    $('#child-B').closest('ul');

    // Filtering
    $('#inner div').first();
    $('#inner div').last();
    $('#inner div').eq(2);
    $('#inner div').eq(-3);
    $('#inner div').filter('#child-B');
    $('#inner div').not('#child-B');
    $('#inner div').slice(2);
    $('#inner div').slice(2, 3);

    // Truthy and Falsy
    $('#box').hasClass('bluish');
    $('#box').has('.images');
    $('#box').has('h3, img');
    $('.images').parent().is('div');

    // The Each Method
    $('img').each(function () {
        $(this).attr('src');
        $(this).attr({ 'title': 'Painting' });
    });

    // Events
    $('#cursorBtn').click(function () {
        $(document).mousemove(function (event) {
            const x = event.pageX;
            const y = event.pageY;
            $('#cursor').show().offset({ top: y, left: x });
        });
    });

    $('#box').on('mousemove mouseenter mouseout click dblclick', function (event) {
        'Type: ' + event.type + ', Which: ' + event.which;
    });

    $('#nameInput').on('keydown', function (event) {
        event.type + ', Char: ' + event.which;
    });

    $('#box').on('click', function (event) {
        event.target;
        event.target.nodeName;
        event.target.innerHTML;
    });

    $('#inner').click(function () {
        alert('Inner div');
    });

    $('#inner div').click(function (e) {
        alert('Child div of Inner div');
        e.stopPropagation();
        e.isPropagationStopped();
    });

    $('img').each(function (i) {
        $(this).on('click', { value: i }, function (e) {
            e.data.value;
        });
    });

    // Ajax
    $('#data').load('demo.html', function (responseTxt, statusTxt, xhr) {
        if (statusTxt == 'success') {
            'Success: ' + 'loaded successfully';
        }
        if (statusTxt == 'error') {
            'Error: ' + xhr.status + ': ' + xhr.statusText + ' : ' + responseTxt;
        }
    });

    // $.noConflict();
    // jQuery(document).ready(function($){
    //   $("button").click(function(){
    //     $("p").text("jQuery is still working!");
    //   });
    // });

});