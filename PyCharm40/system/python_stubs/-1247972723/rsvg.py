# encoding: utf-8
# module rsvg
# from /usr/lib/python2.7/dist-packages/gtk-2.0/rsvg.so
# by generator 1.135
""" rsvg module. """

# imports
import gobject._gobject as __gobject__gobject


# functions

def set_default_dpi(*args, **kwargs): # real signature unknown
    pass

# classes

class Handle(__gobject__gobject.GObject):
    """
    Object RsvgHandle
    
    Properties from RsvgHandle:
      flags -> RsvgHandleFlags: flags
      dpi-x -> gdouble: Horizontal resolution
        Horizontal resolution
      dpi-y -> gdouble: Vertical resolution
        Vertical resolution
      base-uri -> gchararray: Base URI
        Base URI
      width -> gint: Image width
        Image width
      height -> gint: Image height
        Image height
      em -> gdouble: em
        em
      ex -> gdouble: ex
        ex
      title -> gchararray: Title
        SVG file title
      desc -> gchararray: Description
        SVG file description
      metadata -> gchararray: Metadata
        SVG file metadata
    
    Signals from GObject:
      notify (GParam)
    """
    def close(self, *args, **kwargs): # real signature unknown
        pass

    def get_dimension_data(self, *args, **kwargs): # real signature unknown
        pass

    def get_pixbuf(self, *args, **kwargs): # real signature unknown
        pass

    def render_cairo(self, *args, **kwargs): # real signature unknown
        pass

    def set_dpi(self, *args, **kwargs): # real signature unknown
        pass

    def write(self, *args, **kwargs): # real signature unknown
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __gtype__ = None # (!) real value is ''


