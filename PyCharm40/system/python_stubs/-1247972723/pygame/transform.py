# encoding: utf-8
# module pygame.transform
# from /usr/lib/python2.7/dist-packages/pygame/transform.so
# by generator 1.135
""" pygame module to transform surfaces """
# no imports

# functions

def average_color(Surface, Rect=None): # real signature unknown; restored from __doc__
    """
    pygame.transform.average_color(Surface, Rect = None): return Color
    finds the average color of a surface
    """
    pass

def average_surfaces(Surfaces, DestSurface=None, palette_colors=1): # real signature unknown; restored from __doc__
    """
    pygame.transform.average_surfaces(Surfaces, DestSurface = None, palette_colors = 1): return Surface
    find the average surface from many surfaces.
    """
    pass

def chop(Surface, rect): # real signature unknown; restored from __doc__
    """
    pygame.transform.chop(Surface, rect): return Surface
    gets a copy of an image with an interior area removed
    """
    pass

def flip(Surface, xbool, ybool): # real signature unknown; restored from __doc__
    """
    pygame.transform.flip(Surface, xbool, ybool): return Surface
    flip vertically and horizontally
    """
    pass

def get_smoothscale_backend(): # real signature unknown; restored from __doc__
    """
    pygame.transform.get_smoothscale_backend(): return String
    return smoothscale filter version in use: 'GENERIC', 'MMX', or 'SSE'
    """
    return ""

def laplacian(*args, **kwargs): # real signature unknown
    """
    pygame.transform.threshold(DestSurface, Surface, color, threshold = (0,0,0,0), diff_color = (0,0,0,0), change_return = 1, Surface = None, inverse = False): return num_threshold_pixels
    finds which, and how many pixels in a surface are within a threshold of a color.
    """
    pass

def rotate(Surface, angle): # real signature unknown; restored from __doc__
    """
    pygame.transform.rotate(Surface, angle): return Surface
    rotate an image
    """
    pass

def rotozoom(Surface, angle, scale): # real signature unknown; restored from __doc__
    """
    pygame.transform.rotozoom(Surface, angle, scale): return Surface
    filtered scale and rotation
    """
    pass

def scale(Surface, (width, height), DestSurface=None): # real signature unknown; restored from __doc__
    """
    pygame.transform.scale(Surface, (width, height), DestSurface = None): return Surface
    resize to new resolution
    """
    pass

def scale2x(Surface, DestSurface=None): # real signature unknown; restored from __doc__
    """
    pygame.transform.scale2x(Surface, DestSurface = None): Surface
    specialized image doubler
    """
    pass

def set_smoothscale_backend(*args, **kwargs): # real signature unknown
    """
    pygame.transform.get_smoothscale_backend(type): return None
    set smoothscale filter version to one of: 'GENERIC', 'MMX', or 'SSE'
    """
    pass

def smoothscale(Surface, (width, height), DestSurface=None): # real signature unknown; restored from __doc__
    """
    pygame.transform.smoothscale(Surface, (width, height), DestSurface = None): return Surface
    scale a surface to an arbitrary size smoothly
    """
    pass

def threshold(DestSurface, Surface, color, threshold=(0,0,0,0), diff_color=(0,0,0,0), change_return=1, Surface=None, inverse=False): # real signature unknown; restored from __doc__
    """
    pygame.transform.threshold(DestSurface, Surface, color, threshold = (0,0,0,0), diff_color = (0,0,0,0), change_return = 1, Surface = None, inverse = False): return num_threshold_pixels
    finds which, and how many pixels in a surface are within a threshold of a color.
    """
    pass

# no classes
