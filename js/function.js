var facebook_href = 'https://www.facebook.com/chano.lee.9';
var instagram_href = 'https://www.instagram.com/sooooppa/';
var linkedin_href = 'https://www.linkedin.com/in/chanolee/';
var github_href = 'https://github.com/kwyes';

$(document).ready(function(){
  $(".list-inline-item .fa-facebook").click(function () {
    location.href = facebook_href;
  });
  $(".list-inline-item .fa-instagram").click(function () {
    location.href = instagram_href;
  });
  $(".list-inline-item .fa-linkedin").click(function () {
    location.href = linkedin_href;
  });
  $(".list-inline-item .fa-github").click(function () {
    location.href = github_href;
  });
});



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
