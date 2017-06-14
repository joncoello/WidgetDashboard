using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Absence.API.Models;

namespace Absence.API.Controllers
{
    [Produces("application/json")]
    [Route("api/holiday")]
    public class AbsenceController : Controller
    {
        [Route("")]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]HolidayRequest holidayRequest)
        {

            var parts = holidayRequest.DateRange.Split(new[] { " - " }, StringSplitOptions.RemoveEmptyEntries);

            var absence = new Models.Absence()
            {
                StartDate = DateTime.Parse(parts[0]),
                EndDate = DateTime.Parse(parts[1])
            };

            var absenceRepository = new Repositories.AbsenceRepository();
            await absenceRepository.Create(absence);

            return Ok();
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {

            var absenceRepository = new Repositories.AbsenceRepository();

            var model = await absenceRepository.List();

            var dates = model.SelectMany(a => Enumerable.Range(0, 1 + a.EndDate.Subtract(a.StartDate).Days)
                  .Select(offset => a.StartDate.AddDays(offset)).ToArray()).ToList();

            var distinct = dates.Distinct();

            var sorted = distinct.OrderBy(d => d).ToList();

            var sortedStr = sorted.Select(d => d.ToString("yyyy-MM-dd")).ToList();

            return Ok(sortedStr);

        }
    }
}