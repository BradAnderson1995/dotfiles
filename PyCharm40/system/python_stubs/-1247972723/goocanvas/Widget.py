# encoding: utf-8
# module goocanvas
# from /usr/lib/python2.7/dist-packages/goocanvasmodule.so
# by generator 1.135
# no doc

# imports
import gobject as __gobject
import gobject._gobject as __gobject__gobject
import gtk as __gtk


from ItemSimple import ItemSimple

class Widget(ItemSimple):
    """
    Object GooCanvasWidget
    
    Properties from GooCanvasWidget:
      widget -> GtkWidget: Widget
        The widget to place in the canvas
      x -> gdouble: X
        The x coordinate of the widget
      y -> gdouble: Y
        The y coordinate of the widget
      width -> gdouble: Width
        The width of the widget, or -1 to use its requested width
      height -> gdouble: Height
        The height of the widget, or -1 to use its requested height
      anchor -> GtkAnchorType: Anchor
        How to position the widget relative to the item's x and y coordinate settings
    
    Signals from GooCanvasItem:
      child-notify (GParam)
      button-press-event (GooCanvasItem, GdkEvent) -> gboolean
      button-release-event (GooCanvasItem, GdkEvent) -> gboolean
      scroll-event (GooCanvasItem, GdkEvent) -> gboolean
      motion-notify-event (GooCanvasItem, GdkEvent) -> gboolean
      key-press-event (GooCanvasItem, GdkEvent) -> gboolean
      key-release-event (GooCanvasItem, GdkEvent) -> gboolean
      enter-notify-event (GooCanvasItem, GdkEvent) -> gboolean
      leave-notify-event (GooCanvasItem, GdkEvent) -> gboolean
      focus-in-event (GooCanvasItem, GdkEvent) -> gboolean
      focus-out-event (GooCanvasItem, GdkEvent) -> gboolean
      grab-broken-event (GooCanvasItem, GdkEvent) -> gboolean
      query-tooltip (gdouble, gdouble, gboolean, GtkTooltip) -> gboolean
      animation-finished (gboolean)
    
    Properties from GooCanvasItemSimple:
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
    
    Signals from GooCanvasItem:
      child-notify (GParam)
      button-press-event (GooCanvasItem, GdkEvent) -> gboolean
      button-release-event (GooCanvasItem, GdkEvent) -> gboolean
      scroll-event (GooCanvasItem, GdkEvent) -> gboolean
      motion-notify-event (GooCanvasItem, GdkEvent) -> gboolean
      key-press-event (GooCanvasItem, GdkEvent) -> gboolean
      key-release-event (GooCanvasItem, GdkEvent) -> gboolean
      enter-notify-event (GooCanvasItem, GdkEvent) -> gboolean
      leave-notify-event (GooCanvasItem, GdkEvent) -> gboolean
      focus-in-event (GooCanvasItem, GdkEvent) -> gboolean
      focus-out-event (GooCanvasItem, GdkEvent) -> gboolean
      grab-broken-event (GooCanvasItem, GdkEvent) -> gboolean
      query-tooltip (gdouble, gdouble, gboolean, GtkTooltip) -> gboolean
      animation-finished (gboolean)
    
    Signals from GObject:
      notify (GParam)
    """
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __gtype__ = None # (!) real value is ''


