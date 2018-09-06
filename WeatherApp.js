$(function(){

	$("#button").on('click',function(){

		var city = $('#city').val();
		if(city == '')
		{
			$("#error").html('ERROR!!Please enter data into the field!');
		}
		else
		{
			$.ajax({
				url :'	http://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric' + '&appid=287b0839fad4653371a9063db485efdf',
				type:"GET",
				dataType : "jsonp",
				success : function(data){
					var output = show(data);
					$("#output").html(output);
				}

			});
		}
	});
});

function show(data)
{
	return "<p>Humidity :"+data.main.humidity+ "%</p>"+"<p>Pressure :"+data.main.pressure+"hb </p>"+"<p>Temperature :"+data.main.temp+"&#8451</p>";
}