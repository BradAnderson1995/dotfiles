# encoding: utf-8
# module pygame.joystick
# from /usr/lib/python2.7/dist-packages/pygame/joystick.so
# by generator 1.135
""" pygame module for interacting with joystick devices """
# no imports

# functions

def get_count(): # real signature unknown; restored from __doc__
    """
    pygame.joystick.get_count(): return count
    number of joysticks on the system
    """
    pass

def get_init(): # real signature unknown; restored from __doc__
    """
    pygame.joystick.get_init(): return bool
    true if the joystick module is initialized
    """
    return False

def init(): # real signature unknown; restored from __doc__
    """
    pygame.joystick.init(): return None
    initialize the joystick module
    """
    pass

def Joystick(id): # real signature unknown; restored from __doc__
    """
    pygame.joystick.Joystick(id): return Joystick
    create a new Joystick object
    """
    pass

def quit(): # real signature unknown; restored from __doc__
    """
    pygame.joystick.quit(): return None
    uninitialize the joystick module
    """
    pass

def __PYGAMEinit__(*args, **kwargs): # real signature unknown
    """ auto initialize function for joystick """
    pass

# classes

from object import object

class JoystickType(object):
    """
    pygame.joystick.Joystick(id): return Joystick
    create a new Joystick object
    """
    def get_axis(self, axis_number): # real signature unknown; restored from __doc__
        """
        Joystick.get_axis(axis_number): return float
        get the current position of an axis
        """
        return 0.0

    def get_ball(self, ball_number): # real signature unknown; restored from __doc__
        """
        Joystick.get_ball(ball_number): return x, y
        get the relative position of a trackball
        """
        pass

    def get_button(self, button): # real signature unknown; restored from __doc__
        """
        Joystick.get_button(button): return bool
        get the current button state
        """
        return False

    def get_hat(self, hat_number): # real signature unknown; restored from __doc__
        """
        Joystick.get_hat(hat_number): return x, y
        get the position of a joystick hat
        """
        pass

    def get_id(self): # real signature unknown; restored from __doc__
        """
        Joystick.get_id(): return int
        get the Joystick ID
        """
        return 0

    def get_init(self): # real signature unknown; restored from __doc__
        """
        Joystick.get_init(): return bool
        check if the Joystick is initialized
        """
        return False

    def get_name(self): # real signature unknown; restored from __doc__
        """
        Joystick.get_name(): return string
        get the Joystick system name
        """
        return ""

    def get_numaxes(self): # real signature unknown; restored from __doc__
        """
        Joystick.get_numaxes(): return int
        get the number of axes on a Joystick
        """
        return 0

    def get_numballs(self): # real signature unknown; restored from __doc__
        """
        Joystick.get_numballs(): return int
        get the number of trackballs on a Joystick
        """
        return 0

    def get_numbuttons(self): # real signature unknown; restored from __doc__
        """
        Joystick.get_numbuttons(): return int
        get the number of buttons on a Joystick
        """
        return 0

    def get_numhats(self): # real signature unknown; restored from __doc__
        """
        Joystick.get_numhats(): return int
        get the number of hat controls on a Joystick
        """
        return 0

    def init(self): # real signature unknown; restored from __doc__
        """
        Joystick.init(): return None
        initialize the Joystick
        """
        pass

    def quit(self): # real signature unknown; restored from __doc__
        """
        Joystick.quit(): return None
        uninitialize the Joystick
        """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

