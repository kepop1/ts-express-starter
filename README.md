Thought Sprawl.

1. [x] Switch widget model over to use the object specified in the docs etc.
1. [x] We get the mongoose boiler plate in and setup
1. [x] Surface a simple GET on Widgets .find({})
1. [x] Surface a widget singular GET /widgets:widgetId
1. [x] Surface /widget PUT/POST/PATCH to edit/update the widget
1. [x] POST new /widget
1. [x] DELETE /widget:id
1. [x] Test at least one of the controls

If Authentication:

1. jsonwebtoken -> bcrypt etc.
1. apiKey -> Header
   1. Check that this apiKey exists.
   1. Protect routes / authentication apiKey
   1. Client send widgetId & apiKey
      1. apiKey enable access to this widgetId.
1. apiKey=DEVELPISTHEBEST

If Deployment:

1. How is this going to be deployed
   1. Serverless vs Server
      1. Lambda vs Kubenetes
      1. Any bubbling up through Kubenetes,

If Logging / Other

1. Sentry - enbale scoping through some form of middleware, ott for this?
1. Grafana / Logging platform of choice > utilities / service - DataDog
   1. npm logging package? DVELP?
1. Abstracted Logging Layer on the API
   1. Dispatch to various services

Testing Pyramid Gold Standard

1. Units Tests
1. Integrations Tests - Calling the highest level of the application
1. E2E Tests ^ Based on the solution
1. Manual Tests - someone checks it out.

> Branching Flow / GitFlow
> master = live / release branches

```
{
  widgetId;
  colors;
    brandColor1;
    brandColor2;
    brandColor1Text;
    brandColor2Text;
    headerColor;
    lightText;
    darkText;
    entryPointBackground;
  companyName;
  welcomeMessage;
}
```

Original Spec:
Webchat Widget Customisation Service
Our client has a customisable webchat widget, which takes certain parameters to decide how to display (what colour, chat welcome message to show etc).

> query parameters / body

They need a service that can be used to administer these values, and return them when requested given a specific widget ID.

> hey id=”123asd” - string / hash.

The service should be in the format of a REST API, utilising JSON format requests and responses. Your desired request/response format is up to you to design, as are the URLs of your endpoints.

> /widgets:id GET/POST, getWidgetById

When building your solution, remember I’m looking for how you think about building a production level system, and whatever you believe that entails (let’s leave good logging and error collection out of it though as they’re such big time-sinks).

> Future scope: Grafana/Loggly
> Missing information…

I may have left out key information in the below document! Clients are sometimes bad at getting what’s in their heads onto paper - so don’t be afraid to ask questions (no matter how “silly” you think they might be!).

Language / Frameworks etc
Whatever you feel is appropriate!
The Data
widgetId
Colors
brandColor1
brandColor2
brandColor1Text
brandColor2Text
headerColor
lightText
darkText
entryPointBackground
companyName
welcomeMessage

Assumption: ‘Hex values’ for the colours.
Testing
I will be using Postman initially to test your data, and I’m expecting to be able to perform the following actions:

New Widget POST
Edit Widget PUT / POST / PATCH
Delete Widget DELETE
Get Widget GET
Stretch Goals

If you manage to complete these requirements, there may be some additional ones that I spring on you! So make sure you’re thinking about the extensibility of your solution when building it (don’t want to have to refactor tonnes of code to add a new field).
Delivery
Using ngrok, make your service available so I can help you test and iron out any kinks (I can help you with ngrok if you haven’t used it before). At the end of the interview please make sure your repo is publicly available (with a readme if you think it’s needed), and let me know the link.
