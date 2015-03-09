# encoding: utf-8
# module pygame.movie
# from /usr/lib/python2.7/dist-packages/pygame/movie.so
# by generator 1.135
""" pygame module for playback of mpeg video """
# no imports

# functions

def Movie(filename): # real signature unknown; restored from __doc__
    """
    pygame.movie.Movie(filename): return Movie
    pygame.movie.Movie(object): return Movie
    load an mpeg movie file
    """
    pass

# classes

from object import object

class MovieType(object):
    """
    pygame.movie.Movie(filename): return Movie
    pygame.movie.Movie(object): return Movie
    load an mpeg movie file
    """
    def get_busy(self): # real signature unknown; restored from __doc__
        """
        Movie.get_busy(): return bool
        check if the movie is currently playing
        """
        return False

    def get_frame(self): # real signature unknown; restored from __doc__
        """
        Movie.get_frame(): return frame_number
        get the current video frame
        """
        pass

    def get_length(self): # real signature unknown; restored from __doc__
        """
        Movie.get_length(): return seconds
        the total length of the movie in seconds
        """
        pass

    def get_size(self): # real signature unknown; restored from __doc__
        """
        Movie.get_size(): return (width, height)
        get the resolution of the video
        """
        pass

    def get_time(self): # real signature unknown; restored from __doc__
        """
        Movie.get_time(): return seconds
        get the current vide playback time
        """
        pass

    def has_audio(self, *args, **kwargs): # real signature unknown
        """
        Movie.get_audio(): return bool
        check if the movie file contains audio
        """
        pass

    def has_video(self, *args, **kwargs): # real signature unknown
        """
        Movie.get_video(): return bool
        check if the movie file contains video
        """
        pass

    def pause(self): # real signature unknown; restored from __doc__
        """
        Movie.pause(): return None
        temporarily stop and resume playback
        """
        pass

    def play(self, loops=0): # real signature unknown; restored from __doc__
        """
        Movie.play(loops=0): return None
        start playback of a movie
        """
        pass

    def render_frame(self, frame_number): # real signature unknown; restored from __doc__
        """
        Movie.render_frame(frame_number): return frame_number
        set the current video frame
        """
        pass

    def rewind(self): # real signature unknown; restored from __doc__
        """
        Movie.rewind(): return None
        restart the movie playback
        """
        pass

    def set_display(self, Surface, rect=None): # real signature unknown; restored from __doc__
        """
        Movie.set_display(Surface, rect=None): return None
        set the video target Surface
        """
        pass

    def set_volume(self, value): # real signature unknown; restored from __doc__
        """
        Movie.set_volume(value): return None
        set the audio playback volume
        """
        pass

    def skip(self, seconds): # real signature unknown; restored from __doc__
        """
        Movie.skip(seconds): return None
        advance the movie playback position
        """
        pass

    def stop(self): # real signature unknown; restored from __doc__
        """
        Movie.stop(): return None
        stop movie playback
        """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass


