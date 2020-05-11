# CSCI571_FlaskNewsApp

## Project Description

### About
Creating a website using Google News API to display news from various sources and allow users to search for news based on parameters such as:

 - Keyword
 - Publish Date Range
 - Genre
 - Source

### External libraries and APIs

 - Google News API
 - d-3 cloud library

### Front-end Technologies

 - HTML
 - CSS
 - Javascript
 - AJAX

### Back-end Technologies

 - Flask (Python)
 
 ### Home Page
The home page has a carousel that shows the latest news from all sources. This news is fetched from the Google News API. The home page also features a word cloud of top 30 most frequently appearing words in news titles. 
The home page also displays the top 5 news articles from Fox News and CNN which are fetched using Google News API. 
The button on the left is used to toggle between the home page and the search page. 

 ![Home Page](https://i.ibb.co/nsqnKXJ/Screen-Shot-2020-05-10-at-22-50-53.png
)
 
### Search Page
The search page has a form which lets users search for articles based on various parameters. Search results are displayed as cards. User can use the "Show More" and "Show Less" button to display more or less search results. On clicking each card, it expands showing additional details about a particular news articles. It also has a link which takes the user to the news website having that article. 


![Search Page](https://i.ibb.co/7vqNRxy/Screen-Shot-2020-05-10-at-22-51-15.png)

## Project Flow

### Fetching Data

 - Flask makes calls to the Google News API endpoint to fetch and process data.
 - AJAX is used to make asynchronous calls to Flask backend to fetch the processed data. 
 - The JSON response obtained via AJAX is processed and displayed. 
 
 ### Run code
 - Clone this github repository
 - Start the virtual environment using `source venv/bin/activate`
 - Run `python application.py` to start the server


***Here is a link to a video showing the complete functioning:*** [https://www.youtube.com/watch?v=AX00rwq-qQc&feature=youtu.be](https://www.youtube.com/watch?v=AX00rwq-qQc&feature=youtu.be) 




