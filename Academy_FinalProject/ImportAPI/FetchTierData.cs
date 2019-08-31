using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academy_FinalProject.ImportAPI {
    public class FetchTierData : FetchData {
        string tierUrl = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";
        string tierKeyType = "X-Api-Key";
        string tierKeyName = "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2";

    }
}
