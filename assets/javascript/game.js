//GLOBAL VARIABLES
var wins = 0;

var losses = 0;

var totalClicks = 0;

$(".wins").html("Wins: " + wins);
$(".losses").html("Losses: " + losses);

//RANDOM TARGET NUMBER
var targetNumber = Math.ceil(Math.random() * 101) + 19;

console.log(targetNumber);

document.querySelector("#targetNumber").textContent = targetNumber;

function loadPage() {
  $(".crystalImages").empty();
  $(".sum").empty();
  $("#targetNumber").empty();
  targetNumber = Math.ceil(Math.random() * 101) + 19;
  $("#targetNumber").html(targetNumber);

  console.log(targetNumber);

  //RANDOM CRYSTAL VALUES and TESTING
  Crystal1 = Math.ceil(Math.random() * 11) + 1;

  console.log(Crystal1);

  Crystal2 = Math.ceil(Math.random() * 11) + 1;

  console.log(Crystal2);

  Crystal3 = Math.ceil(Math.random() * 11) + 1;

  console.log(Crystal3);

  Crystal4 = Math.ceil(Math.random() * 11) + 1;

  console.log(Crystal4);

  //Using attr to set RANDOM VALUE TO IMAGES)
  var img1 = $("<img>");
  img1.attr("src", "./assets/images/crystal-1.jpg");
  img1.attr("class", "image");
  img1.attr("data-id", Crystal1);

  var img2 = $("<img>");
  img2.attr("src", "./assets/images/crystal-2.jpg");
  img2.attr("class", "image");
  img2.attr("data-id", Crystal2);

  var img3 = $("<img>");
  img3.attr("src", "./assets/images/crystal-3.jpg");
  img3.attr("class", "image");
  img3.attr("data-id", Crystal3);

  var img4 = $("<img>");
  img4.attr("src", "./assets/images/crystal-4.jpg");
  img4.attr("class", "image");
  img4.attr("data-id", Crystal4);

  //Inserting images in the HTML Doc
  $(".crystalImages").append(img1, img2, img3, img4);
}
loadPage();

//Return number value associated with image and total points sum
$(document).on("click", ".image", function() {
  var getImageValue = parseInt($(this).attr("data-id"));

  totalClicks = totalClicks + getImageValue;

  $(".sum").html(totalClicks);

  //CONDITIONS FOR WL, WRITING NUMBER of WL to DOC, ALERTING WL, RELOAD GAME
  if (totalClicks > targetNumber) {
    alert("You lose!");
    losses++;
    $(".losses").html("Losses:" + losses);
    totalClicks = 0;
    loadPage();
  }

  if (totalClicks === targetNumber) {
    alert("You win!");
    wins++;
    $(".wins").html("Wins:" + wins);
    totalClicks = 0;
    loadPage();
  }
});
