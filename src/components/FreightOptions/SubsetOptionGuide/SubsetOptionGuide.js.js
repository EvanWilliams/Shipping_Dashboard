const Guide = {
        "MODE" : 
        {
            type:"checkbox",
            options:[
                {"key":"Rail", "allowed":true},
                {"key":"Air", "allowed":true},
                {"key":"Sea", "allowed":true}
            ]
        },
        "STATUS" :{
            type:"checkbox",
            options:[
                {"key":"Roll-Over", "allowed":true},
                {"key":"Cancelled", "allowed":true},
                {"key":"Customs Hold", "allowed":true},
                {"key":"In Transit", "allowed":true},
                {"key":"Arrived", "allowed":true}
            ]
        },
        "ID":{
            type:"input",
            value:""
        },
        "CLIENT NAME" :{
            type:"input",
            value:""
        }
}

export default Guide;