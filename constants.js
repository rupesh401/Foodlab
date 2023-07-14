const mealPlans = [
    {
        "title": "Regular Meal Plan",
        "short_description": "Ensure that every customer have a healthy life.",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "price" : 29.56,
      },
      {
        "title": "Less Calorie Meal",
        "short_description": "less calorie in their meal.",
         "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         "price" : 29.56,
      },
      {
        "title": "High Calorie Meal Plan",
        "short_description": "high calorie rich meal.",
         "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         "price" : 29.56,
      },
      {
        "title": "High Protein Meal Plan",
        "short_description": "Make their body structure strong.",
         "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         "price" : 29.56,
      },
      {
        "title": "Keto Meal Plan",
        "short_description": "Less carbohydrates meals and rich in fats.",
         "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         "price" : 29.56,
      },
      {
        "title": "Weigh Loss Meal Plan",
        "short_description": "Reduce their weight very rapidly.",
         "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
         "price" : 29.56,
      },
]
const local_dev_constants = {
    PORT:"3000",
    MODE:"DEV",
    DB_URL:"mongodb+srv://root:xFNqHuDfLCRbbpKy@cluster.nfwhf.mongodb.net/capstonedb?retryWrites=true&w=majority",
    BUILD_PATH:"./frontend/public",
    main_url : "http://localhost:3000",
}


const server_constants = {
    PORT:"3000",
    MODE:"PROD",
    DB_URL:"mongodb+srv://root:xFNqHuDfLCRbbpKy@cluster.nfwhf.mongodb.net/capstonedb?retryWrites=true&w=majority",
    BUILD_PATH:"./frontend/public",
    main_url : "http://143.198.39.117"
}


function getConstants(mode = "PROD"){
    if(mode === "PROD")
        return server_constants
    else
        return local_dev_constants
}

module.exports = {getConstants, mealPlans}