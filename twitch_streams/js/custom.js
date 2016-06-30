var channels = ["trick2g", "sodapoppin", "C9Sneaky", "Voyboy", "Supermetroidlol", "freecodecamp", "fate_twisted_na", "Sdiana2NA"];

function getStreams() {
  channels.forEach(function(channel) {
    var game, status, logo, name, desc;
    $.getJSON("https://api.twitch.tv/kraken/streams/"+channel, function(data) {
      if (data.stream) {
        game = data.stream.game;
        status = "online"
      } else {
        game = "offline";
        status = "offline"
      } 
      $.getJSON("https://api.twitch.tv/kraken/channels/" + channel, function(data) {
        logo = data.logo; 
        name = data.display_name;
        desc = status === "online" ? ": " + data.status : "";
        html = "<div class='row " + 
        status + "'><div class='col-sm-2 col-xs-2'><img class='logo' src=" + 
        logo + "></div><div class='col-sm-3 col-xs-10' id='name'><a target='_blank' href='" + 
        data.url + "'>" + 
        name + "</a></div><div class='col-sm-7 col-xs-10' id='desc'>" + 
        game + "<span class='hidden-xs'>" +
        desc + "</span></div></div>";
        //$(".streamers").append(html);
        if (status === "online") $(".streamers").prepend(html);
        if (status === "offline") $(".streamers").append(html);
      });
    });
  })
}

$("document").ready(function() {
  getStreams();
  
  $("button#all").click(function() {
    $(".online").css("display", "");
    $(".offline").css("display", "");
  });
  $("button#online").click(function() {
    $(".online").css("display", "");
    $(".offline").css("display", "none");
  });
  $("button#offline").click(function() {
    $(".online").css("display", "none");
    $(".offline").css("display", "");
  });
})