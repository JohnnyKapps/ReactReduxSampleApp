export default function (state=null, action) {
    console.log("criando o reducer de detalhes");
    switch(action.type){
        case "WEIGHT_SELECTED": {
            return action.payload;
            break;
        }
    }
    return state;
}