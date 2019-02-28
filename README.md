# weather_data_visualizer
Website made with ReactJS that visualises weather data from user's desired city and lets you save them.  

## Setup:

    #Git clone
    git clone https://github.com/JesseRGit/weather_data_visualizer.git
    
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
save city to list

## Handles ecxeptions:
viable city name but non-matching country name -> shows the city's weather but mentions that the country wasn't matching 

#### Uses:
[Create React App](https://github.com/facebook/create-react-app) - as base   
[Bootstrap 4.3.1](https://getbootstrap.com/) - for visuals  
[OpenWeatherMap](https://openweathermap.org/) - open weather API data


