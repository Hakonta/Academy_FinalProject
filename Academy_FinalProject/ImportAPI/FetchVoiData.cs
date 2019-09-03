using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.ImportAPI
{
    public class FetchVoiData
    {
        public async Task<VoiResponse[]> FetchScooterDataFromVoi() {
            try {
                using (HttpClient client = new HttpClient()) {
                    using (HttpResponseMessage res = await client.GetAsync($"https://api.voiapp.io/v1/vehicle/status/ready?lat=59.911491&lng=10.757933")) {
                        using (HttpContent content = res.Content) {
                            string data = await content.ReadAsStringAsync();
                            var voiResponse = JsonConvert.DeserializeObject<VoiResponse[]>(data);
                            return voiResponse;
                        }
                    }
                }
            }
            catch (Exception exception) {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}

