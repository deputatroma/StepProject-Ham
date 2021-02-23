(function($) {
    $(function() {
        $("ul.tabsCaption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabsContent")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})($);


$(document).ready(function() {
    $('.menu li a').click(function(event) {
        event.preventDefault();

        $('.menu li').removeClass('selected');
        $(this).parent('li').addClass('selected');

        let imgWidth = '278px';
        let imgHeight = '200px'
        let thisItem 	= $(this).attr('rel');

        if(thisItem !== "all") {
            $('.item li[rel='+thisItem+']').stop()
                .animate({'width' : imgWidth,
                    'height' : imgHeight,
                    'opacity' : 1,
                    'marginRight' : 0,
                    'marginLeft' : 0
                });
            $('.item li[rel!='+thisItem+']').stop()
                .animate({'width' : 0,
                    'height' : imgHeight,
                    'opacity' : 1,
                    'marginRight' : 0,
                    'marginLeft' : 0
                });
        } else {
            $('.item li').stop()
                .animate({'opacity' : 1,
                    'height' : imgHeight,
                    'marginRight' : 0,
                    'marginLeft' : 0,
                    'width' : imgWidth,
                });
        }
    })
    $('.item li img').animate({'opacity' : 1}).hover(function() {
        $(this).animate({'opacity' : 1});
    }, function() {
        $(this).animate({'opacity' : 1});
    });
    $('.classSlick').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.classSlick2').slick({
        dots: false,
        centerMode: true,
        arrows:true,
        prevArrow: '.myNawLeft',
        nextArrow: '.myNawRight',
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor:'.classSlick',
        focusOnSelect: true,
        variableHeight: true,
        variableWidth: true
    });
});


function createNewImg() {
    $('#loadMoreButton').remove();
    $('.preloader').css('display','block');
    setTimeout(getMoreImgs, 2000);
    function getMoreImgs(){
        $('.displayNone').removeClass('displayNone');
        $('.categoryItemsSecond').attr('class','categoryItems');
        $('.categoryItems').css('display','block');
        $('.categoryItemsSecond').removeClass('.categoryItemsSecond');
        $('.contentFourthDiv').css('min-height','1500px');
        $('.contentFourthDiv').css('height','auto');
        $('.preloader').css('display','none');
    }
}
$('#loadMoreButton').on('click',createNewImg);


const date = new Date();
const day = date.getDay();
const month = date.getMonth();

function showMonth(month) {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[month];
};
$( ".day" ).prepend(day);
$( ".month" ).prepend(showMonth(month));


function createNewImg2() {
    $('#loadMoreButton2').remove();
    $('.preloader').css('display','block');
    setTimeout(getMoreImgs, 2000);
    function getMoreImgs(){
        $('.displayNone2').removeClass('displayNone2');
        $('.gallery').css('min-height','1750px');
        $('.gallery').css('height','auto');
        $('.preloader').css('display','none');
    }
}
$('#loadMoreButton2').on('click',createNewImg2);