# encoding: utf-8
# module pygame.mask
# from /usr/lib/python2.7/dist-packages/pygame/mask.so
# by generator 1.135
""" pygame module for image masks. """
# no imports

# functions

def from_surface(Surface, threshold=127): # real signature unknown; restored from __doc__
    """
    pygame.mask.from_surface(Surface, threshold = 127) -> Mask
    Returns a Mask from the given surface.
    """
    pass

def from_threshold(*args, **kwargs): # real signature unknown
    """
    pygame.mask.from_surface(Surface, color, threshold = (0,0,0,255), othersurface = None, palette_colors = 1) -> Mask
    Creates a mask by thresholding Surfaces
    """
    pass

def Mask((width, height)): # real signature unknown; restored from __doc__
    """
    pygame.Mask((width, height)): return Mask
    pygame object for representing 2d bitmasks
    """
    pass

# classes

from object import object

class MaskType(object):
    """
    pygame.Mask((width, height)): return Mask
    pygame object for representing 2d bitmasks
    """
    def angle(self): # real signature unknown; restored from __doc__
        """
        Mask.angle() -> theta
        Returns the orientation of the pixels
        """
        pass

    def centroid(self): # real signature unknown; restored from __doc__
        """
        Mask.centroid() -> (x, y)
        Returns the centroid of the pixels in a Mask
        """
        pass

    def clear(self): # real signature unknown; restored from __doc__
        """
        Mask.clear()
        Sets all bits to 0
        """
        pass

    def connected_component(self, (x, y), *args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
        """
        Mask.connected_component((x,y) = None) -> Mask
        Returns a mask of a connected region of pixels.
        """
        pass

    def connected_components(self, min=0): # real signature unknown; restored from __doc__
        """
        Mask.connected_components(min = 0) -> [Masks]
        Returns a list of masks of connected regions of pixels.
        """
        pass

    def convolve(self, othermask, outputmask=None, offset=(0,0)): # real signature unknown; restored from __doc__
        """
        Mask.convolve(othermask, outputmask = None, offset = (0,0)) -> Mask
        Return the convolution of self with another mask.
        """
        pass

    def count(self): # real signature unknown; restored from __doc__
        """
        Mask.count() -> pixels
        Returns the number of set pixels
        """
        pass

    def draw(self, othermask, offset): # real signature unknown; restored from __doc__
        """
        Mask.draw(othermask, offset)
        Draws a mask onto another
        """
        pass

    def erase(self, othermask, offset): # real signature unknown; restored from __doc__
        """
        Mask.erase(othermask, offset)
        Erases a mask from another
        """
        pass

    def fill(self): # real signature unknown; restored from __doc__
        """
        Mask.fill()
        Sets all bits to 1
        """
        pass

    def get_at(self, (x, y)): # real signature unknown; restored from __doc__
        """
        Mask.get_at((x,y)) -> int
        Returns nonzero if the bit at (x,y) is set.
        """
        return 0

    def get_bounding_rects(self): # real signature unknown; restored from __doc__
        """
        Mask.get_bounding_rects() -> Rects
        Returns a list of bounding rects of regions of set pixels.
        """
        pass

    def get_size(self): # real signature unknown; restored from __doc__
        """
        Mask.get_size() -> width,height
        Returns the size of the mask.
        """
        pass

    def invert(self): # real signature unknown; restored from __doc__
        """
        Mask.invert()
        Flips the bits in a Mask
        """
        pass

    def outline(self, every=1): # real signature unknown; restored from __doc__
        """
        Mask.outline(every = 1) -> [(x,y), (x,y) ...]
        list of points outlining an object
        """
        pass

    def overlap(self, othermask, offset): # real signature unknown; restored from __doc__
        """
        Mask.overlap(othermask, offset) -> x,y
        Returns the point of intersection if the masks overlap with the given offset - or None if it does not overlap.
        """
        pass

    def overlap_area(self, othermask, offset): # real signature unknown; restored from __doc__
        """
        Mask.overlap_area(othermask, offset) -> numpixels
        Returns the number of overlapping 'pixels'.
        """
        pass

    def overlap_mask(self, othermask, offset): # real signature unknown; restored from __doc__
        """
        Mask.overlap_mask(othermask, offset) -> Mask
        Returns a mask of the overlapping pixels
        """
        pass

    def scale(self, (x, y)): # real signature unknown; restored from __doc__
        """
        Mask.scale((x, y)) -> Mask
        Resizes a mask
        """
        pass

    def set_at(self, (x, y), value): # real signature unknown; restored from __doc__
        """
        Mask.set_at((x,y),value)
        Sets the position in the mask given by x and y.
        """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

