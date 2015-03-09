# encoding: utf-8
# module pygame.fastevent
# from /usr/lib/python2.7/dist-packages/pygame/fastevent.so
# by generator 1.135
"""
pygame.fastevent is a wrapper for Bob Pendleton's fastevent
library.  It provides fast events for use in multithreaded
environments.  When using pygame.fastevent, you can not use
any of the pump, wait, poll, post, get, peek, etc. functions
from pygame.event, but you should use the Event objects.
"""

# imports
from pygame.event import Event, event_name


# functions

def get(): # real signature unknown; restored from __doc__
    """
    pygame.fastevent.get() -> list of Events
    get all events from the queue
    """
    return []

def init(): # real signature unknown; restored from __doc__
    """
    pygame.fastevent.init() -> None
    initialize pygame.fastevent.
    """
    pass

def poll(): # real signature unknown; restored from __doc__
    """
    pygame.fastevent.poll() -> Event
    get an available event
    
    Returns next event on queue. If there is no event waiting on the
    queue, this will return an event with type NOEVENT.
    """
    pass

def post(Event): # real signature unknown; restored from __doc__
    """
    pygame.fastevent.post(Event) -> None
    place an event on the queue
    
    This will post your own event objects onto the event queue.
    You can past any event type you want, but some care must be
    taken. For example, if you post a MOUSEBUTTONDOWN event to the
    queue, it is likely any code receiving the event will expect
    the standard MOUSEBUTTONDOWN attributes to be available, like
    'pos' and 'button'.
    
    Because pygame.fastevent.post() may have to wait for the queue
    to empty, you can get into a dead lock if you try to append an
    event on to a full queue from the thread that processes events.
    For that reason I do not recommend using this function in the
    main thread of an SDL program.
    """
    pass

def pump(): # real signature unknown; restored from __doc__
    """
    pygame.fastevent.pump() -> None
    update the internal messages
    
    For each frame of your game, you will need to make some sort
    of call to the event queue. This ensures your program can internally
    interact with the rest of the operating system. If you are not using
    other event functions in your game, you should call pump() to allow
    pygame to handle internal actions.
    
    There are important things that must be dealt with internally in the
    event queue. The main window may need to be repainted. Certain joysticks
    must be polled for their values. If you fail to make a call to the event
    queue for too long, the system may decide your program has locked up.
    """
    pass

def wait(): # real signature unknown; restored from __doc__
    """
    pygame.fastevent.wait() -> Event
    wait for an event
    
    Returns the current event on the queue. If there are no messages
    waiting on the queue, this will not return until one is
    available. Sometimes it is important to use this wait to get
    events from the queue, it will allow your application to idle
    when the user isn't doing anything with it.
    """
    pass

# no classes
