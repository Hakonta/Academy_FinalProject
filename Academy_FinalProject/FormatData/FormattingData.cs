﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using Newtonsoft.Json.Linq;

namespace Academy_FinalProject.FormatData
{
	public class FormattingData
	{



		public List<Scooter> ExtractScooterInfoToList(JObject rawScooterJsonData)
		{
			//Method takes a JObject (FetchScooterData() ) and return a C# list of scooters.
			List<Scooter> allScooters = new List<Scooter>();

			JToken data = rawScooterJsonData["data"];
			foreach (var scooter in data)
			{

				allScooters.Add(new Scooter
				{
					ProviderName = "Tier",
					Latitude = (double)scooter["lat"],
					Longitude = (double)scooter["lng"],
					BatteryCapacity = (int)scooter["batteryLevel"],
					IsAvailable = (bool)scooter["isRentable"]
				});
			}
			return allScooters;
		}

		public List<Scooter> ExtractScooterInfoToList(JArray rawScooterJsonData, List<Scooter> allScooters)
		{
			//Method takes a JObject (FetchScooterData() ) and return a C# list of scooters.

			//JToken data = rawScooterJsonData["data"];
			foreach (var scooter in rawScooterJsonData)
			{

				allScooters.Add(new Scooter
				{
					ProviderName = "Voi",
					BatteryCapacity = (int)scooter["battery"],
					Latitude = (double)scooter["location"].First,
					Longitude = (double)scooter["location"][1]
				});
			}
			return allScooters;

		}
		public List<Bysykkel> ExtractBysyklerInfoToList(BysykkelResponse rawBikeJsonData)
		{
			List<Bysykkel> allBikes = new List<Bysykkel>();

			foreach (var bike in rawBikeJsonData.Data.Stations)
			{

				allBikes.Add(new Bysykkel
				{
					StationName = bike.Name,
					Latitude = bike.Lat,
					Longitude = bike.Lon,
					StationCapacity = bike.Capacity,
					// TODO: Show bikes available?
				});
			}
			return allBikes;
		}
	}
}
