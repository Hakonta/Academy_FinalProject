using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.ImportAPI
{
    public class FetchVoiData
    {
        public async Task<JArray> FetchVoiScooter()
        {
            var url = "https://api.voiapp.io/v1/vehicle/status/ready?lat=59.329323&lng=18.068581";
            // TODO: latitude and longitude should be insertable parameters
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "GET";


            var webResponse = await request.GetResponseAsync();
            var webStream = webResponse.GetResponseStream();
            var responseReader = new StreamReader(webStream);
            var response = responseReader.ReadToEnd();
            // Console.WriteLine("Response: " + response);
            var dataJson = JArray.Parse(response);
            responseReader.Close();
            return dataJson;
        }
    }
}

