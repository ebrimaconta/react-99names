 import store99names from "./reducers_99names";
 const intialState = store99names; 

export default function action99names(state=intialState, action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case "Sort" :
           
         if(action.payload === "asc"){
         console.log( state.slice().sort(function(a, b) {
          var nameA = a.EnglishName.toUpperCase();var nameB = b.EnglishName.toUpperCase(); if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
        }))
       }
           if(action.payload === "desc") {
            console.log( state.slice().sort(function(a, b) {
            var nameA = a.EnglishName.toUpperCase();var nameB = b.EnglishName.toUpperCase(); if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }

              // names must be equal
              return 0;
          }))
         }
       
    }
    return state ;
}