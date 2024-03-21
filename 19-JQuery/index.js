$("h1").addClass("big-title margin-50");
$("button").text("bye");
$("button").html("<em>Hi</em>");

$("a").attr("href", "https://yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "red");
});

$("button").click(function(){
    $("h1").css("color", "purple");
})

$("input").keydown(function(event) {
    alert(event.key);
});

// $(document).keydown(function(event){
//     $("h1").text(event.key);
// });

$(document).on("keydown", function(event){
    $("h1").text(event.key);
});

$("h1").before("<button>New</button>"); //Before h1
$("h1").after("<button>New</button>"); //After h1
$("h1").prepend("<button>New</button>"); //Inside h1 before content
$("h1").append("<button>New</button>"); //Inside h1 after content

// $("button").remove();

$("button").on("click", function(){
    // $("h1").toggle();
    // $("h1").hide();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5, margin: 100});
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});