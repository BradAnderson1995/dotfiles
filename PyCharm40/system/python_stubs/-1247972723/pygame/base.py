# encoding: utf-8
# module pygame.base
# from /usr/lib/python2.7/dist-packages/pygame/base.so
# by generator 1.135
""" the top level pygame package """
# no imports

# functions

def get_error(): # real signature unknown; restored from __doc__
    """
    pygame.get_error(): return errorstr
    get the current error message
    """
    pass

def get_sdl_byteorder(): # real signature unknown; restored from __doc__
    """
    pygame.get_sdl_byteorder(): return int
    get the byte order of SDL
    """
    return 0

def get_sdl_version(): # real signature unknown; restored from __doc__
    """
    pygame.get_sdl_version(): return major, minor, patch
    get the version number of SDL
    """
    pass

def init(): # real signature unknown; restored from __doc__
    """
    pygame.init(): return (numpass, numfail)
    initialize all imported pygame modules
    """
    pass

def quit(): # real signature unknown; restored from __doc__
    """
    pygame.quit(): return None
    uninitialize all pygame modules
    """
    pass

def register_quit(callable): # real signature unknown; restored from __doc__
    """
    register_quit(callable): return None
    register a function to be called when pygame quits
    """
    pass

def segfault(*args, **kwargs): # real signature unknown
    """ crash """
    pass

def set_error(error_msg): # real signature unknown; restored from __doc__
    """
    pygame.set_error(error_msg): return None
    set the current error message
    """
    pass

# classes

from RuntimeError import RuntimeError

class error(RuntimeError):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""



# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

