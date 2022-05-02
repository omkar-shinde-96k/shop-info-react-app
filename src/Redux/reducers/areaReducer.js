let category = [{name: 'Thane'},{name: 'Pune'},{name: 'Mumbai'},{name: 'Nashik'},{name: 'Nagpur'},{name: 'Ahmednagar'},{name: 'Solapur'}];

let id = 0;

export const areaReducer = (state = [], action) => { 
    switch (action.type) {
        case "ADDAREA": { 
            let add = { id, ...action.payload };
            category.push(add); 
            id++;
            return category
        }
        default: return category
    }
}
