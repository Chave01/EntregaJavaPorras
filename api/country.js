

const URLGET = "https://restcountries.eu/rest/v2/regionalbloc/eu"


$ (document).ready(() => {
    $.get(URLGET, function (respuesta,fact){
        if (fact === "success") {
          let info = respuesta
            for (const dato of info) {
                $(".country").append(`
                    <Option>${dato.name}</Option>
                    `)
                }
        }
    })
    })












