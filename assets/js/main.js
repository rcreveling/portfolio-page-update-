
var tableContent = {
    images: [
        { 'websiteOne': 'assets/images/70sDylan.jpg' },
        { 'websiteTwo': 'assets/images/websiteTwo.jpg' },
        { 'websiteThree': 'assets/images/face.jpg' },
        { 'websiteFour': 'assets/images/website4.jpg' },
        { 'websiteFive': 'assets/images/projectlogo.png' }
    ],
    descriptions: [
        { 'Bob Dylan Fanpage': "This was my very first attempt at creating anything with code from scratch. Over the course of a month I learned the basics of HTML and CSS, how to troubleshoot and research specific issues I was experiencing, and create something that was visually appealing for my skill level" },
        { 'Student Profile Page': "After a few weeks of coding class, I put this page together to test my new knowledge of CSS and HTML and made something slgihtly less structured and logical than my previous page." },
        { 'A-Team Canvas Game': "This project was originally supposed to challenge us to use JavaScript in our creation of a Web Application - I took it a smal step further and decidd to research and learn how to use HTML Canvas in order to make the game more entertaining and, honestly, impressive." },
        { 'Trivia Game': "Creating this Application was a trial in dynamic webpage creation - I decided to challenge myself here and make the entire page load using only JavaScript and pre-defined objects containing HTML elements. I was proud of my use of HTML Canvas, jQuery and my JavaScript/CSS styling." },
        { 'Group Project': "The first team=effort I had been a part of - we decided to tackle the gathering of information of the current Congress of the United States as it is soon to be a hot topic with the coming 2020 Presidential Campaigns. This project made heavy use of APIs, dynamic loading, and involved a lot of peer teaching/learning when we had to work togetehr to integrate all of the components of the application." }
    ]
}


function buildTable() {
    var table = $("#myTable")
    var tablehead = $("<thead>")
    var tableheadcontent = $("<th>")
    var tablerow = $("<tr>")
    var tablecontent = $("<td nowrap>")
    var itemstoappend = []
    $.each(tableContent.images, function () {
        $.each(this, function (name, value) {
            tableheadcontent.html("<img id=" + name + " style='height:100px;width:auto;border-radius:15px;' src=" + value + ">")
            var sendthis = tableheadcontent.html()
            itemstoappend.push(sendthis)
        })
    })
    for (var i = 0; i < itemstoappend.length; i++) {
        tablerow.append(itemstoappend[i])
    }
    tablerow.children($("<img>")).css({
        margin: "0 5vw 0 0vw",
        height: "20vh",
        boxSizing: "border-box",
        boxShadow: "0px 0px 9px rgba(199, 0, 0, 0.863), 0px 0px 18px rgba(255, 148, 148, 0.863), 0px 0px 30px rgba(41, 80, 255, 0.747),  0px 0px 35px rgba(105, 12, 114, 0.747)"
    })
    tablehead.append(tablerow)
    table.append(tablehead)

}
function loadContent() {
    var containerDiv = $("<div>", { class: "container" })
    var rowDiv = $("<div>", { class: "row" })
    var table = $("<table>", { id: "myTable" })
    table.css({
        height: "90vh"
    })
    containerDiv.css({
        height: "100%",
        width: "100%",
    })
    rowDiv.css({
        height: "100%",
        width: "90%",
        backgroundColor: "transparent",
        textShadow: "0px 0px 9px rgba(199, 0, 0, 0.863), 0px 0px 18px rgba(255, 148, 148, 0.863), 0px 0px 30px rgba(41, 80, 255, 0.747),  0px 0px 35px rgba(105, 12, 114, 0.747)",
    })
    rowDiv.append(table)
    containerDiv.append(rowDiv)
    $("#expandContainer").append(containerDiv)
    buildTable()
}
$("#main-head-icon").on("click", function () {
    $(".main-wrapper").css({
        display: "none",
        transition: "3s fade"
    })
    $("#expanderDiv").css({
        display: "flex",
        justifyContent: "center"
    })
    var newDiv = $("<div>", { class: "container", id: "expandContainer" })
    newDiv.css({
        position: "fixed",
        height: "100%",
        width: "0px",
        top: "20%",
        backgroundColor: "transparent",
        margin: "auto"
    })
    $("#expanderDiv").append(newDiv)
    $("#expandContainer").animate({
        maxWidth: "100vw !important",
        width: "100vw",
        margin: "0 auto !important"

    }, 1500, "linear")
    loadContent();
})
