# asp.net-core-mvc-pwa
An example of integrating PWA into a server-side rendering framework, in this case: ASP.NET Core MVC.

## Pretty standard vanilla ASP.NET Core MVC app, with minimum changes:
- `_Layout.cshtml` > to register the App Manifest and the Service Worker
- `HomeController.cs` > to add a 3 seconds delay per view
- `wwwroot` > contains the App Manifest, the app icons, and the Service Worker
