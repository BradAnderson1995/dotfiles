# encoding: utf-8
# module goocanvas
# from /usr/lib/python2.7/dist-packages/goocanvasmodule.so
# by generator 1.135
# no doc

# imports
import gobject as __gobject
import gobject._gobject as __gobject__gobject
import gtk as __gtk


from ItemModelSimple import ItemModelSimple

class GridModel(ItemModelSimple):
    """
    Object GooCanvasGridModel
    
    Properties from GooCanvasGridModel:
      x -> gdouble: X
        The x coordinate of the grid
      y -> gdouble: Y
        The y coordinate of the grid
      width -> gdouble: Width
        The width of the grid
      height -> gdouble: Height
        The height of the grid
      x-step -> gdouble: X Step
        The distance between the vertical grid lines
      y-step -> gdouble: Y Step
        The distance between the horizontal grid lines
      x-offset -> gdouble: X Offset
        The distance before the first vertical grid line
      y-offset -> gdouble: Y Offset
        The distance before the first horizontal grid line
      horz-grid-line-width -> gdouble: Horizontal Grid Line Width
        The width of the horizontal grid lines
      vert-grid-line-width -> gdouble: Vertical Grid Line Width
        The width of the vertical grid lines
      horz-grid-line-pattern -> GooCairoPattern: Horizontal Grid Line Pattern
        The cairo pattern to paint the horizontal grid lines with
      vert-grid-line-pattern -> GooCairoPattern: Vertical Grid Line Pattern
        The cairo pattern to paint the vertical grid lines with
      border-width -> gdouble: Border Width
        The width of the border around the grid
      border-pattern -> GooCairoPattern: Border Pattern
        The cairo pattern to paint the border with
      show-horz-grid-lines -> gboolean: Show Horizontal Grid Lines
        If the horizontal grid lines are shown
      show-vert-grid-lines -> gboolean: Show Vertical Grid Lines
        If the vertical grid lines are shown
      vert-grid-lines-on-top -> gboolean: Vertical Grid Lines On Top
        If the vertical grid lines are painted above the horizontal grid lines
      horz-grid-line-color -> gchararray: Horizontal Grid Line Color
        The color to use for the horizontal grid lines
      horz-grid-line-color-rgba -> guint: Horizontal Grid Line Color RGBA
        The color to use for the horizontal grid lines, specified as a 32-bit integer value
      horz-grid-line-pixbuf -> GdkPixbuf: Horizontal Grid Line Pixbuf
        The pixbuf to use to draw the horizontal grid lines
      vert-grid-line-color -> gchararray: Vertical Grid Line Color
        The color to use for the vertical grid lines
      vert-grid-line-color-rgba -> guint: Vertical Grid Line Color RGBA
        The color to use for the vertical grid lines, specified as a 32-bit integer value
      vert-grid-line-pixbuf -> GdkPixbuf: Vertical Grid Line Pixbuf
        The pixbuf to use to draw the vertical grid lines
      border-color -> gchararray: Border Color
        The color to use for the border
      border-color-rgba -> guint: Border Color RGBA
        The color to use for the border, specified as a 32-bit integer value
      border-pixbuf -> GdkPixbuf: Border Pixbuf
        The pixbuf to use to draw the border
    
    Signals from GooCanvasItemModel:
      child-notify (GParam)
      animation-finished (gboolean)
      child-added (gint)
      child-moved (gint, gint)
      child-removed (gint)
      changed (gboolean)
    
    Properties from GooCanvasItemModelSimple:
      stroke-pattern -> GooCairoPattern: Stroke Pattern
        The pattern to use to paint the perimeter of the item, or NULL disable painting
      fill-pattern -> GooCairoPattern: Fill Pattern
        The pattern to use to paint the interior of the item, or NULL to disable painting
      fill-rule -> GooCairoFillRule: Fill Rule
        The fill rule used to determine which parts of the item are filled
      operator -> GooCairoOperator: Operator
        The compositing operator to use
      antialias -> GooCairoAntialias: Antialias
        The antialiasing mode to use
      line-width -> gdouble: Line Width
        The line width to use for the item's perimeter
      line-cap -> GooCairoLineCap: Line Cap
        The line cap style to use
      line-join -> GooCairoLineJoin: Line Join
        The line join style to use
      line-join-miter-limit -> gdouble: Miter Limit
        The smallest angle to use with miter joins, in degrees. Bevel joins will be used below this limit
      line-dash -> GooCanvasLineDash: Line Dash
        The dash pattern to use
      font -> gchararray: Font
        The base font to use for the text
      font-desc -> PangoFontDescription: Font Description
        The attributes specifying which font to use
      hint-metrics -> GooCairoHintMetrics: Hint Metrics
        The hinting to be used for font metrics
      stroke-color -> gchararray: Stroke Color
        The color to use for the item's perimeter. To disable painting set the 'stroke-pattern' property to NULL
      stroke-color-rgba -> guint: Stroke Color RGBA
        The color to use for the item's perimeter, specified as a 32-bit integer value. To disable painting set the 'stroke-pattern' property to NULL
      stroke-pixbuf -> GdkPixbuf: Stroke Pixbuf
        The pixbuf to use to draw the item's perimeter. To disable painting set the 'stroke-pattern' property to NULL
      fill-color -> gchararray: Fill Color
        The color to use to paint the interior of the item. To disable painting set the 'fill-pattern' property to NULL
      fill-color-rgba -> guint: Fill Color RGBA
        The color to use to paint the interior of the item, specified as a 32-bit integer value. To disable painting set the 'fill-pattern' property to NULL
      fill-pixbuf -> GdkPixbuf: Fill Pixbuf
        The pixbuf to use to paint the interior of the item. To disable painting set the 'fill-pattern' property to NULL
      clip-path -> gchararray: Clip Path
        The sequence of path commands specifying the clip path
      clip-fill-rule -> GooCairoFillRule: Clip Fill Rule
        The fill rule used to determine which parts of the item are clipped
    
    Signals from GooCanvasItemModel:
      child-notify (GParam)
      animation-finished (gboolean)
      child-added (gint)
      child-moved (gint, gint)
      child-removed (gint)
      changed (gboolean)
    
    Signals from GObject:
      notify (GParam)
    """
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __gtype__ = None # (!) real value is ''


