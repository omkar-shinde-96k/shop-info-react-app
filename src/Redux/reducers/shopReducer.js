let shops = [
    { id: '1', name: 'XYZ Medical', category: 'Chemist', area: "pune", open: "9", close: "17" },
    { id: '2', name: 'XYZ Grocery', category: 'Grocery', area: "Thane", open: "10", close: "18" },
    { id: '3', name: 'ABC Stationery Shop ', category: 'Stationery', area: "Mumbai ", open: "11", close: "19" },
    { id: '4', name: 'XYZ Baker', category: 'Baker', area: "Nashik", open: "12", close: "20" },
]

let id = 0;

export const shopReducer = (state = shops, action) => {
    switch (action.type) {
        case "ADDPOST": {
            console.log("add post");
            let add = { id, ...action.payload }
            state.push(add);
            console.log("one data added", state);
            id++;
            return state
        }
        case "DELETE": {
            console.log("delete reducer", action.payload);
            state = state.filter((curr) => curr.id !== action.payload)
        }

        default: return state;
    }
}
