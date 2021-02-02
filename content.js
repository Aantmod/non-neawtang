console.log("Test")

let jquery = document.createElement("script");
jquery.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
document.body.appendChild(jquery);

// $("div#root div.right-column").css('display', 'block')
$("div#root div.right-column div.channel-root__right-column")
    .css('width', '103rem')
    .css('top', '58rem')
    .css('height', '59%')
    .css('transform', 'translateX(-103rem) translateZ(0px)');

$("div#root div.right-column div.right-column__toggle-visibility")
    .css('left', '-68rem')
    .css('top', '59rem');

$("div#root .channel-root__player--with-chat")
    .css('width', 'calc(100% - 0rem)');
$("div#root .persistent-player")
    .css('width', 'calc(100% - 0rem)');

$("div#root .channel-root__info").css("margin-top", "578px")
