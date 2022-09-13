const validateUserData = (userData) => {
    /* 
    performs validation on user input
    */

    //check email is type string and it is not undefined
    if (!userData.email || typeof(userData.email) !== 'string') {
        console.log('in failed email')
        return {
            isValid : false,
            message : "invalid email"
        }
    }

    //check firstName is type string and it is not undefined
    if (!userData.firstName || typeof(userData.firstName) !== 'string') {
        return {
            isValid : false,
            message : "invalid first name.  first name is required and must be a string."
        }
    }

    //check lastName is type string and it is not undefined
    if (!userData.lastName || typeof(userData.lastName) !== 'string') {
        return {
            isValid : false,
            message : "invalid last name. last name is required and must be a string."
        }
    }

    //check age is type string and it is not undefined
    if (!userData.age || typeof(userData.age) !== 'number') {
        return {
            isValid : false,
            message : "invalid age. age must be a number"
        }
    }

    if (userData.favoriteFoods && Array.isArray(userData.favoriteFoods)) {
        
        // set flag to true initially
        let isArrayValid = true

        // loop through favorite foods and check to see if element is not a string

        userData.favoriteFoods.forEach(food => {
            // if element is not a string, return isValid = false
            if (typeof(food) !== 'string'){
                console.log(food, typeof(food))
                isArrayValid = false
            }
        }); 
        if (isArrayValid === false) {
            return {
                isValid : false,
                message : "favorite food is required and foods must be a string"
            }
        }   
    }

    // return isValid = true if data is valid
    return {
        isValid: true
    }

}

module.exports = {
    validateUserData
}