import sunny from './assets/img/sunny.jpg'
import defaultImg from './assets/img/default.png'
import overcast from './assets/img/overcast.png'
import night from './assets/img/night.jpg'
import rain from './assets/img/rain.png'
import cloudy from './assets/img/cloudy.jpg'
import snow from './assets/img/snow.jpg'
import thunder from './assets/img/thunder.jpg'


function ImageData() {
    return [
        {
            condition: "default",
            img: defaultImg

        },
        {
            condition: "night",
            img: night

        },
        {
            condition: "sunny",
            img: sunny

        },
        {
            condition: "overcast",
            img: overcast

        },
        {
            condition: "cloudy",
            img: cloudy

        },
        {
            condition: "rain",
            img: rain

        },
        {
            condition: "snow",
            img: snow

        },
        {
            condition: "thunder",
            img: thunder

        },

    ]
}

export default ImageData
