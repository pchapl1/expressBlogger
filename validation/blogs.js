const validateBlogData = (blogData) => {

    // check title is valid
    if (!blogData.title || typeof(blogData.title) != 'string' || blogData.title.length >= 40) {
        return {
            isValid : false,
            message : 'title is required, must be a string and must be less than 40 characters'
        }
    }

    // check text is valid
    if (!blogData.text || typeof(blogData.text) !== 'string') {
        return {
            isValid : false,
            message : 'text is required and must be a string.'
        }
    }

    // check author is valid
    if (!blogData.author || typeof(blogData.author) !== 'string' || blogData.author.length >= 40) {
        return {
            isValid : false,
            message : 'author is required, must be a string and be less than 40 characters.'
        }
    }

    // check category is valid
    if (blogData.category && Array.isArray(blogData.category)) {

        let isArrayValid = true
        let categoryList = ["lorem", "ipsum", "dolor", "sit", "amet"]

        if (!blogData.category.length > 0 || blogData.category.length > 10) {
            isArrayValid = false
        }

        blogData.category.forEach(category => {
            // check if item in array is not a string
            if (typeof(category) !== 'string') {
                isArrayValid = false
            }

            // check if item in array is in list of accepted categories
            if (!categoryList.includes(category)) {
                isArrayValid = false
            }

        });

        if (isArrayValid === false) {
            return {
                isValid: false,
                message: 'category is invalid.  Category is '
            }
        }



    }
    
    return {
        isValid : true, 
        message : "Successfully created blog!"
    }
}


module.exports = {
    validateBlogData
}