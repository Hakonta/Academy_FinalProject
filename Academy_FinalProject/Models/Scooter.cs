using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academy_FinalProject.Models
{
    public class Scooter
    {
        public string ProviderName { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int BatteryCapacity { get; set; }
        public bool IsAvailable { get; set; }
        public bool IsVisible {get; set; } = true;

    }
}
