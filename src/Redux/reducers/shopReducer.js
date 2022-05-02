let shops = [
    { id: '1', name: 'XYZ Medical', category: 'Chemist', area: "Pune", open: "20", close: "5" },
    { id: '2', name: 'XYZ Grocery', category: 'Grocery', area: "Thane", open: "10", close: "18" },
    { id: '3', name: 'ABC Stationery Shop ', category: 'Stationery', area: "Mumbai", open: "11", close: "19" },
    { id: '4', name: 'XYZ Baker', category: 'Baker', area: "Nashik", open: "12", close: "20" },
    { id: '5', name: 'Butcher', category: 'Butcher', area: "Nagpur", open: "18", close: "3" },
    { id: '6', name: 'New Grocery', category: 'Grocery', area: "Solapur", open: "18", close: "3" },
]

let id = 7;

export const shopReducer = (state = shops, action) => {
    switch (action.type) {
        case "ADDSHOP": {
            console.log("add post");
            let add = { id, ...action.payload }
            state.push(add); 
            id++;
            return state
        }
        case "DELETESHOP": {
            console.log("delete reducer", action.payload);
            state = state.filter((curr) => curr.id !== action.payload)
        } 
        default: return state;
    }
}
