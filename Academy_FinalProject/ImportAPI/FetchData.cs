using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.ImportAPI {
    public class FetchData {

       

       

        public async Task<JObject> FetchScooterData(string baseUrl, string keyType, string keyName) {
            JObject dataJson = null;
            try {
                using (HttpClient client = new HttpClient()) {
                    client.DefaultRequestHeaders.Add(keyType, keyName);
                    using (HttpResponseMessage res = await client.GetAsync(baseUrl)) {
                        using (HttpContent content = res.Content) {
                            string data = await content.ReadAsStringAsync();
                            if (data != null) {
                                dataJson = JObject.Parse(data);
                                // TODO: Return data
                            }
                            else {
                                Console.WriteLine("No data found");
                            }
                        }
                    }
                }
                return dataJson;
            }
            catch (Exception exception) {
                Console.WriteLine(exception);
                return null;
            }
        }
    }
}
