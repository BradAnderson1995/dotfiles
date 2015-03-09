# encoding: utf-8
# module goocanvas
# from /usr/lib/python2.7/dist-packages/goocanvasmodule.so
# by generator 1.135
# no doc

# imports
import gobject as __gobject
import gobject._gobject as __gobject__gobject
import gtk as __gtk


class Canvas(__gtk.Container):
    """
    Object GooCanvas
    
    Signals from GooCanvas:
      set-scroll-adjustments (GtkAdjustment, GtkAdjustment)
      item-created (GooCanvasItem, GooCanvasItemModel)
    
    Properties from GooCanvas:
      scale -> gdouble: Scale
        The magnification factor of the canvas
      scale-x -> gdouble: Scale X
        The horizontal magnification factor of the canvas
      scale-y -> gdouble: Scale Y
        The vertical magnification factor of the canvas
      anchor -> GtkAnchorType: Anchor
        Where to place the canvas when it is smaller than the widget's allocated area
      x1 -> gdouble: X1
        The x coordinate of the left edge of the canvas bounds, in canvas units
      y1 -> gdouble: Y1
        The y coordinate of the top edge of the canvas bounds, in canvas units
      x2 -> gdouble: X2
        The x coordinate of the right edge of the canvas bounds, in canvas units
      y2 -> gdouble: Y2
        The y coordinate of the bottom edge of the canvas bounds, in canvas units
      automatic-bounds -> gboolean: Automatic Bounds
        If the bounds are automatically calculated based on the bounds of all the items in the canvas
      bounds-from-origin -> gboolean: Bounds From Origin
        If the automatic bounds are calculated from the origin
      bounds-padding -> gdouble: Bounds Padding
        The padding added to the automatic bounds
      units -> GtkUnit: Units
        The units to use for the canvas
      resolution-x -> gdouble: Resolution X
        The horizontal resolution of the display, in dots per inch
      resolution-y -> gdouble: Resolution Y
        The vertical resolution of the display, in dots per inch
      background-color -> gchararray: Background Color
        The color to use for the canvas background
      background-color-rgb -> guint: Background Color RGB
        The color to use for the canvas background, specified as a 24-bit integer value, 0xRRGGBB
      integer-layout -> gboolean: Integer Layout
        If all item layout is done to the nearest integer
      clear-background -> gboolean: Clear Background
        If the background is cleared before the canvas is painted
      redraw-when-scrolled -> gboolean: Redraw When Scrolled
        If the canvas is completely redrawn when scrolled, to reduce the flicker of static items
    
    Signals from GtkContainer:
      add (GtkWidget)
      remove (GtkWidget)
      check-resize ()
      set-focus-child (GtkWidget)
    
    Properties from GtkContainer:
      border-width -> guint: Border width
        The width of the empty border outside the containers children
      resize-mode -> GtkResizeMode: Resize mode
        Specify how resize events are handled
      child -> GtkWidget: Child
        Can be used to add a new child to the container
    
    Signals from GtkWidget:
      composited-changed ()
      show ()
      hide ()
      map ()
      unmap ()
      realize ()
      unrealize ()
      size-request (GtkRequisition)
      size-allocate (GdkRectangle)
      state-changed (GtkStateType)
      parent-set (GtkWidget)
      hierarchy-changed (GtkWidget)
      style-set (GtkStyle)
      direction-changed (GtkTextDirection)
      grab-notify (gboolean)
      child-notify (GParam)
      mnemonic-activate (gboolean) -> gboolean
      grab-focus ()
      focus (GtkDirectionType) -> gboolean
      move-focus (GtkDirectionType)
      event (GdkEvent) -> gboolean
      event-after (GdkEvent)
      button-press-event (GdkEvent) -> gboolean
      button-release-event (GdkEvent) -> gboolean
      scroll-event (GdkEvent) -> gboolean
      motion-notify-event (GdkEvent) -> gboolean
      keynav-failed (GtkDirectionType) -> gboolean
      delete-event (GdkEvent) -> gboolean
      destroy-event (GdkEvent) -> gboolean
      expose-event (GdkEvent) -> gboolean
      key-press-event (GdkEvent) -> gboolean
      key-release-event (GdkEvent) -> gboolean
      enter-notify-event (GdkEvent) -> gboolean
      leave-notify-event (GdkEvent) -> gboolean
      configure-event (GdkEvent) -> gboolean
      focus-in-event (GdkEvent) -> gboolean
      focus-out-event (GdkEvent) -> gboolean
      map-event (GdkEvent) -> gboolean
      unmap-event (GdkEvent) -> gboolean
      property-notify-event (GdkEvent) -> gboolean
      selection-clear-event (GdkEvent) -> gboolean
      selection-request-event (GdkEvent) -> gboolean
      selection-notify-event (GdkEvent) -> gboolean
      selection-received (GtkSelectionData, guint)
      selection-get (GtkSelectionData, guint, guint)
      proximity-in-event (GdkEvent) -> gboolean
      proximity-out-event (GdkEvent) -> gboolean
      drag-leave (GdkDragContext, guint)
      drag-begin (GdkDragContext)
      drag-end (GdkDragContext)
      drag-data-delete (GdkDragContext)
      drag-failed (GdkDragContext, GtkDragResult) -> gboolean
      drag-motion (GdkDragContext, gint, gint, guint) -> gboolean
      drag-drop (GdkDragContext, gint, gint, guint) -> gboolean
      drag-data-get (GdkDragContext, GtkSelectionData, guint, guint)
      drag-data-received (GdkDragContext, gint, gint, GtkSelectionData, guint, guint)
      visibility-notify-event (GdkEvent) -> gboolean
      client-event (GdkEvent) -> gboolean
      no-expose-event (GdkEvent) -> gboolean
      window-state-event (GdkEvent) -> gboolean
      damage-event (GdkEvent) -> gboolean
      grab-broken-event (GdkEvent) -> gboolean
      query-tooltip (gint, gint, gboolean, GtkTooltip) -> gboolean
      popup-menu () -> gboolean
      show-help (GtkWidgetHelpType) -> gboolean
      accel-closures-changed ()
      screen-changed (GdkScreen)
      can-activate-accel (guint) -> gboolean
    
    Properties from GtkWidget:
      name -> gchararray: Widget name
        The name of the widget
      parent -> GtkContainer: Parent widget
        The parent widget of this widget. Must be a Container widget
      width-request -> gint: Width request
        Override for width request of the widget, or -1 if natural request should be used
      height-request -> gint: Height request
        Override for height request of the widget, or -1 if natural request should be used
      visible -> gboolean: Visible
        Whether the widget is visible
      sensitive -> gboolean: Sensitive
        Whether the widget responds to input
      app-paintable -> gboolean: Application paintable
        Whether the application will paint directly on the widget
      can-focus -> gboolean: Can focus
        Whether the widget can accept the input focus
      has-focus -> gboolean: Has focus
        Whether the widget has the input focus
      is-focus -> gboolean: Is focus
        Whether the widget is the focus widget within the toplevel
      can-default -> gboolean: Can default
        Whether the widget can be the default widget
      has-default -> gboolean: Has default
        Whether the widget is the default widget
      receives-default -> gboolean: Receives default
        If TRUE, the widget will receive the default action when it is focused
      composite-child -> gboolean: Composite child
        Whether the widget is part of a composite widget
      style -> GtkStyle: Style
        The style of the widget, which contains information about how it will look (colors etc)
      events -> GdkEventMask: Events
        The event mask that decides what kind of GdkEvents this widget gets
      extension-events -> GdkExtensionMode: Extension events
        The mask that decides what kind of extension events this widget gets
      no-show-all -> gboolean: No show all
        Whether gtk_widget_show_all() should not affect this widget
      has-tooltip -> gboolean: Has tooltip
        Whether this widget has a tooltip
      tooltip-markup -> gchararray: Tooltip markup
        The contents of the tooltip for this widget
      tooltip-text -> gchararray: Tooltip Text
        The contents of the tooltip for this widget
      window -> GdkWindow: Window
        The widget's window if it is realized
      double-buffered -> gboolean: Double Buffered
        Whether or not the widget is double buffered
    
    Signals from GtkObject:
      destroy ()
    
    Properties from GtkObject:
      user-data -> gpointer: User Data
        Anonymous User Data Pointer
    
    Signals from GObject:
      notify (GParam)
    """
    def convert_bounds_to_item_space(self, *args, **kwargs): # real signature unknown
        pass

    def convert_from_item_space(self, *args, **kwargs): # real signature unknown
        pass

    def convert_from_pixels(self, *args, **kwargs): # real signature unknown
        pass

    def convert_to_item_space(self, *args, **kwargs): # real signature unknown
        pass

    def convert_to_pixels(self, *args, **kwargs): # real signature unknown
        pass

    def create_cairo_context(self, *args, **kwargs): # real signature unknown
        pass

    def create_item(self, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_create_item(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_item_created(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_set_scroll_adjustments(cls, *args, **kwargs): # real signature unknown
        pass

    def get_bounds(self, *args, **kwargs): # real signature unknown
        pass

    def get_default_line_width(self, *args, **kwargs): # real signature unknown
        pass

    def get_item(self, *args, **kwargs): # real signature unknown
        pass

    def get_items_at(self, *args, **kwargs): # real signature unknown
        pass

    def get_items_in_area(self, *args, **kwargs): # real signature unknown
        pass

    def get_item_at(self, *args, **kwargs): # real signature unknown
        pass

    def get_root_item(self, *args, **kwargs): # real signature unknown
        pass

    def get_root_item_model(self, *args, **kwargs): # real signature unknown
        pass

    def get_scale(self, *args, **kwargs): # real signature unknown
        pass

    def get_static_root_item(self, *args, **kwargs): # real signature unknown
        pass

    def get_static_root_item_model(self, *args, **kwargs): # real signature unknown
        pass

    def grab_focus(self, *args, **kwargs): # real signature unknown
        pass

    def keyboard_grab(self, *args, **kwargs): # real signature unknown
        pass

    def keyboard_ungrab(self, *args, **kwargs): # real signature unknown
        pass

    def pointer_grab(self, *args, **kwargs): # real signature unknown
        pass

    def pointer_ungrab(self, *args, **kwargs): # real signature unknown
        pass

    def register_widget_item(self, *args, **kwargs): # real signature unknown
        pass

    def render(self, *args, **kwargs): # real signature unknown
        pass

    def request_item_redraw(self, *args, **kwargs): # real signature unknown
        pass

    def request_redraw(self, *args, **kwargs): # real signature unknown
        pass

    def request_update(self, *args, **kwargs): # real signature unknown
        pass

    def scroll_to(self, *args, **kwargs): # real signature unknown
        pass

    def set_bounds(self, *args, **kwargs): # real signature unknown
        pass

    def set_root_item(self, *args, **kwargs): # real signature unknown
        pass

    def set_root_item_model(self, *args, **kwargs): # real signature unknown
        pass

    def set_scale(self, *args, **kwargs): # real signature unknown
        pass

    def set_static_root_item(self, *args, **kwargs): # real signature unknown
        pass

    def set_static_root_item_model(self, *args, **kwargs): # real signature unknown
        pass

    def unregister_item(self, *args, **kwargs): # real signature unknown
        pass

    def unregister_widget_item(self, *args, **kwargs): # real signature unknown
        pass

    def update(self, *args, **kwargs): # real signature unknown
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    def __iter__(self): # real signature unknown; restored from __doc__
        """ x.__iter__() <==> iter(x) """
        pass

    __gtype__ = None # (!) real value is ''


