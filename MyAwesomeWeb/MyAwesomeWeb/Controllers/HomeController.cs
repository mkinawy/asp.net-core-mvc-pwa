using System.Diagnostics;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using MyAwesomeWeb.Models;

namespace MyAwesomeWeb.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            Thread.Sleep(3000);

            return View();
        }

        public IActionResult About()
        {
            Thread.Sleep(3000);

            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            Thread.Sleep(3000);

            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
