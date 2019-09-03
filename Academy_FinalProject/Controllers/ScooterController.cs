using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using System.Xml;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Manage.Internal;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ScooterController : ControllerBase {

        // GET: api/Scooter
        [HttpGet]
        public async Task<ActionResult<List<Scooter>>> Get() {
            //----------      fetching data from Api's:       -----------//
            //FLASH:
            FetchFlashData flash = new FetchFlashData();
            FormatingDataFlash formattingFlash = new FormatingDataFlash();
            var fetchFlashTask = flash.FetchFlashDataMethod();
            
            //VOI:
            FetchVoiData voi = new FetchVoiData();
            FormattingDataVoi formattingVoi = new FormattingDataVoi();
            var fetchVoiTask = voi.FetchVoiDataMethod();

            //TIER:
            FetchTierData tier = new FetchTierData();
            FormattingDataTier formattingTier = new FormattingDataTier();
            var fetchTierTask = tier.FetchTierDataMethod();

            //Running paralell fetch
            var allFlashScooters = formattingFlash.CreateFlashScooters(await fetchFlashTask);
            var allVoiScooters = formattingVoi.CreateVoiScooters(await fetchVoiTask);
            var allTierScooters = formattingTier.CreateTierScooters(await fetchTierTask);

            //Concating all lists to one list
            var allScooters = allFlashScooters.Concat(allTierScooters).Concat(allVoiScooters).ToList();

            //Returning list with all scooters
            return Ok(allScooters);
        }

        // GET: api/Scooter/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id) {
            return "value";
        }

        // POST: api/Scooter
        [HttpPost]
        public void Post([FromBody] string value) {
        }

        // PUT: api/Scooter/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }
}
