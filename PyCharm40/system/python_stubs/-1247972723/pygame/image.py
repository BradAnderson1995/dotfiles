# encoding: utf-8
# module pygame.image
# from /usr/lib/python2.7/dist-packages/pygame/image.so
# by generator 1.135
""" pygame module for image transfer """

# imports
from pygame.imageext import load, load_extended, save_extended


# functions

def frombuffer(string, size, format): # real signature unknown; restored from __doc__
    """
    pygame.image.frombuffer(string, size, format): return Surface
    create a new Surface that shares data inside a string buffer
    """
    pass

def fromstring(string, size, format, flipped=False): # real signature unknown; restored from __doc__
    """
    pygame.image.fromstring(string, size, format, flipped=False): return Surface
    create new Surface from a string buffer
    """
    pass

def get_extended(): # real signature unknown; restored from __doc__
    """
    pygame.image.get_extended(): return bool
    test if extended image formats can be loaded
    """
    return False

def load_basic(*args, **kwargs): # real signature unknown
    """
    pygame.image.load(filename): return Surface
    pygame.image.load(fileobj, namehint=): return Surface
    load new image from a file
    """
    pass

def save(Surface, filename): # real signature unknown; restored from __doc__
    """
    pygame.image.save(Surface, filename): return None
    save an image to disk
    """
    pass

def tostring(Surface, format, flipped=False): # real signature unknown; restored from __doc__
    """
    pygame.image.tostring(Surface, format, flipped=False): return string
    transfer image to string buffer
    """
    return ""

# no classes
