using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreVueMpa.Web.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}