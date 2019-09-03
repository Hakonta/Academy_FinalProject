using Academy_FinalProject.FormatData;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Academy_FinalProject.ImportAPI {
    public class FetchTierData : FetchData {

        public async Task<TierResponse> FetchTierDataMethod() {
            var url = "https://api.goflash.com/api/Mobile/Scooters?userLatitude=59.8937806&userLongitude=10.6450349&lang=de&latitude=59.8937806&longitude=10.6450349&latitudeDelta=2.50&longitudeDelta=2.50";


            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);
            var content = await response.Content.ReadAsStringAsync();
            var tierResponse = JsonConvert.DeserializeObject<TierResponse>(content);

            return tierResponse;
        }


    }
}
