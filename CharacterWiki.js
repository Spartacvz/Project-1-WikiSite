$(document).ready(function () {
    $(".menuIcon").click(function(){
        $(".menuIcon").toggleClass("active")
    })

    $(".menuIcon").click(function () {
        $(".sideBar").toggleClass("active")
    })

    $(".imageHolder").click(function () {
        $(".imageHolder").toggleClass("active")
    })

    $(".names").click(function () {
        $(".names").toggleClass("active")
    })

    $(".build").click(function () {
        $(".build").toggleClass("active")
    })

    $(".power").click(function () {
        $(".power").toggleClass("active")
    })

    $(".talents").click(function () {
        $(".talents").toggleClass("active")
    })

    $(".abilities").click(function () {
        $(".abilities").toggleClass("active")
    })
})