# encoding: utf-8
# module pygame.display
# from /usr/lib/python2.7/dist-packages/pygame/display.so
# by generator 1.135
""" pygame module to control the display window and screen """
# no imports

# functions

def flip(): # real signature unknown; restored from __doc__
    """
    pygame.display.flip(): return None
    update the full display Surface to the screen
    """
    pass

def get_active(): # real signature unknown; restored from __doc__
    """
    pygame.display.get_active(): return bool
    true when the display is active on the display
    """
    return False

def get_caption(): # real signature unknown; restored from __doc__
    """
    pygame.display.get_caption(): return (title, icontitle)
    get the current window caption
    """
    pass

def get_driver(): # real signature unknown; restored from __doc__
    """
    pygame.display.get_driver(): return name
    get the name of the pygame display backend
    """
    pass

def get_init(): # real signature unknown; restored from __doc__
    """
    pygame.display.get_init(): return bool
    true if the display module is initialized
    """
    return False

def get_surface(): # real signature unknown; restored from __doc__
    """
    pygame.display.get_surface(): return Surface
    get a reference to the currently set display surface
    """
    pass

def get_wm_info(): # real signature unknown; restored from __doc__
    """
    pygame.display.get_wm_info(): return dict
    Get information about the current windowing system
    """
    return {}

def gl_get_attribute(flag): # real signature unknown; restored from __doc__
    """
    pygame.display.gl_get_attribute(flag): return value
    get the value for an opengl flag for the current display
    """
    pass

def gl_set_attribute(flag, value): # real signature unknown; restored from __doc__
    """
    pygame.display.gl_set_attribute(flag, value): return None
    request an opengl display attribute for the display mode
    """
    pass

def iconify(): # real signature unknown; restored from __doc__
    """
    pygame.display.iconify(): return bool
    iconify the display surface
    """
    return False

def Info(): # real signature unknown; restored from __doc__
    """
    pygame.display.Info(): return VideoInfo
    Create a video display information object
    """
    pass

def init(): # real signature unknown; restored from __doc__
    """
    pygame.display.init(): return None
    initialize the display module
    """
    pass

def list_modes(depth=0, flags=None): # real signature unknown; restored from __doc__
    """
    pygame.display.list_modes(depth=0, flags=pygame.FULLSCREEN): return list
    get list of available fullscreen modes
    """
    return []

def mode_ok(size, flags=0, depth=0): # real signature unknown; restored from __doc__
    """
    pygame.display.mode_ok(size, flags=0, depth=0): return depth
    pick the best color depth for a display mode
    """
    pass

def quit(): # real signature unknown; restored from __doc__
    """
    pygame.display.quit(): return None
    uninitialize the display module
    """
    pass

def set_caption(title, icontitle=None): # real signature unknown; restored from __doc__
    """
    pygame.display.set_caption(title, icontitle=None): return None
    set the current window caption
    """
    pass

def set_gamma(red, green=None, blue=None): # real signature unknown; restored from __doc__
    """
    pygame.display.set_gamma(red, green=None, blue=None): return bool
    change the hardware gamma ramps
    """
    return False

def set_gamma_ramp(red, green, blue): # real signature unknown; restored from __doc__
    """
    change the hardware gamma ramps with a custom lookup
    pygame.display.set_gamma_ramp(red, green, blue): return bool
    set_gamma_ramp(red, green, blue): return bool
    """
    return False

def set_icon(Surface): # real signature unknown; restored from __doc__
    """
    pygame.display.set_icon(Surface): return None
    change the system image for the display window
    """
    pass

def set_mode(resolution=(0,0), flags=0, depth=0): # real signature unknown; restored from __doc__
    """
    pygame.display.set_mode(resolution=(0,0), flags=0, depth=0): return Surface
    initialize a window or screen for display
    """
    pass

def set_palette(palette=None): # real signature unknown; restored from __doc__
    """
    pygame.display.set_palette(palette=None): return None
    set the display color palette for indexed displays
    """
    pass

def toggle_fullscreen(): # real signature unknown; restored from __doc__
    """
    pygame.display.toggle_fullscreen(): return bool
    switch between fullscreen and windowed displays
    """
    return False

def update(rectangle=None): # real signature unknown; restored from __doc__
    """
    pygame.display.update(rectangle=None): return None
    pygame.display.update(rectangle_list): return None
    update portions of the screen for software displays
    """
    pass

def __PYGAMEinit__(*args, **kwargs): # real signature unknown
    """ auto initialize function for display. """
    pass

# no classes
# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

