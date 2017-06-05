using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WidgetDashboard.WebHost.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {

            var widgetRepository = new WidgetDashboard.MefRepositories.WidgetRepository();
            var widgetModel = widgetRepository.GetWidgets();

            return View();
        }
    }
}