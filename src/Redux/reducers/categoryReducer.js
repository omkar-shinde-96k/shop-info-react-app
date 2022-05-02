let category = [{ name: 'Grocery' }, { name: 'Butcher' }, { name: 'Baker' }, { name: 'Chemist' }];
let id = 0;

export const categoryReducer = (state = [], action) => {  
    switch (action.type) {
        case "ADDCATEGORY": {
            console.log("add category", action.payload);
            let add = { id, ...action.payload };
            category.push(add);
            console.log("One category added", category);
            id++;
            return category
        }
        default: return category
    }
}
