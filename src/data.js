import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name:"Ocean View",
            cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            artist:"G Mills, Kyle McEvoy, Luke Otwell",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=10320",
            color:["AE8F9D","171726" ],
            id: uuidv4(),
            active:true,
        },
        {
            name:"String Along",
            cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            artist:"Miscél",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=10315",
            color:["AE8F9D","171726" ],
            id: uuidv4(),
            active:false,
        },
        {
            name:"Snowland Sunset",
            cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            artist:"Stan Forebee, The Field Tapes, Josh Jacobson, Kennebec",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=10279",
            color:["AE8F9D","171726" ],
            id: uuidv4(),
            active:false,
        },
    ];
}

export default chillHop ;