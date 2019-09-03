using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Academy_FinalProject.ImportAPI.VehicleResponse
{
    public class VoiResponse
    {
        [JsonProperty("Id")]
        public Guid ScooterId { get; set; }
        public double[] Location { get; set; }
        public int Battery { get; set; }
        public string Status { get; set; }
    }


}
