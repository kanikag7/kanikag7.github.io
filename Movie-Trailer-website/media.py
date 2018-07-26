import webbrowser
class Movie():
    """this class provides a way to store movie related information"""
    VALID_RATINGS = ["G","PG","PG-13","R"]
    def __init__(self,movie_title,movie_storyline,poster_image,trailer_youtube):
        """Initialize instance of Movie class.
            Args
            movie_title= string telling name of movie
            movie_storyline= string telling about the movie storyline
            poster_image= string indicating URL of movie poster
            trailer_youtube= string telling URL of youtube video trailer of the movie"""
        self.title = movie_title
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube
    def show_trailer(self):
        """ Function to open movie trailer"""
        webbrowser.open(self.trailer_youtube)

