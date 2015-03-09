# encoding: utf-8
# module pygame.pixelarray
# from /usr/lib/python2.7/dist-packages/pygame/pixelarray.so
# by generator 1.135
# no doc
# no imports

# no functions
# classes

from object import object

class PixelArray(object):
    """
    pygame.PixelArray(Surface): return PixelArray
    pygame object for direct pixel access of surfaces
    """
    def compare(self, array, distance=0, weights=0.2990): # real signature unknown; restored from __doc__
        """
        PixelArray.compare (array, distance=0, weights=(0.299, 0.587, 0.114)): Return PixelArray
        Compares the PixelArray with another one.
        """
        pass

    def extract(self, color, distance=0, weights=0.2990): # real signature unknown; restored from __doc__
        """
        PixelArray.extract (color, distance=0, weights=(0.299, 0.587, 0.114)): Return PixelArray
        Extracts the passed color from the PixelArray.
        """
        pass

    def make_surface(self): # real signature unknown; restored from __doc__
        """
        PixelArray.make_surface (): Return Surface
        Creates a new Surface from the current PixelArray.
        """
        pass

    def replace(self, color, repcolor, distance=0, weights=0.2990): # real signature unknown; restored from __doc__
        """
        PixelArray.replace (color, repcolor, distance=0, weights=(0.299, 0.587, 0.114)): Return None
        Replaces the passed color in the PixelArray with another one.
        """
        pass

    def __contains__(self, y): # real signature unknown; restored from __doc__
        """ x.__contains__(y) <==> y in x """
        pass

    def __delitem__(self, y): # real signature unknown; restored from __doc__
        """ x.__delitem__(y) <==> del x[y] """
        pass

    def __delslice__(self, i, j): # real signature unknown; restored from __doc__
        """
        x.__delslice__(i, j) <==> del x[i:j]
                   
                   Use of negative indices is not supported.
        """
        pass

    def __getitem__(self, y): # real signature unknown; restored from __doc__
        """ x.__getitem__(y) <==> x[y] """
        pass

    def __getslice__(self, i, j): # real signature unknown; restored from __doc__
        """
        x.__getslice__(i, j) <==> x[i:j]
                   
                   Use of negative indices is not supported.
        """
        pass

    def __init__(self, Surface): # real signature unknown; restored from __doc__
        pass

    def __iter__(self): # real signature unknown; restored from __doc__
        """ x.__iter__() <==> iter(x) """
        pass

    def __len__(self): # real signature unknown; restored from __doc__
        """ x.__len__() <==> len(x) """
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass

    def __repr__(self): # real signature unknown; restored from __doc__
        """ x.__repr__() <==> repr(x) """
        pass

    def __setitem__(self, i, y): # real signature unknown; restored from __doc__
        """ x.__setitem__(i, y) <==> x[i]=y """
        pass

    def __setslice__(self, i, j, y): # real signature unknown; restored from __doc__
        """
        x.__setslice__(i, j, y) <==> x[i:j]=y
                   
                   Use  of negative indices is not supported.
        """
        pass

    surface = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """PixelArray.surface: Return Surface
Gets the Surface the PixelArray uses."""


    __dict__ = None # (!) real value is ''


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

