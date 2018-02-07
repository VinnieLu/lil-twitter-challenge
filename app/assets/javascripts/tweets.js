$(document).ready(function() {

	$.ajax({
		url: "/tweets/recent",
		type: "GET"
	})
	.done(function(response) {
		for(i=0;i<response.length;i++) {
			$("#tweets-container ul").append("<li class='tweet'>")
			$("#tweets-container ul").append("<img class='avatar' src='" + response[i].avatar_url + "' alt=''>")
			$("#tweets-container ul").append("<div class='tweet-content'>")
			$("#tweets-container ul").append("<p>")
			$("#tweets-container ul").append("<span class='full-name'>" + response[i].username + "</span>")
			$("#tweets-container ul").append("<span class='username'>" + response[i].handle + "</span>")
			$("#tweets-container ul").append("<span class='timestamp'>- " + response[i].updated_at + "</span>")
			$("#tweets-container ul").append("</p>")
			$("#tweets-container ul").append("<p>" + response[i].content + "</p>")
			$("#tweets-container ul").append("<div>")
			$("#tweets-container ul").append("</li>")
		}
	})

	$.ajax({
		url: "/hashtags/popular",
		type: "GET"
	})
	.done(function(response) {
		for(i=0;i<response.length;i++) {
			$("#trends-container ul").append("<li>" + response[i].name + "</li>")
		}
	})

	$("#tweet-form").on("submit", function(event) {
		event.preventDefault()
		form = $(this)
		$.ajax({ 
			url: "/tweets",
			type: "POST",
			data: form.serialize()
		})
		.done(function(response) {
			console.log("Hello world")
		})
	})


});