# encoding: utf-8
# module gnomevfs._gnomevfs
# from /usr/lib/python2.7/dist-packages/gtk-2.0/gnomevfs/_gnomevfs.so
# by generator 1.135
# no doc

# imports
import gnomevfs.async as async # <module 'gnomevfs.async' (built-in)>
import gnomevfs as __gnomevfs
import gobject._gobject as __gobject__gobject


class Drive(__gobject__gobject.GObject):
    """
    Object GnomeVFSDrive
    
    Signals from GnomeVFSDrive:
      volume-mounted (GnomeVFSVolume)
      volume-pre-unmount (GnomeVFSVolume)
      volume-unmounted (GnomeVFSVolume)
    
    Signals from GObject:
      notify (GParam)
    """
    def eject(self, *args, **kwargs): # real signature unknown
        pass

    def get_activation_uri(self, *args, **kwargs): # real signature unknown
        pass

    def get_device_path(self, *args, **kwargs): # real signature unknown
        pass

    def get_device_type(self, *args, **kwargs): # real signature unknown
        pass

    def get_display_name(self, *args, **kwargs): # real signature unknown
        pass

    def get_hal_udi(self, *args, **kwargs): # real signature unknown
        pass

    def get_icon(self, *args, **kwargs): # real signature unknown
        pass

    def get_id(self, *args, **kwargs): # real signature unknown
        pass

    def get_mounted_volumes(self, *args, **kwargs): # real signature unknown
        pass

    def is_connected(self, *args, **kwargs): # real signature unknown
        pass

    def is_mounted(self, *args, **kwargs): # real signature unknown
        pass

    def is_user_visible(self, *args, **kwargs): # real signature unknown
        pass

    def mount(self, *args, **kwargs): # real signature unknown
        pass

    def needs_eject(self, *args, **kwargs): # real signature unknown
        pass

    def unmount(self, *args, **kwargs): # real signature unknown
        pass

    def __cmp__(self, y): # real signature unknown; restored from __doc__
        """ x.__cmp__(y) <==> cmp(x,y) """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass

    __gtype__ = None # (!) real value is ''


