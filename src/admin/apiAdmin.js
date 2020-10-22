export const createCategory = (category) => {
    return fetch(`http://localhost:8000/category/create/1234`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

export const createProduct = (product) => {
    return fetch(`http://localhost:8000/product/create/1234`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

export const getCategories = () => {
    return fetch(`http://localhost:8000/categories`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}

export const getProducts = () => {
    return fetch(`http://localhost:8000/products?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const deleteProduct = (productId) => {
    return fetch(`http://localhost:8000/product/${productId}/1234`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getProduct = productId => {
    return fetch(`http://localhost:8000/product/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const updateProduct = (productId, product) => {
    return fetch(`http://localhost:8000/product/${productId}/1234`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}
