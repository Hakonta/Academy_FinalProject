using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.FormatData
{
    public class FormattingData

    {
        string tierKeyType = "X-Api-Key";
        string tierKeyName = "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2";
        string tierUrl = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";

        FetchTierData fetchTierData = new FetchTierData();

        private Task<JObject> jsonObj;

        public FormattingData()
        {
            jsonObj = fetchTierData.FetchScooterData(tierUrl, tierKeyType, tierKeyName);
        }








    }
}
