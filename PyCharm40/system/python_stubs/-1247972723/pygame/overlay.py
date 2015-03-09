# encoding: utf-8
# module pygame.overlay
# from /usr/lib/python2.7/dist-packages/pygame/overlay.so
# by generator 1.135
# no doc
# no imports

# no functions
# classes

from object import object

class Overlay(object):
    """
    pygame.Overlay(format, (width, height)): return Overlay
    pygame object for video overlay graphics
    """
    def display(self, (y, u, v)): # real signature unknown; restored from __doc__
        """
        Overlay.display((y, u, v)): return None
        Overlay.display(): return None
        set the overlay pixel data
        """
        pass

    def get_hardware(self, rect): # real signature unknown; restored from __doc__
        """
        Overlay.get_hardware(rect): return int
        test if the Overlay is hardware accelerated
        """
        return 0

    def set_location(self, rect): # real signature unknown; restored from __doc__
        """
        Overlay.set_location(rect): return None
        control where the overlay is displayed
        """
        pass

    def __init__(self, format, (width, height)): # real signature unknown; restored from __doc__
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass


