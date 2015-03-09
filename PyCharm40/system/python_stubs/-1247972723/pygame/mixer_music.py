# encoding: utf-8
# module pygame.mixer_music
# from /usr/lib/python2.7/dist-packages/pygame/mixer_music.so
# by generator 1.135
""" pygame module for controlling streamed audio """
# no imports

# functions

def fadeout(time): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.fadeout(time): return None
    stop music playback after fading out
    """
    pass

def get_busy(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.get_busy(): return bool
    check if the music stream is playing
    """
    return False

def get_endevent(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.get_endevent(): return type
    get the event a channel sends when playback stops
    """
    return type(*(), **{})

def get_pos(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.get_pos(): return time
    get the music play time
    """
    pass

def get_volume(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.get_volume(): return value
    get the music volume
    """
    pass

def load(filename): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.load(filename): return None
    pygame.mixer.music.load(object): return None
    Load a music file for playback
    """
    pass

def pause(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.pause(): return None
    temporarily stop music playback
    """
    pass

def play(loops=0, start=0.0): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.play(loops=0, start=0.0): return None
    Start the playback of the music stream
    """
    pass

def queue(filename): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.queue(filename): return None
    queue a music file to follow the current
    """
    pass

def rewind(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.rewind(): return None
    restart music
    """
    pass

def set_endevent(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.set_endevent(): return None
    pygame.mixer.music.set_endevent(type): return None
    have the music send an event when playback stops
    """
    pass

def set_volume(value): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.set_volume(value): return None
    set the music volume
    """
    pass

def stop(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.stop(): return None
    stop the music playback
    """
    pass

def unpause(): # real signature unknown; restored from __doc__
    """
    pygame.mixer.music.unpause(): return None
    resume paused music
    """
    pass

# no classes
# variables with complex values

_MUSIC_POINTER = None # (!) real value is ''

_QUEUE_POINTER = None # (!) real value is ''

