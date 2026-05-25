 let y = document.querySelector(".dis1");
    let a = document.querySelector("#searchbar");
    let b = document.querySelector("#search");
    let c = document.querySelector("#temp");
    let d = document.querySelector("#real");
    let e = document.querySelector("#condn");
    let f = document.querySelector("#heat");
    let g = document.querySelector("#wind");
    let h = document.querySelector("#gust");

    async function abc() {

        let city = a.value;

        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=afb567f2b614404abfa103400262405&q=${city}`)

        let data = await response.json();

        let c1 = data.current.temp_c;
        let d1 = data.current.feelslike_c;
        let e1 = data.current.condition.text;
        let f1 = data.current.heatindex_c;
        let g1 = data.current.wind_dir;
        let g2 = data.current.wind_kph;
        let h1 = data.current.gust_kph;

        c.innerText = `${c1}°C`;
        d.innerText = `RealFeel : ${d1}`;
        e.innerText = `Feels ${e1}`;
        f.innerText = `Heat Index : ${f1}°C`;
        g.innerText = `Wind : ${g2} km/h`;
        h.innerText = `Wind Gusts : ${h1} km/h`;

        y.classList.remove("dis1");
    }

    b.addEventListener("click", abc);

    a.addEventListener("keypress", function(event){

        if(event.key === "Enter"){
            abc();
        }

    });
