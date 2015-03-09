# encoding: utf-8
# module pygame.pypm
# from /usr/lib/python2.7/dist-packages/pygame/pypm.so
# by generator 1.135
# no doc

# imports
import array as array # <module 'array' (built-in)>
import __builtin__ as __builtins__ # <module '__builtin__' (built-in)>

# Variables with simple values

FALSE = 0

FILT_ACTIVE = 1
FILT_AFTERTOUCH = 768

FILT_CHANNEL_AFTERTOUCH = 256

FILT_CLOCK = 4
FILT_CONTROL = 2048
FILT_F9 = 16
FILT_FD = 32
FILT_MTC = 8192
FILT_NOTE = 128
FILT_PITCHBEND = 4096
FILT_PLAY = 8

FILT_POLY_AFTERTOUCH = 512

FILT_PROGRAM = 1024
FILT_REALTIME = 127
FILT_RESET = 64

FILT_SONG_POSITION = 16384
FILT_SONG_SELECT = 32768

FILT_SYSEX = 2
FILT_TICK = 16
FILT_TUNE = 65536
FILT_UNDEFINED = 48

TRUE = 1

__version__ = '0.05'

# functions

def Channel(*args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
    """
    Channel(<chan>) is used with ChannelMask on input MIDI streams.
    Example: to receive input on channels 1 and 10 on a MIDI
             stream called MidiIn:
    MidiIn.SetChannelMask(pypm.Channel(1) | pypm.Channel(10))
    
    note: PyPortMidi Channel function has been altered from
          the original PortMidi c call to correct for what
          seems to be a bug --- i.e. channel filters were
          all numbered from 0 to 15 instead of 1 to 16.
    """
    pass

def CountDevices(*args, **kwargs): # real signature unknown
    pass

def GetDefaultInputDeviceID(*args, **kwargs): # real signature unknown
    pass

def GetDefaultOutputDeviceID(*args, **kwargs): # real signature unknown
    pass

def GetDeviceInfo(*args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
    """
    GetDeviceInfo(<device number>): returns 5 parameters
      - underlying MIDI API
      - device name
      - TRUE iff input is available
      - TRUE iff output is available
      - TRUE iff device stream is already open
    """
    pass

def GetErrorText(*args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
    """
    GetErrorText(<err num>) returns human-readable error
    messages translated from error numbers
    """
    pass

def Initialize(*args, **kwargs): # real signature unknown
    """ Initialize: call this first """
    pass

def Terminate(*args, **kwargs): # real signature unknown
    """
    Terminate: call this to clean up Midi streams when done.
    If you do not call this on Windows machines when you are
    done with MIDI, your system may crash.
    """
    pass

def Time(): # real signature unknown; restored from __doc__
    """
    Time() returns the current time in ms
    of the PortMidi timer
    """
    pass

# classes

from object import object

class Input(object):
    """
    class Input:
        define an input MIDI stream. Takes the form:
            x = pypm.Input(MidiInputDevice)
    """
    def Close(self): # real signature unknown; restored from __doc__
        """
        Close()
            closes a midi stream, flushing any pending buffers.
            (PortMidi attempts to close open streams when the application
            exits -- this is particularly difficult under Windows.)
        """
        pass

    def Poll(self, *args, **kwargs): # real signature unknown
        """
        Poll tests whether input is available,
            returning TRUE, FALSE, or an error value.
        """
        pass

    def Read(self, length): # real signature unknown; restored from __doc__
        """
        Read(length): returns up to <length> midi events stored in
        the buffer and returns them as a list:
        [[[status,data1,data2,data3],timestamp],
         [[status,data1,data2,data3],timestamp],...]
        example: Read(50) returns all the events in the buffer,
                 up to 50 events.
        """
        pass

    def SetChannelMask(self, *args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
        """
        SetChannelMask(<mask>) filters incoming messages based on channel.
            The mask is a 16-bit bitfield corresponding to appropriate channels
            Channel(<channel>) can assist in calling this function.
            i.e. to set receive only input on channel 1, call with
            SetChannelMask(Channel(1))
            Multiple channels should be OR'd together, like
            SetChannelMask(Channel(10) | Channel(11))
            note: PyPortMidi Channel function has been altered from
                  the original PortMidi c call to correct for what
                  seems to be a bug --- i.e. channel filters were
                  all numbered from 0 to 15 instead of 1 to 16.
        """
        pass

    def SetFilter(self, *args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
        """
        SetFilter(<filters>) sets filters on an open input stream
            to drop selected input types. By default, only active sensing
            messages are filtered. To prohibit, say, active sensing and
            sysex messages, call
            SetFilter(stream, FILT_ACTIVE | FILT_SYSEX);
        
            Filtering is useful when midi routing or midi thru functionality
            is being provided by the user application.
            For example, you may want to exclude timing messages
            (clock, MTC, start/stop/continue), while allowing note-related
            messages to pass. Or you may be using a sequencer or drum-machine
            for MIDI clock information but want to exclude any notes
            it may play.
        
            Note: SetFilter empties the buffer after setting the filter,
            just in case anything got through.
        """
        pass

    def _check_open(self, *args, **kwargs): # real signature unknown
        """ checks to see if the midi is open, and if not, raises an error. """
        pass

    def __init__(self, MidiInputDevice): # real signature unknown; restored from __doc__
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass


from object import object

class Output(object):
    """
    class Output:
        define an output MIDI stream. Takes the form:
            x = pypm.Output(MidiOutputDevice, latency)
        latency is in ms.
        If latency = 0 then timestamps for output are ignored.
    """
    def Abort(self): # real signature unknown; restored from __doc__
        """
        Abort() terminates outgoing messages immediately
            The caller should immediately close the output port;
            this call may result in transmission of a partial midi message.
            There is no abort for Midi input because the user can simply
            ignore messages in the buffer and close an input device at
            any time.
        """
        pass

    def Close(self): # real signature unknown; restored from __doc__
        """
        Close()
            closes a midi stream, flushing any pending buffers.
            (PortMidi attempts to close open streams when the application
            exits -- this is particularly difficult under Windows.)
        """
        pass

    def Write(self, data): # real signature unknown; restored from __doc__
        """
        Write(data)
            output a series of MIDI information in the form of a list:
                 Write([[[status <,data1><,data2><,data3>],timestamp],
                        [[status <,data1><,data2><,data3>],timestamp],...])
            <data> fields are optional
            example: choose program change 1 at time 20000 and
            send note 65 with velocity 100 500 ms later.
                 Write([[[0xc0,0,0],20000],[[0x90,60,100],20500]])
            notes:
              1. timestamps will be ignored if latency = 0.
              2. To get a note to play immediately, send MIDI info with
                 timestamp read from function Time.
              3. understanding optional data fields:
                   Write([[[0xc0,0,0],20000]]) is equivalent to
                   Write([[[0xc0],20000]])
        """
        pass

    def WriteShort(self, status, *args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
        """
        WriteShort(status <, data1><, data2>)
             output MIDI information of 3 bytes or less.
             data fields are optional
             status byte could be:
                  0xc0 = program change
                  0x90 = note on
                  etc.
                  data bytes are optional and assumed 0 if omitted
             example: note 65 on with velocity 100
                  WriteShort(0x90,65,100)
        """
        pass

    def WriteSysEx(self, *args, **kwargs): # real signature unknown; NOTE: unreliably restored from __doc__ 
        """
        WriteSysEx(<timestamp>,<msg>)
                writes a timestamped system-exclusive midi message.
                <msg> can be a *list* or a *string*
                example:
                    (assuming y is an input MIDI stream)
                    y.WriteSysEx(0,'\xF0\x7D\x10\x11\x12\x13\xF7')
                                      is equivalent to
                    y.WriteSysEx(pypm.Time,
                    [0xF0, 0x7D, 0x10, 0x11, 0x12, 0x13, 0xF7])
        """
        pass

    def _check_open(self, *args, **kwargs): # real signature unknown
        """ checks to see if the midi is open, and if not, raises an error. """
        pass

    def __init__(self, MidiOutputDevice, latency): # real signature unknown; restored from __doc__
        pass

    @staticmethod # known case of __new__
    def __new__(S, *more): # real signature unknown; restored from __doc__
        """ T.__new__(S, ...) -> a new object with type S, a subtype of T """
        pass


