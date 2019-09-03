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
        //Inputparameters for Fetch method
        string tierKeyType = "X-Api-Key";
        string tierKeyName = "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2";
        string tierUrl = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";

        // GET: api/Scooter
        [HttpGet]
        public async Task<ActionResult<List<Scooter>>> Get() {
            //fetching data from Api's:

            FetchFlashData flash = new FetchFlashData();
            FormatingDataFlash formattingFlash = new FormatingDataFlash();
            List<Scooter> allFlashScooters = formattingFlash.CreateFlashScooters(flash.FetchFlashDataMethod());
            
            FetchVoiData voi = new FetchVoiData();
            FetchTierData tier = new FetchTierData();

            //Add all scooters to one list:

            

            //Fetching data from Tier API
            FetchTierData fetchTier = new FetchTierData();
            JObject rawData = await fetchTier.FetchScooterData(tierUrl, tierKeyType, tierKeyName);

            //Formating data and making a list of scooters with prefered propertiesC:\Users\jacob\Documents\GitHub\Hakonta\Academy_FinalProject\Academy_FinalProject\Controllers\ScooterController.cs
            FormattingData formattingData = new FormattingData();
            List<Scooter> scootersFromTier = formattingData.ExtractScooterInfoToList(rawData);

            

            // Fetching data from Voi API
            var fetchVoiData = new FetchVoiData();
            var voiScooters = fetchVoiData.FetchScooterDataFromVoi();

            // Formatting data and making a list of scooters from Voi and Tier
            FormattingData formattingDataVoi = new FormattingData();
            //  List<Scooter> scootersFromVoiAndTier = formattingData.ExtractScooterInfoToList(voiScooterData, scootersFromTier);
           
            return Ok();
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
