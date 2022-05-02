let category = [{ name: 'Grocery' }, { name: 'Butcher' }, { name: 'Baker' }, { name: 'Chemist' }];
let id = 0;

export const categoryReducer = (state = [], action) => {  
    switch (action.type) {
        case "ADDCATEGORY": { 
            let add = { id, ...action.payload };
            category.push(add); 
            id++;
            return category
        }
        default: return category
    }
}
