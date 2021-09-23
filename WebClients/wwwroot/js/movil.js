var clientsURL="http://localhost:53158/api/ClientsApi";
var addressURL="http://localhost:53158/api/AddressesApi?clientID=";
var app = new Vue({
    el: 'mainContent',
    data: {
        Clientes:{},
        addresses:{},
    },
    methods: {
		// Show/hide left panel
        panelLeft() {
			document.querySelector("mainContent").classList.toggle("leftActive");
        },
		// Show/hide left panel
		//  left panel
        panelUser() {
			document.querySelector("mainContent").classList.toggle("userMenuActive");
        },
		// Show/hide left panel
        panelRight() {
			document.querySelector("mainContent").classList.toggle("rightActive");
        },
		// Show/hide left panel
        panelBotton() {
			document.querySelector("mainContent").classList.toggle("bottonActive");
        },
		// Show all Panels
        expandAll() {
			console.log("expandAll");
            document.querySelector("mainContent").classList.add("bottonActive");
            document.querySelector("mainContent").classList.add("rightActive");
            document.querySelector("mainContent").classList.remove("userMenuActive");
            document.querySelector("mainContent").classList.add("leftActive");
        },
		// hide all Panels
        hideAll() {
            console.log("hideAll");
            document.querySelector("mainContent").classList.remove("bottonActive");
            document.querySelector("mainContent").classList.remove("rightActive");
            document.querySelector("mainContent").classList.remove("userMenuActive");
            document.querySelector("mainContent").classList.remove("leftActive");
        },
        // GET ADDRESses FOR A CLIENT
        getAddresses(id){
            fetch(addressURL+id).then(
                (response) => {
                    // The API call was successful!
                    console.log(response);
                    return response.json();
                }).then((Resp) => {
                // This is the JSON from our response
                console.log(Resp);
                app.addresses = Resp;
            });
        }
    },
    created(){
        console.log("creado");
        // Search for Clients in Api
        fetch(clientsURL).then(
            (response) => {
                // The API call was successful!
                console.log(response);
                return response.json();
            }).then((Resp) => {
            // This is the JSON from our response
            console.log(Resp);
            app.Clientes = Resp;
        });
    }
});
// FECK DATA OBJECT NOT USED IN THIS PROYECT
// function restReft(endP) {
//     return {

//         endPoint: endP,
//         data: [],
// 		post() {},
// 		put() {},
// 		delete() {},

//         get: function() {
//             fetch(this.endPoint).then(
//                 (response) => {
//                     // The API call was successful!
//                     console.log(response);
//                     return response.json();
//                 }).then((Resp) => {
//                 // This is the JSON from our response
//                 console.log(Resp);
//                 this.data = Resp;
//             });
//         }
//     };
// }
// //kk = reftREST;
// kkk = new restReft(clientsURL);
// kkk.get();