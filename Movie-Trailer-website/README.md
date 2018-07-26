# Movie-Trailer-Website
My project 1 under Udacity Naodegree Program of Full Stack Web Developer I.
A simple movie trailer website project for Udacity's full-stack [nanodegree program](https://in.udacity.com/nanodegree). The project demonstrates the use of a Movie object class in Python to generate a static webpage, which displays a listing of favorite movies and links each movie to its trailers video on YouTube. The project also includes some CSS and jQuery involved in the display of the webpage.

## Table of contents
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Copyright and Licence](#copyright-and-licence)

## Demo
For a demo, check out [https://kanikag7.github.io/Movie-Trailer-website/fresh_tomatoes.html](https://kanikag7.github.io/Movie-Trailer-website/fresh_tomatoes.html)

## Quick Start
After downloading the project files, a movie trailer page can be created by importing [media.py](https://github.com/kanikag7/Movie-Trailer-website/blob/master/movie/media.py) and [fresh_tomatoes.py](https://github.com/kanikag7/Movie-Trailer-website/blob/master/movie/fresh_tomatoes.py) at the start of your Python script. Then create idividual Movie objects by calling media.Movie() and supplying it with four arguments -- title,storyline, poster_url, and trailer_url. Lastly, to generate the movie trailers page, call fresh_tomatoes.open_movies_page() and supply it with a list of the movie objects you created.

```
import media
import fresh_tomatoes

#information for object arguments
title=Toy Story
storyline=A story of a boy and his toys that come to life
poster_image_URL=http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg
movie_trailer_URL=https://www.youtube.com/watch?v=KYz2wyBy3kc`

# Create Movie object
 toy_story= media.Movie(title,Storyline, poster_url, trailer_url)

# Create movie trailer page with array of one movie
fresh_tomatoes.open_movies_page([toy_story])

```

A more detailed example with multiple movie objects, which is used for the [demo](#demo), can be found in [entertainment_center.py](https://github.com/kanikag7/Movie-Trailer-website/blob/master/movie/entertainment_center.py)

## Documentation
The Movie object class consists of four class variables, a simple constructor method, and a class method for playing a Movie object's movie trailer. The code is located in [media.py](https://github.com/kanikag7/Movie-Trailer-website/blob/master/movie/media.py).

**constructor method**

The constructor method is called when a new Movie object is created and must include four arguments -- title, storyline, poster_url, and trailer_url. Each of these arguments is discussed further below.
```
import media

#information for object arguments
title=Toy Story
storyline=A story of a boy and his toys that come to life
poster_image_URL=http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg
movie_trailer_URL=https://www.youtube.com/watch?v=KYz2wyBy3kc`

# Create Movie object
 toy_story= media.Movie(title,Storyline, poster_url, trailer_url)
 ```
**movie.title**

movie.title is any string used to identify the movie object.

**movie.storyline**

movie.storyline is any string used to identify the movie plot.

**movie.poster_url**

movie.poster_url is a string containing a URL linking to an image which will be used to represent the Movie object, such as a movie poster or DVD box cover. The movie trailer page portion of this project displays these images with a width of 188px and a height of 292px. So, images with a ratio of 1:1.5 will work best.

**movie.trailer_url**

movie.trailer_url is a string containing a URL linking to the movie trailer on YouTube.com. The movie trailer page portion of the this project extracts the YouTube id from the URL, so while links to other video services are valid in the Movie class object, they will not work with the movie trailers page.

**show_trailer method**

show_trailer can be called on any Movie class object to launch that object's movie trailer in a webpage. This method is useful for testing but is not used by the script that generates the finished movie trailers page.

## Movie Trailer Page Functions
The functions used to create the final movie trailers page are located in [fresh_tomatoes.py](https://github.com/kanikag7/Movie-Trailer-website/blob/master/movie/fresh_tomatoes.py), along with HTML template variables used by these functions. This file must be imported to access the functions described below.

**open_movies_page function**

To create the static movie trailers page the open_movies_page function must be called and supplied with one required argument (an array of Movie class objects) and one optional argument (a string specifying a sort order). If no sort order is specified or an unrecognized sort option is provided, the order the movies appear in the array will be used. Valid strings for specifying a sort order are:

* "none" (no sort, default)
* "alpha" (alphabetical by title)
* "alpha-reverse" (reverse alphabetical by title)
* "cron" (cronological by year)
* "cron-reverse" (cronological by year)
```
# Create movie trailer page with array of Movie class objects
fresh_tomatoes.open_movies_page([movie1, movie2, movie3])

# Create page with movies sorted in reverse cronological order by year 
fresh_tomatoes.open_movies_page([movie1, movie2, movie3], "cron-reverse")
```
The newly generated page will be placed in the same directory and named fresh_tomatoes.html. This new page relies on three files for its background image (img/curtains.jpg), CSS style settings (css/main.css), and jQuery effects (js/main.js).

## Copyright and License

* Project starter code (supplied without rights information) contributed by [Udacity](https://in.udacity.com).
* Additional code contributed by [Kanika Goswami](#movie-trailer-website) is offered under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0)
* Background image by [sethoscope](https://www.flickr.com/photos/sethoscope/2884743046) used under [Creative Coomons Attribution-NonCommercial-ShareAlike 2.0 Generic License (BY-NC-SA)](https://creativecommons.org/licenses/by-nc-sa/2.0/deed.en).
