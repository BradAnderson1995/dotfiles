# encoding: utf-8
# module pygame.rect
# from /usr/lib/python2.7/dist-packages/pygame/rect.so
# by generator 1.135
""" Module for the rectangle object """
# no imports

# no functions
# classes

from object import object

class RectType(object):
    """
    pygame.Rect(left, top, width, height): return Rect
    pygame.Rect((left, top), (width, height)): return Rect
    pygame.Rect(object): return Rect
    pygame object for storing rectangular coordinates
    """
    def clamp(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.clamp(Rect): return Rect
        moves the rectangle inside another
        """
        return Rect

    def clamp_ip(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.clamp_ip(Rect): return None
        moves the rectangle inside another, in place
        """
        pass

    def clip(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.clip(Rect): return Rect
        crops a rectangle inside another
        """
        return Rect

    def collidedict(self, dict): # real signature unknown; restored from __doc__
        """
        Rect.collidedict(dict): return (key, value)
        test if one rectangle in a dictionary intersects
        """
        pass

    def collidedictall(self, dict): # real signature unknown; restored from __doc__
        """
        Rect.collidedictall(dict): return [(key, value), ...]
        test if all rectangles in a dictionary intersect
        """
        pass

    def collidelist(self, p_list): # real signature unknown; restored from __doc__
        """
        Rect.collidelist(list): return index
        test if one rectangle in a list intersects
        """
        pass

    def collidelistall(self, p_list): # real signature unknown; restored from __doc__
        """
        Rect.collidelistall(list): return indices
        test if all rectangles in a list intersect
        """
        pass

    def collidepoint(self, x, y): # real signature unknown; restored from __doc__
        """
        Rect.collidepoint(x, y): return bool
        Rect.collidepoint((x,y)): return bool
        test if a point is inside a rectangle
        """
        return False

    def colliderect(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.colliderect(Rect): return bool
        test if two rectangles overlap
        """
        return False

    def contains(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.contains(Rect): return bool
        test if one rectangle is inside another
        """
        return False

    def copy(self): # real signature unknown; restored from __doc__
        """
        Rect.copy(): return Rect
        copy the rectangle
        """
        return Rect

    def fit(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.fit(Rect): return Rect
        resize and move a rectangle with aspect ratio
        """
        return Rect

    def inflate(self, x, y): # real signature unknown; restored from __doc__
        """
        Rect.inflate(x, y): return Rect
        grow or shrink the rectangle size
        """
        return Rect

    def inflate_ip(self, x, y): # real signature unknown; restored from __doc__
        """
        Rect.inflate_ip(x, y): return None
        grow or shrink the rectangle size, in place
        """
        pass

    def move(self, x, y): # real signature unknown; restored from __doc__
        """
        Rect.move(x, y): return Rect
        moves the rectangle
        """
        return Rect

    def move_ip(self, x, y): # real signature unknown; restored from __doc__
        """
        Rect.move_ip(x, y): return None
        moves the rectangle, in place
        """
        pass

    def normalize(self): # real signature unknown; restored from __doc__
        """
        Rect.normalize(): return None
        correct negative sizes
        """
        pass

    def union(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.union(Rect): return Rect
        joins two rectangles into one
        """
        return Rect

    def unionall(self, Rect_sequence): # real signature unknown; restored from __doc__
        """
        Rect.unionall(Rect_sequence): return Rect
        the union of many rectangles
        """
        return Rect

    def unionall_ip(self, Rect_sequence): # real signature unknown; restored from __doc__
        """
        Rect.unionall_ip(Rect_sequence): return None
        the union of many rectangles, in place
        """
        pass

    def union_ip(self, Rect): # real signature unknown; restored from __doc__
        """
        Rect.union_ip(Rect): return None
        joins two rectangles into one, in place
        """
        pass

    def __coerce__(self, y): # real signature unknown; restored from __doc__
        """ x.__coerce__(y) <==> coerce(x, y) """
        pass

    def __copy__(self, *args, **kwargs): # real signature unknown
        pass

    def __delitem__(self, y): # real signature unknown; restored from __doc__
        """ x.__delitem__(y) <==> del x[y] """
        pass

    def __delslice__(self, i, j): # real signature unknown; restored from __doc__
        """
        x.__delslice__(i, j) <==> del x[i:j]
                   
                   Use of negative indices is not supported.
        """
        pass

    def __eq__(self, y): # real signature unknown; restored from __doc__
        """ x.__eq__(y) <==> x==y """
        pass

    def __getitem__(self, y): # real signature unknown; restored from __doc__
        """ x.__getitem__(y) <==> x[y] """
        pass

    def __getslice__(self, i, j): # real signature unknown; restored from __doc__
        """
        x.__getslice__(i, j) <==> x[i:j]
                   
                   Use of negative indices is not supported.
        """
        pass

    def __ge__(self, y): # real signature unknown; restored from __doc__
        """ x.__ge__(y) <==> x>=y """
        pass

    def __gt__(self, y): # real signature unknown; restored from __doc__
        """ x.__gt__(y) <==> x>y """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    def __len__(self): # real signature unknown; restored from __doc__
        """ x.__len__() <==> len(x) """
        pass

    def __le__(self, y): # real signature unknown; restored from __doc__
        """ x.__le__(y) <==> x<=y """
        pass

    def __lt__(self, y): # real signature unknown; restored from __doc__
        """ x.__lt__(y) <==> x<y """
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass

    def __ne__(self, y): # real signature unknown; restored from __doc__
        """ x.__ne__(y) <==> x!=y """
        pass

    def __nonzero__(self): # real signature unknown; restored from __doc__
        """ x.__nonzero__() <==> x != 0 """
        pass

    def __reduce__(self, *args, **kwargs): # real signature unknown
        pass

    def __repr__(self): # real signature unknown; restored from __doc__
        """ x.__repr__() <==> repr(x) """
        pass

    def __setitem__(self, i, y): # real signature unknown; restored from __doc__
        """ x.__setitem__(i, y) <==> x[i]=y """
        pass

    def __setslice__(self, i, j, y): # real signature unknown; restored from __doc__
        """
        x.__setslice__(i, j, y) <==> x[i:j]=y
                   
                   Use  of negative indices is not supported.
        """
        pass

    def __str__(self): # real signature unknown; restored from __doc__
        """ x.__str__() <==> str(x) """
        pass

    bottom = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    bottomleft = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    bottomright = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    center = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    centerx = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    centery = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    h = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    height = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    left = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    midbottom = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    midleft = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    midright = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    midtop = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    right = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    size = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    top = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    topleft = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    topright = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    w = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    width = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    x = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    y = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default

    __safe_for_unpickling__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default



Rect = RectType


# variables with complex values

_PYGAME_C_API = None # (!) real value is ''

