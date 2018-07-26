import fresh_tomatoes
import media
"""Initialising instances of class Movie with 4 Argrs:
            movie_title= string telling name of movie
            movie_storyline= string telling about the movie storyline
            poster_image= string indicating URL of movie poster
            trailer_youtube= string telling URL of youtube video trailer of the movie"""

toy_story= media.Movie("Toy Story","A story of a boy and his toys that come to life",
                       "http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                       "https://www.youtube.com/watch?v=KYz2wyBy3kc")

avatar = media.Movie("Avatar","A marine on an alien planet",
                     "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
                     "https://www.youtube.com/watch?v=5PSNL1qE6VY")

interstellar = media.Movie("Interstellar", "A science finction epic film",
                           "http://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
                           "https://www.youtube.com/watch?v=zSWdZVtXT7E")

transcendence = media.Movie("Transcendence", "A science fiction film directed by cinematographer Wally Pfister",
                            "http://upload.wikimedia.org/wikipedia/en/e/ef/Transcendence2014Poster.jpg",
                            "https://www.youtube.com/watch?v=VCTen3-B8GU")

the_lego_movie = media.Movie("The Lego Movie", "A 2014 computer animated adventure comedy film",
                             "http://upload.wikimedia.org/wikipedia/en/1/10/The_Lego_Movie_poster.jpg",
                             "https://www.youtube.com/watch?v=fZ_JOBCLF-I")

big_hero_6 = media.Movie("Big Hero 6", "a 2014 American 3D computer-animated superhero action comedy film",
                         "http://upload.wikimedia.org/wikipedia/en/4/4b/Big_Hero_6_%28film%29_poster.jpg",
                         "https://www.youtube.com/watch?v=z3biFxZIJOQ")


#After Initialising all instances, make a list of them
movies = [toy_story, avatar, interstellar, transcendence, the_lego_movie, big_hero_6]



# use fresh_tomatoes.py to call the function open_movie_page to add movies list to our web page and open it 
fresh_tomatoes.open_movies_page(movies)

