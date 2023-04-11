// use local storage to manage Jobs data
const addToDb = id => {
    let jobs = getStorageData();
    // add quantity
    const exist = jobs[id];
    if (!exist) {
        jobs[id] = 1;
    }
    localStorage.setItem('job', JSON.stringify(jobs));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('cart', JSON.stringify(shoppingCart));
    }
}

const getStorageData = () => {
    let jobs= {};

    //get the jobs info from local storage
    const storedJobs = localStorage.getItem('job');
    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }
    return jobs;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('cart');
}

export {
    addToDb,
    removeFromDb,
    getStorageData,
    deleteShoppingCart
}
