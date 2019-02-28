# current_weather
Website made with ReactJS that shows current weather from user's desired city and lets save them.  

## Setup:

    #Git clone
    git clone https://github.com/JesseRGit/current_weather.git
    
    #Open project folder
    cd current_weather
    
    #Install dependencies
    npm install
    or
    yarn install

    #Start   
    npm start
    or 
    yarn start
    
    #View locally   
    http://localhost:3000/  
    
## Functions:
search by city name
search by city name and country (for scenarios with same named cities from different countries eg. see Manchester (UK) and Manchester (US))
save city to list (stays till page refresh)

## Handles ecxeptions:
viable city name but non-matching country name -> shows the city's weather but mentions that the country wasn't matching 

## Preview:
![currentweatherappreview](https://user-images.githubusercontent.com/35838078/53566256-54622f80-3b64-11e9-8923-bf6cadc62f33.png)  

#### Uses:
[Create React App](https://github.com/facebook/create-react-app) - as project's base   
[Bootstrap 4.3.1](https://getbootstrap.com/) - for visuals  
[OpenWeatherMap](https://openweathermap.org/) - open weather API data


