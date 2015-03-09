# encoding: utf-8
# module _ast
# from (built-in)
# by generator 1.135
# no doc
# no imports

# Variables with simple values

PyCF_ONLY_AST = 1024

__version__ = '82160'

# no functions
# classes

from object import object

class AST(object):
    # no doc
    def __delattr__(self, name): # real signature unknown; restored from __doc__
        """ x.__delattr__('name') <==> del x.name """
        pass

    def __getattribute__(self, name): # real signature unknown; restored from __doc__
        """ x.__getattribute__('name') <==> x.name """
        pass

    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass

    def __reduce__(self, *args, **kwargs): # real signature unknown
        pass

    def __setattr__(self, name, value): # real signature unknown; restored from __doc__
        """ x.__setattr__('name', value) <==> x.name = value """
        pass

    _attributes = ()
    _fields = ()


from AST import AST

class operator(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = ()
    _fields = ()
    __dict__ = None # (!) real value is ''


from operator import operator

class Add(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from AST import AST

class alias(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _fields = (
        'name',
        'asname',
    )
    __dict__ = None # (!) real value is ''


from AST import AST

class boolop(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = ()
    _fields = ()
    __dict__ = None # (!) real value is ''


from boolop import boolop

class And(boolop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from AST import AST

class arguments(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _fields = (
        'args',
        'vararg',
        'kwarg',
        'defaults',
    )
    __dict__ = None # (!) real value is ''


from AST import AST

class stmt(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = (
        'lineno',
        'col_offset',
    )
    _fields = ()
    __dict__ = None # (!) real value is ''


from stmt import stmt

class Assert(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'test',
        'msg',
    )


from stmt import stmt

class Assign(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'targets',
        'value',
    )


from AST import AST

class expr(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = (
        'lineno',
        'col_offset',
    )
    _fields = ()
    __dict__ = None # (!) real value is ''


from expr import expr

class Attribute(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'value',
        'attr',
        'ctx',
    )


from stmt import stmt

class AugAssign(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'target',
        'op',
        'value',
    )


from AST import AST

class expr_context(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = ()
    _fields = ()
    __dict__ = None # (!) real value is ''


from expr_context import expr_context

class AugLoad(expr_context):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr_context import expr_context

class AugStore(expr_context):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class BinOp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'left',
        'op',
        'right',
    )


from operator import operator

class BitAnd(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from operator import operator

class BitOr(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from operator import operator

class BitXor(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class BoolOp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'op',
        'values',
    )


from stmt import stmt

class Break(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class Call(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'func',
        'args',
        'keywords',
        'starargs',
        'kwargs',
    )


from stmt import stmt

class ClassDef(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'name',
        'bases',
        'body',
        'decorator_list',
    )


from AST import AST

class cmpop(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = ()
    _fields = ()
    __dict__ = None # (!) real value is ''


from expr import expr

class Compare(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'left',
        'ops',
        'comparators',
    )


from AST import AST

class comprehension(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _fields = (
        'target',
        'iter',
        'ifs',
    )
    __dict__ = None # (!) real value is ''


from stmt import stmt

class Continue(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr_context import expr_context

class Del(expr_context):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from stmt import stmt

class Delete(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'targets',
    )


from expr import expr

class Dict(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'keys',
        'values',
    )


from expr import expr

class DictComp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'key',
        'value',
        'generators',
    )


from operator import operator

class Div(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from AST import AST

class slice(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = ()
    _fields = ()
    __dict__ = None # (!) real value is ''


from slice import slice

class Ellipsis(slice):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class Eq(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from AST import AST

class excepthandler(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = (
        'lineno',
        'col_offset',
    )
    _fields = ()
    __dict__ = None # (!) real value is ''


from excepthandler import excepthandler

class ExceptHandler(excepthandler):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'type',
        'name',
        'body',
    )


from stmt import stmt

class Exec(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'body',
        'globals',
        'locals',
    )


from stmt import stmt

class Expr(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'value',
    )


from AST import AST

class mod(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = ()
    _fields = ()
    __dict__ = None # (!) real value is ''


from mod import mod

class Expression(mod):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'body',
    )


from slice import slice

class ExtSlice(slice):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'dims',
    )


from operator import operator

class FloorDiv(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from stmt import stmt

class For(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'target',
        'iter',
        'body',
        'orelse',
    )


from stmt import stmt

class FunctionDef(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'name',
        'args',
        'body',
        'decorator_list',
    )


from expr import expr

class GeneratorExp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'elt',
        'generators',
    )


from stmt import stmt

class Global(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'names',
    )


from cmpop import cmpop

class Gt(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class GtE(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from stmt import stmt

class If(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'test',
        'body',
        'orelse',
    )


from expr import expr

class IfExp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'test',
        'body',
        'orelse',
    )


from stmt import stmt

class Import(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'names',
    )


from stmt import stmt

class ImportFrom(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'module',
        'names',
        'level',
    )


from cmpop import cmpop

class In(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from slice import slice

class Index(slice):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'value',
    )


from mod import mod

class Interactive(mod):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'body',
    )


from AST import AST

class unaryop(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _attributes = ()
    _fields = ()
    __dict__ = None # (!) real value is ''


from unaryop import unaryop

class Invert(unaryop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class Is(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class IsNot(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from AST import AST

class keyword(AST):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    __weakref__ = property(lambda self: object(), lambda self, v: None, lambda self: None)  # default
    """list of weak references to the object (if defined)"""


    _fields = (
        'arg',
        'value',
    )
    __dict__ = None # (!) real value is ''


from expr import expr

class Lambda(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'args',
        'body',
    )


from expr import expr

class List(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'elts',
        'ctx',
    )


from expr import expr

class ListComp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'elt',
        'generators',
    )


from expr_context import expr_context

class Load(expr_context):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from operator import operator

class LShift(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class Lt(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class LtE(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from operator import operator

class Mod(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from mod import mod

class Module(mod):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'body',
    )


from operator import operator

class Mult(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class Name(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'id',
        'ctx',
    )


from unaryop import unaryop

class Not(unaryop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class NotEq(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from cmpop import cmpop

class NotIn(cmpop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class Num(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'n',
    )


from boolop import boolop

class Or(boolop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr_context import expr_context

class Param(expr_context):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from stmt import stmt

class Pass(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from operator import operator

class Pow(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from stmt import stmt

class Print(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'dest',
        'values',
        'nl',
    )


from stmt import stmt

class Raise(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'type',
        'inst',
        'tback',
    )


from expr import expr

class Repr(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'value',
    )


from stmt import stmt

class Return(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'value',
    )


from operator import operator

class RShift(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class Set(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'elts',
    )


from expr import expr

class SetComp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'elt',
        'generators',
    )


from slice import slice

class Slice(slice):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'lower',
        'upper',
        'step',
    )


from expr_context import expr_context

class Store(expr_context):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class Str(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        's',
    )


from operator import operator

class Sub(operator):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class Subscript(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'value',
        'slice',
        'ctx',
    )


from mod import mod

class Suite(mod):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'body',
    )


from stmt import stmt

class TryExcept(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'body',
        'handlers',
        'orelse',
    )


from stmt import stmt

class TryFinally(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'body',
        'finalbody',
    )


from expr import expr

class Tuple(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'elts',
        'ctx',
    )


from unaryop import unaryop

class UAdd(unaryop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from expr import expr

class UnaryOp(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'op',
        'operand',
    )


from unaryop import unaryop

class USub(unaryop):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = ()


from stmt import stmt

class While(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'test',
        'body',
        'orelse',
    )


from stmt import stmt

class With(stmt):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'context_expr',
        'optional_vars',
        'body',
    )


from expr import expr

class Yield(expr):
    # no doc
    def __init__(self, *args, **kwargs): # real signature unknown
        pass

    _fields = (
        'value',
    )


