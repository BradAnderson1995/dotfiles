# encoding: utf-8
# module goocanvas
# from /usr/lib/python2.7/dist-packages/goocanvasmodule.so
# by generator 1.135
# no doc

# imports
import gobject as __gobject
import gobject._gobject as __gobject__gobject
import gtk as __gtk


# Variables with simple values

ANIMATE_BOUNCE = 3
ANIMATE_FREEZE = 0
ANIMATE_RESET = 1
ANIMATE_RESTART = 2

EVENTS_ALL = 12
EVENTS_FILL = 4

EVENTS_FILL_MASK = 4

EVENTS_NONE = 0
EVENTS_PAINTED = 14

EVENTS_PAINTED_MASK = 2

EVENTS_STROKE = 8

EVENTS_STROKE_MASK = 8

EVENTS_VISIBLE = 13

EVENTS_VISIBLE_FILL = 5
EVENTS_VISIBLE_MASK = 1
EVENTS_VISIBLE_PAINTED = 15
EVENTS_VISIBLE_STROKE = 9

ITEM_HIDDEN = 0
ITEM_INVISIBLE = 1
ITEM_VISIBLE = 2

ITEM_VISIBLE_ABOVE_THRESHOLD = 3

PATH_CLOSE_PATH = 1

PATH_CURVE_TO = 5

PATH_ELLIPTICAL_ARC = 9

PATH_HORIZONTAL_LINE_TO = 3

PATH_LINE_TO = 2

PATH_MOVE_TO = 0

PATH_QUADRATIC_CURVE_TO = 7

PATH_SMOOTH_CURVE_TO = 6

PATH_SMOOTH_QUADRATIC_CURVE_TO = 8

PATH_VERTICAL_LINE_TO = 4

__version__ = '0.14.1'

# functions

def goo_cairo_matrix_copy(*args, **kwargs): # real signature unknown
    pass

def goo_cairo_matrix_free(*args, **kwargs): # real signature unknown
    pass

def polyline_model_new_line(*args, **kwargs): # real signature unknown
    pass

def polyline_new_line(*args, **kwargs): # real signature unknown
    pass

# classes

from AnimateType import AnimateType
from Bounds import Bounds
from Canvas import Canvas
from Item import Item
from ItemSimple import ItemSimple
from Ellipse import Ellipse
from ItemModel import ItemModel
from ItemModelSimple import ItemModelSimple
from EllipseModel import EllipseModel
from Grid import Grid
from GridModel import GridModel
from Group import Group
from GroupModel import GroupModel
from Image import Image
from ImageModel import ImageModel
from ItemVisibility import ItemVisibility
from LineDash import LineDash
from Path import Path
from PathModel import PathModel
from PointerEvents import PointerEvents
from Points import Points
from Polyline import Polyline
from PolylineModel import PolylineModel
from Rect import Rect
from RectModel import RectModel
from Style import Style
from Table import Table
from TableModel import TableModel
from Text import Text
from TextModel import TextModel
from Widget import Widget
# variables with complex values

pygoocanvas_version = (
    0,
    14,
    1,
)

TYPE_CAIRO_MATRIX = None # (!) real value is ''

TYPE_CAIRO_PATTERN = None # (!) real value is ''

