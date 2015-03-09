# encoding: utf-8
# module pygame.event
# from /usr/lib/python2.7/dist-packages/pygame/event.so
# by generator 1.135
""" pygame module for interacting with events and queues """
# no imports

# functions

def clear(): # real signature unknown; restored from __doc__
    """
    pygame.event.clear(): return None
    pygame.event.clear(type): return None
    pygame.event.clear(typelist): return None
    remove all events from the queue
    """
    pass

def Event(type, dict): # real signature unknown; restored from __doc__
    """
    pygame.event.Event(type, dict): return Event
    pygame.event.Event(type, **attributes): return Event
    create a new event object
    """
    pass

def event_name(type): # real signature unknown; restored from __doc__
    """
    pygame.event.event_name(type): return string
    get the string name from and event id
    """
    return ""

def get(): # real signature unknown; restored from __doc__
    """
    pygame.event.get(): return Eventlist
    pygame.event.get(type): return Eventlist
    pygame.event.get(typelist): return Eventlist
    get events from the queue
    """
    pass

def get_blocked(type): # real signature unknown; restored from __doc__
    """
    pygame.event.get_blocked(type): return bool
    test if a type of event is blocked from the queue
    """
    return False

def get_grab(): # real signature unknown; restored from __doc__
    """
    pygame.event.get_grab(): return bool
    test if the program is sharing input devices
    """
    return False

def peek(type): # real signature unknown; restored from __doc__
    """
    pygame.event.peek(type): return bool
    pygame.event.peek(typelist): return bool
    test if event types are waiting on the queue
    """
    return False

def poll(): # real signature unknown; restored from __doc__
    """
    pygame.event.poll(): return Event
    get a single event from the queue
    """
    pass

def post(Event): # real signature unknown; restored from __doc__
    """
    pygame.event.post(Event): return None
    place a new event on the queue
    """
    pass

def pump(): # real signature unknown; restored from __doc__
    """
    pygame.event.pump(): return None
    internally process pygame event handlers
    """
    pass

def set_allowed(type): # real signature unknown; restored from __doc__
    """
    pygame.event.set_allowed(type): return None
    pygame.event.set_allowed(typelist): return None
    pygame.event.set_allowed(None): return None
    control which events are allowed on the queue
    """
    pass

def set_blocked(type): # real signature unknown; restored from __doc__
    """
    pygame.event.set_blocked(type): return None
    pygame.event.set_blocked(typelist): return None
    pygame.event.set_blocked(None): return None
    control which events are allowed on the queue
    """
    pass

def set_grab(bool): # real signature unknown; restored from __doc__
    """
    pygame.event.set_grab(bool): return None
    control the sharing of input devices with other applications
    """
    pass

def wait(): # real signature unknown; restored from __doc__
    """
    pygame.event.wait(): return Event
    wait for a single event from the queue
    """
    pass

# classes

from object import object

class EventType(object):
    """
    pygame.event.Event(type, dict): return Event
    pygame.event.Event(type, **attributes): return Event
    create a new event object
    """
    def __eq__(self, y): # real signature unknown; restored from __doc__
        """ x.__eq__(y) <==> x==y """
        pass

    def __ge__(self, y): # real signature unknown; restored from __doc__
        """ x.__ge__(y) <==> x>=y """
        pass

    def __gt__(self, y): # real signature unknown; restored from __doc__
        """ x.__gt__(y) <==> x>y """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    def __le__(self, y): # real signature unknown; restored from __doc__
        """ x.__le__(y) <==> x<=y """
        pass

    def __lt__(self, y): # real signature unknown; restored from __doc__
        """ x.__lt__(y) <==> x<y """
        pass

    def __ne__(self, y): # real signature unknown; restored from __doc__
        """ x.__ne__(y) <==> x!=y """
        pass

    def __nonzero__(self): # real signature unknown; restored from __doc__
        """ x.__nonzero__() <==> x != 0 """
        pass

    def __repr__(self): # real signature unknown; restored from __doc__
        """ x.__repr__() <==> repr(x) """
        pass


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

