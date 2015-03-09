# encoding: utf-8
# module pygame.cdrom
# from /usr/lib/python2.7/dist-packages/pygame/cdrom.so
# by generator 1.135
""" pygame module for audio cdrom control """
# no imports

# functions

def CD(id): # real signature unknown; restored from __doc__
    """
    pygame.cdrom.CD(id): return CD
    class to manage a cdrom drive
    """
    pass

def get_count(): # real signature unknown; restored from __doc__
    """
    pygame.cdrom.get_count(): return count
    number of cd drives on the system
    """
    pass

def get_init(): # real signature unknown; restored from __doc__
    """
    pygame.cdrom.get_init(): return bool
    true if the cdrom module is initialized
    """
    return False

def init(): # real signature unknown; restored from __doc__
    """
    pygame.cdrom.init(): return None
    initialize the cdrom module
    """
    pass

def quit(): # real signature unknown; restored from __doc__
    """
    pygame.cdrom.quit(): return None
    uninitialize the cdrom module
    """
    pass

def __PYGAMEinit__(*args, **kwargs): # real signature unknown
    """ auto initialize function """
    pass

# classes

from object import object

class CDType(object):
    """
    pygame.cdrom.CD(id): return CD
    class to manage a cdrom drive
    """
    def eject(self): # real signature unknown; restored from __doc__
        """
        CD.eject(): return None
        eject or open the cdrom drive
        """
        pass

    def get_all(self): # real signature unknown; restored from __doc__
        """
        CD.get_all(): return [(audio, start, end, lenth), ...]
        get all track information
        """
        pass

    def get_busy(self): # real signature unknown; restored from __doc__
        """
        CD.get_busy(): return bool
        true if the drive is playing audio
        """
        return False

    def get_current(self): # real signature unknown; restored from __doc__
        """
        CD.get_current(): return track, seconds
        the current audio playback position
        """
        pass

    def get_empty(self): # real signature unknown; restored from __doc__
        """
        CD.get_empty(): return bool
        False if a cdrom is in the drive
        """
        return False

    def get_id(self, *args, **kwargs): # real signature unknown
        """
        CD.get_init(): return bool
        true if this cd device initialized
        """
        pass

    def get_init(self): # real signature unknown; restored from __doc__
        """
        CD.get_init(): return bool
        true if this cd device initialized
        """
        return False

    def get_name(self): # real signature unknown; restored from __doc__
        """
        CD.get_name(): return name
        the system name of the cdrom drive
        """
        pass

    def get_numtracks(self): # real signature unknown; restored from __doc__
        """
        CD.get_numtracks(): return count
        the number of tracks on the cdrom
        """
        pass

    def get_paused(self): # real signature unknown; restored from __doc__
        """
        CD.get_paused(): return bool
        true if the drive is paused
        """
        return False

    def get_track_audio(self, track): # real signature unknown; restored from __doc__
        """
        CD.get_track_audio(track): return bool
        true if the cdrom track has audio data
        """
        return False

    def get_track_length(self, track): # real signature unknown; restored from __doc__
        """
        CD.get_track_length(track): return seconds
        length of a cdrom track
        """
        pass

    def get_track_start(self, track): # real signature unknown; restored from __doc__
        """
        CD.get_track_start(track): return seconds
        start time of a cdrom track
        """
        pass

    def init(self): # real signature unknown; restored from __doc__
        """
        CD.init(): return None
        initialize a cdrom drive for use
        """
        pass

    def pause(self): # real signature unknown; restored from __doc__
        """
        CD.pause(): return None
        temporarily stop audio playback
        """
        pass

    def play(self, *args, **kwargs): # real signature unknown
        """
        CD.init(): return None
        initialize a cdrom drive for use
        """
        pass

    def quit(self): # real signature unknown; restored from __doc__
        """
        CD.quit(): return None
        uninitialize a cdrom drive for use
        """
        pass

    def resume(self): # real signature unknown; restored from __doc__
        """
        CD.resume(): return None
        unpause audio playback
        """
        pass

    def stop(self): # real signature unknown; restored from __doc__
        """
        CD.stop(): return None
        stop audio playback
        """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

