"""
Module with the routing configuration to handle both
HTTP requests for the WSGI and web socket connections
to the ASGI server.

By using this config, channels will add its ASGI layer
and integrate perfectly with django without messing up
any HTTP requests handling that used to work.

HTTP requests are passed to the WSGI server;
Non-HTTP (Web sockets) are passed to the ASGI server.

ProtocolTypeRouter inspects the protocol of the request:

For a websocket request: "ws:// or wss://" --> forwards the request
to the AuthMiddlewareStack which populates the conn scope
with an authenticated user, just like AuthenticationMiddleware
populates the REQUEST object of view function with the auth user
for an HTTP request.

Here, ProtocolTypeRouter is configured to handle websocket
connections in order to pass them to consumers rather than
view functions for HTTP requests.
"""
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

from backbits.routing import websocket_urlpatterns

# http-protocol-based requests are routed to django view functions by default
application = ProtocolTypeRouter(
    {
        # ws://  or wss:// websocket connections are passed to the URL router with
        # finds the appropriate consumer
        "websocket": AuthMiddlewareStack(URLRouter(websocket_urlpatterns))
    }
)
