# encoding: utf-8
# module pygame.bufferproxy
# from /usr/lib/python2.7/dist-packages/pygame/bufferproxy.so
# by generator 1.135
""" A generic proxy module that can spend arbitrary objects a buffer interface """
# no imports

# no functions
# classes

from object import object

class BufferProxy(object):
    """
    BufferProxy () -> BufferProxy
    
    Creates a new, empty BufferProxy.
    
    A BufferProxy usually should be constructed from C code, not Python.
    """
    def write(self, bufferproxy, buffer, offset): # real signature unknown; restored from __doc__
        """
        B.write (bufferproxy, buffer, offset) -> None
        
        Writes raw data to the bufferproxy.
        
        Writes the raw data from buffer to the BufferProxy object, starting
        at the specified offset within the BufferProxy.
        If the length of the passed buffer exceeds the length of the
        BufferProxy (reduced by the offset), an IndexError will be raised.
        """
        pass

    def __init__(self): # real signature unknown; restored from __doc__
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass

    def __repr__(self): # real signature unknown; restored from __doc__
        """ x.__repr__() <==> repr(x) """
        pass

    length = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """The size of the buffer data in bytes."""

    raw = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """The raw buffer data as string. The string may contain NUL bytes."""


    __dict__ = None # (!) real value is ''


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

