using Academy_FinalProject.FormatData;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Academy_FinalProject.ImportAPI {
    public class FetchFlashData {

        public async Task<FlashResponse> FetchFlashDataMethod() {
            var url = "https://api.goflash.com/api/Mobile/Scooters?userLatitude=59.8937806&userLongitude=10.6450349&lang=de&latitude=59.8937806&longitude=10.6450349&latitudeDelta=2.50&longitudeDelta=2.50";

            try {
                using (var httpClient = new HttpClient()) {
                    var response = await httpClient.GetAsync(url);
                    var content = await response.Content.ReadAsStringAsync();
                    var flashResponse = JsonConvert.DeserializeObject<FlashResponse>(content);

                    return flashResponse;
                }
            }
            catch(Exception exception) {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}

