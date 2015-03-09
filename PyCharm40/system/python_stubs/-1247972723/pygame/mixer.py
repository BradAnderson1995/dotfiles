# encoding: utf-8
# module pygame.mixer
# from /usr/lib/python2.7/dist-packages/pygame/mixer.so
# by generator 1.135
""" pygame module for loading and playing sounds """

# imports
import pygame.mixer_music as music # /usr/lib/python2.7/dist-packages/pygame/mixer_music.so

# functions

def Channel(id): # real signature unknown; restored from __doc__
    """
    pygame.mixer.Channel(id): return Channel
    Create a Channel object for controlling playback
    """
    pass

def fadeout(time): # real signature unknown; restored from __doc__
    """
    pygame.mixer.fadeout(time): return None
    fade out the volume on all sounds before stopping
    """
    pass

def find_channel(force=False): # real signature unknown; restored from __doc__
    """
    pygame.mixer.find_channel(force=False): return Channel
    find an unused channel
    """
    pass

def get_busy(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.get_busy(): return bool
    test if any sound is being mixed
    """
    return False

def get_init(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.get_init(): return (frequency, format, channels)
    test if the mixer is initialized
    """
    pass

def get_num_channels(*args, **kwargs): # real signature unknown
    """ get the total number of playback channels """
    pass

def init(frequency=22050, size=-16, channels=2, buffer=4096): # real signature unknown; restored from __doc__
    """
    pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=4096): return None
    initialize the mixer module
    """
    pass

def pause(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.pause(): return None
    temporarily stop playback of all sound channels
    """
    pass

def pre_init(frequency=22050, size=-16, channels=2, buffersize=4096): # real signature unknown; restored from __doc__
    """
    pygame.mixer.pre_init(frequency=22050, size=-16, channels=2, buffersize=4096): return None
    preset the mixer init arguments
    """
    pass

def quit(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.quit(): return None
    uninitialize the mixer
    """
    pass

def set_num_channels(count): # real signature unknown; restored from __doc__
    """
    pygame.mixer.set_num_channels(count): return None
    set the total number of playback channels
    """
    pass

def set_reserved(count): # real signature unknown; restored from __doc__
    """
    pygame.mixer.set_reserved(count): return None
    reserve channels from being automatically used
    """
    pass

def stop(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.stop(): return None
    stop playback of all sound channels
    """
    pass

def unpause(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.unpause(): return None
    resume paused playback of sound channels
    """
    pass

def __PYGAMEinit__(*args, **kwargs): # real signature unknown
    """ auto initialize for mixer """
    pass

# classes

from object import object

class ChannelType(object):
    """
    pygame.mixer.Channel(id): return Channel
    Create a Channel object for controlling playback
    """
    def fadeout(self, time): # real signature unknown; restored from __doc__
        """
        Channel.fadeout(time): return None
        stop playback after fading channel out
        """
        pass

    def get_busy(self): # real signature unknown; restored from __doc__
        """
        Channel.get_busy(): return bool
        check if the channel is active
        """
        return False

    def get_endevent(self): # real signature unknown; restored from __doc__
        """
        Channel.get_endevent(): return type
        get the event a channel sends when playback stops
        """
        return type(*(), **{})

    def get_queue(self): # real signature unknown; restored from __doc__
        """
        Channel.get_queue(): return Sound
        return any Sound that is queued
        """
        return Sound

    def get_sound(self): # real signature unknown; restored from __doc__
        """
        Channel.get_sound(): return Sound
        get the currently playing Sound
        """
        return Sound

    def get_volume(self): # real signature unknown; restored from __doc__
        """
        Channel.get_volume(): return value
        get the volume of the playing channel
        """
        pass

    def pause(self): # real signature unknown; restored from __doc__
        """
        Channel.pause(): return None
        temporarily stop playback of a channel
        """
        pass

    def play(self, Sound, loops=0, maxtime=0, fade_ms=0): # real signature unknown; restored from __doc__
        """
        Channel.play(Sound, loops=0, maxtime=0, fade_ms=0): return None
        play a Sound on a specific Channel
        """
        pass

    def queue(self, Sound): # real signature unknown; restored from __doc__
        """
        Channel.queue(Sound): return None
        queue a Sound object to follow the current
        """
        pass

    def set_endevent(self): # real signature unknown; restored from __doc__
        """
        Channel.set_endevent(): return None
        Channel.set_endevent(type): return None
        have the channel send an event when playback stops
        """
        pass

    def set_volume(self, value): # real signature unknown; restored from __doc__
        """
        Channel.set_volume(value): return None
        Channel.set_volume(left, right): return None
        set the volume of a playing channel
        """
        pass

    def stop(self): # real signature unknown; restored from __doc__
        """
        Channel.stop(): return None
        stop playback on a Channel
        """
        pass

    def unpause(self): # real signature unknown; restored from __doc__
        """
        Channel.unpause(): return None
        resume pause playback of a channel
        """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass


from object import object

class SoundType(object):
    """
    pygame.mixer.Sound(filename): return Sound
    pygame.mixer.Sound(buffer): return Sound
    pygame.mixer.Sound(object): return Sound
    Create a new Sound object from a file
    """
    def fadeout(self, time): # real signature unknown; restored from __doc__
        """
        Sound.fadeout(time): return None
        stop sound playback after fading out
        """
        pass

    def get_buffer(self): # real signature unknown; restored from __doc__
        """
        Sound.get_buffer(): return BufferProxy
        acquires a buffer object for the sameples of the Sound.
        """
        pass

    def get_length(self): # real signature unknown; restored from __doc__
        """
        Sound.get_length(): return seconds
        get the length of the Sound
        """
        pass

    def get_num_channels(self): # real signature unknown; restored from __doc__
        """
        Sound.get_num_channels(): return count
        count how many times this Sound is playing
        """
        pass

    def get_volume(self): # real signature unknown; restored from __doc__
        """
        Sound.get_volume(): return value
        get the playback volume
        """
        pass

    def play(self, loops=0, maxtime=0, fade_ms=0): # real signature unknown; restored from __doc__
        """
        Sound.play(loops=0, maxtime=0, fade_ms=0): return Channel
        begin sound playback
        """
        pass

    def set_volume(self, value): # real signature unknown; restored from __doc__
        """
        Sound.set_volume(value): return None
        set the playback volume for this Sound
        """
        pass

    def stop(self): # real signature unknown; restored from __doc__
        """
        Sound.stop(): return None
        stop sound playback
        """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass


Sound = SoundType


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

