// Step 1: how do i randomize my target number
// Step 2: how do i get the cystals to have different numbers
// Step 2.5: how do i display my target number on the index (home page)
// Step 3: how do i keep count of wins and losses
// Step 4: what determines a win or loss (over/under #)
// Step 5: how do i increase my win counts by 1 if i get the target #
// Step 6: how do i increase the loss count by 1 if i go over
// Step 7: how do i reset the game after a win/loss


//math.random = 0-1
//to get the max range, multiply by math.random
//math.floor=converts a decimal into a whole number and rounds it down. 
//3.9  to 3
//math.ceil= converts a decimal into a whole number and rounds it up
//4.1 to 5
var wins = 0;

var losses =0;

$(".wins").html("wins: " + wins)
$(".losses").html("losses" + losses)

var targetNumber = Math.ceil(Math.random() * 101) + 19

console.log(targetNumber)

document.querySelector("#targetNumber").textContent = targetNumber

var Crystal1 = Math.ceil(Math.random() * 11) + 1

console.log(Crystal1)

var Crystal2 = Math.ceil(Math.random() * 11) + 1

console.log(Crystal2)

var Crystal3 = Math.ceil(Math.random() * 11) + 1

console.log(Crystal3)

var Crystal4 = Math.ceil(Math.random() * 11) + 1

console.log(Crystal4)

var totalClicks = 0

function loadPage() {
    //.text function only puts text
    // $(".crystalImages").text("<h1>hi Lynde</h1>")

    // .html function puts text and reads html formatting
    // $(".crystalImages").html("<h1 style='color:red'>h1</h1>")
    // .append is similar to .html except it doesn't overwrite itself (from top to bottom)
    // .prepend is .append but from bottom to top

    // if it has "", its static, if it doesn't, its dynamic. Dynamic means its always changing (you can use it again and again)
    // the left side of the () is the name of the attribute, the right side is the value
    // every time you use the < symbol, that means you're creating something dynamic
    $(".crystalImages").empty()
    $(".sum").empty()
    $("#targetNumber").empty()
    targetNumber = Math.ceil(Math.random() * 101) + 19
    $("#targetNumber").html(targetNumber)

    console.log(targetNumber)

    Crystal1 = Math.ceil(Math.random() * 11) + 1

    console.log(Crystal1)

    Crystal2 = Math.ceil(Math.random() * 11) + 1

    console.log(Crystal2)

    Crystal3 = Math.ceil(Math.random() * 11) + 1

    console.log(Crystal3)

    Crystal4 = Math.ceil(Math.random() * 11) + 1

    console.log(Crystal4)


    var img1 = $("<img>")
    img1.attr("src", "./assets/images/crystal-1.jpg")
    img1.attr("class", "image")
    img1.attr("data-id", Crystal1)
    
    var img2 = $("<img>")
    img2.attr("src", "./assets/images/crystal-2.jpg")
    img2.attr("class", "image")
    img2.attr("data-id", Crystal2)
    
    var img3 = $("<img>")
    img3.attr("src", "./assets/images/crystal-3.jpg")
    img3.attr("class", "image")
    img3.attr("data-id", Crystal3)
    
    var img4 = $("<img>")
    img4.attr("src", "./assets/images/crystal-4.jpg")
    img4.attr("class", "image")
    img4.attr("data-id", Crystal4)

    $(".crystalImages").append(img1, img2, img3, img4)


}
loadPage()

// selector is inside the (document), document means to select everything in the window
$(document).on("click", ".image", function () {
    //alert("test")
    // "this" is the current action that you're performing (whatever you're clicking on)
    // a string is inside the double quotes, when you have a string you cannot do any math operations
    // parseint takes a string and converts it into a numerical data type
    var getImageValue = parseInt($(this).attr("data-id"))

    totalClicks = totalClicks + getImageValue

    //before you start using the function, you identify the selector name. In this case, the selector is the class.
    $(".sum").html("<h1>" + totalClicks + "</h1>")

    if (totalClicks > targetNumber) {
        alert("You lose")
        losses++
        $(".losses").html("Losses:" + losses)
        totalClicks = 0
        loadPage()
    }
    // = sign value assignment to a variable
    // == means you only check the value if its equal
    // "5" == 5, true statement lenienent 
    // if statements only take true conditions
    // "5"===5 , this would be false because its not only measuring the number, its also measuring the type. Triple equal has to have the type and the value match in order to be true.
    if (totalClicks === targetNumber) {
        alert("You win")
        wins++
        $(".wins").html("Wins:" + wins)
        totalClicks = 0
        loadPage()
    }
})


