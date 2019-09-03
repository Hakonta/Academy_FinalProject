using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academy_FinalProject.Models
{
    public class Bysykkel
    {
        public string StationName { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int StationCapacity { get; set; }
        public int BikesAvailable { get; set; }

    }
}
