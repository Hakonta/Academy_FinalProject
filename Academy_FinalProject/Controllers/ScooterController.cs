using System;
using System.Collections.Generic;
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
            //fetching data from Api's:
            //FLASH:
            FetchFlashData flash = new FetchFlashData();
            FormatingDataFlash formattingFlash = new FormatingDataFlash();
            var allFlashScooters = formattingFlash.CreateFlashScooters(await flash.FetchFlashDataMethod());
            //VOI:
            FetchVoiData voi = new FetchVoiData();
            FormattingDataVoi formattingVoi = new FormattingDataVoi();
            var allVoiScooters = formattingVoi.ExtractVoiScooterInfoToList(await voi.FetchScooterDataFromVoi());
            //TIER:
            FetchTierData tier = new FetchTierData();
            FormattingDataTier formattingTier = new FormattingDataTier();
            var allTierScooters = formattingTier.CreateTierScooters(await tier.FetchTierDataMethod());


            //Concating all lists to one list
            var allScooters = allFlashScooters.Concat(allTierScooters).Concat(allVoiScooters).ToList();
            
           
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
