async function check() {
    let city_name = document.getElementById("city_name").value;
    if (city_name != "") {
        document.getElementById("msg_box").innerHTML = "";
        document.getElementById("city_name").value = "";
        let response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&APPID=API_KEY`
        );
        console.log(response);
        let response_json = await response.json();
        console.log(response_json);
        if (response.status == "404") {
            document.getElementById("result_div").style.display = "none";
            document.getElementById("msg_box").innerHTML =
                "<h1>City Not Found</h1>";
        } else {
            document.getElementById("result_div").style.display = "block";
            document.getElementById("msg_box").innerHTML = "";
            let name = response_json.name;
            let country = response_json.sys.country;
            let temp = response_json.main.temp;
            let min_temp = response_json.main.temp_min;
            let max_temp = response_json.main.temp_max;
            let feels_like = response_json.main.feels_like;
            let desc = response_json.weather[0].description;
            let icon =
                "http://openweathermap.org/img/w/" +
                response_json.weather[0].icon +
                ".png";
            document.getElementById("name_country").innerHTML =
                name + ", " + country;
            document.getElementById("temp").innerHTML = temp;
            document.getElementById("feels_like").innerHTML = feels_like;
            document.getElementById("min").innerHTML = min_temp;
            document.getElementById("max").innerHTML = max_temp;
            document.getElementById("desc").innerHTML = desc;
            document.getElementById("icon").src = icon;
        }
    } else {
        document.getElementById("result_div").style.display = "none";
        document.getElementById("msg_box").innerHTML =
            "<h1>The city name cannot be empty </h1>";
    }
}
