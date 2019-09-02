using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScooterController : ControllerBase
    {
        //Inputparameters for Fetch method
        string tierKeyType = "X-Api-Key";
        string tierKeyName = "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2";
        string tierUrl = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";

        // GET: api/Scooter
        [HttpGet]
        public List<Scooter> Get()
        {
           
            //Fetching data from Tier API
            FetchTierData fetchTier = new FetchTierData();
            JObject rawData = fetchTier.FetchScooterData(tierUrl, tierKeyType, tierKeyName).Result;

            //Formating data and making a list of scooters with prefered properties
            FormattingData formattingData = new FormattingData();
            List<Scooter> scooters = formattingData.ExtractScooterInfoToList(rawData);

            return scooters;
        }

        // GET: api/Scooter/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Scooter
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Scooter/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
