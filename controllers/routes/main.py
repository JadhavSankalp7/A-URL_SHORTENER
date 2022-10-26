from atri import Atri
from fastapi import Request, Response
from atri_utils import *
import pyshorteners
import pyperclip


def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    d= "global"
    val = at.Input1.custom.value
    url= str(val)
    def shortener(url):
        s = pyshorteners.Shortener()
        d= s.tinyurl.short(url)


    modified_val = d
    if at.Button2.onClick:
        at.TextBox5.custom.text = modified_val 
    pass