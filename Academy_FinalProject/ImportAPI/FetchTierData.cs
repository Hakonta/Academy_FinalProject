using Academy_FinalProject.FormatData;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace Academy_FinalProject.ImportAPI {
    public class FetchTierData {


        public async Task<TierResponse> FetchTierDataMethod() {

            var url = $"https://platform.tier-services.io/vehicle?zoneId=OSLO";
            var keyType = "X-Api-Key";
            var KeyName = "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2";
            try {
                using (var httpClient = new HttpClient()) {
                    httpClient.DefaultRequestHeaders.Add(keyType, KeyName);
                    var response = await httpClient.GetAsync(url);
                    var content = await response.Content.ReadAsStringAsync();
                    var tierResponse = JsonConvert.DeserializeObject<TierResponse>(content);
                    return tierResponse;
                }
            }
            catch (Exception exception) {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}
