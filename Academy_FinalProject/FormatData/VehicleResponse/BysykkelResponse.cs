using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Academy_FinalProject.ImportAPI.BysykkelResponse
{
    public class BysykkelResponse
    {
        public BysykkelData Data { get; set; }
    }

    public class BysykkelData
    {
        public BysykkelStation[] Stations { get; set; }
    }

    public class BysykkelStation
    {
        [JsonProperty("station_id")]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public int Capacity { get; set; }
    }
}
