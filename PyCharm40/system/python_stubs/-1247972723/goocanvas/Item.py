# encoding: utf-8
# module goocanvas
# from /usr/lib/python2.7/dist-packages/goocanvasmodule.so
# by generator 1.135
# no doc

# imports
import gobject as __gobject
import gobject._gobject as __gobject__gobject
import gtk as __gtk


class Item(__gobject.GInterface):
    # no doc
    def add_child(self, *args, **kwargs): # real signature unknown
        pass

    def allocate_area(self, *args, **kwargs): # real signature unknown
        pass

    def animate(self, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_add_child(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_allocate_area(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_button_press_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_button_release_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_enter_notify_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_focus_in_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_focus_out_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_bounds(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_canvas(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_child(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_model(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_n_children(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_parent(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_requested_area(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_requested_height(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_style(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_transform(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_get_transform_for_child(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_grab_broken_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_is_visible(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_key_press_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_key_release_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_leave_notify_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_motion_notify_event(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_move_child(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_paint(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_remove_child(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_request_update(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_set_canvas(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_set_model(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_set_parent(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_set_style(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_set_transform(cls, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def do_update(cls, *args, **kwargs): # real signature unknown
        pass

    def ensure_updated(self, *args, **kwargs): # real signature unknown
        pass

    def find_child(self, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def find_child_property(cls, *args, **kwargs): # real signature unknown
        pass

    def get_bounds(self, *args, **kwargs): # real signature unknown
        pass

    def get_canvas(self, *args, **kwargs): # real signature unknown
        pass

    def get_child(self, *args, **kwargs): # real signature unknown
        pass

    def get_child_properties(self, *args, **kwargs): # real signature unknown
        pass

    def get_child_property(self, *args, **kwargs): # real signature unknown
        pass

    def get_items_at(self, *args, **kwargs): # real signature unknown
        pass

    def get_model(self, *args, **kwargs): # real signature unknown
        pass

    def get_n_children(self, *args, **kwargs): # real signature unknown
        pass

    def get_parent(self, *args, **kwargs): # real signature unknown
        pass

    def get_requested_area(self, *args, **kwargs): # real signature unknown
        pass

    def get_requested_height(self, *args, **kwargs): # real signature unknown
        pass

    def get_simple_transform(self, *args, **kwargs): # real signature unknown
        pass

    def get_style(self, *args, **kwargs): # real signature unknown
        pass

    def get_transform(self, *args, **kwargs): # real signature unknown
        pass

    def get_transform_for_child(self, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def install_child_property(cls, *args, **kwargs): # real signature unknown
        pass

    def is_container(self, *args, **kwargs): # real signature unknown
        pass

    def is_visible(self, *args, **kwargs): # real signature unknown
        pass

    @classmethod
    def list_child_properties(cls, *args, **kwargs): # real signature unknown
        pass

    def lower(self, *args, **kwargs): # real signature unknown
        pass

    def move_child(self, *args, **kwargs): # real signature unknown
        pass

    def paint(self, *args, **kwargs): # real signature unknown
        pass

    def raise_(self, *args, **kwargs): # real signature unknown
        pass

    def remove(self, *args, **kwargs): # real signature unknown
        pass

    def remove_child(self, *args, **kwargs): # real signature unknown
        pass

    def request_update(self, *args, **kwargs): # real signature unknown
        pass

    def rotate(self, *args, **kwargs): # real signature unknown
        pass

    def scale(self, *args, **kwargs): # real signature unknown
        pass

    def set_canvas(self, *args, **kwargs): # real signature unknown
        pass

    def set_child_properties(self, *args, **kwargs): # real signature unknown
        pass

    def set_child_property(self, *args, **kwargs): # real signature unknown
        pass

    def set_model(self, *args, **kwargs): # real signature unknown
        pass

    def set_parent(self, *args, **kwargs): # real signature unknown
        pass

    def set_simple_transform(self, *args, **kwargs): # real signature unknown
        pass

    def set_style(self, *args, **kwargs): # real signature unknown
        pass

    def set_transform(self, *args, **kwargs): # real signature unknown
        pass

    def skew_x(self, *args, **kwargs): # real signature unknown
        pass

    def skew_y(self, *args, **kwargs): # real signature unknown
        pass

    def stop_animation(self, *args, **kwargs): # real signature unknown
        pass

    def translate(self, *args, **kwargs): # real signature unknown
        pass

    def update(self, *args, **kwargs): # real signature unknown
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __gtype__ = None # (!) real value is ''


