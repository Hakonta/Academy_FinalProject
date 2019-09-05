using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy_FinalProject.Models;
using Newtonsoft.Json;

namespace Academy_FinalProject.FormatData
{
	public class FormattingDataZvipp
	{
		public List<Scooter> CreateZvippScooters(ZvippResponse zvippResponse)
			{
				var listOfZvippScooters = new List<Scooter>();
				foreach (var scooter in zvippResponse.Data.En.Bikes) 
				{
					listOfZvippScooters.Add(
						new Scooter
						{
							ProviderName = "Zvipp",
							Latitude = scooter.Latitude,
							Longitude = scooter.Longitude,
							BatteryCapacity = scooter.Battery,
							IsAvailable = scooter.IsReserved
						});
				}
				return listOfZvippScooters;
			}

			public class ZvippResponse
			{
				public  ZvippData Data { get; set; }
		}

			public class ZvippData
			{
				public ZvippEn En { get; set; }
			}
			public class ZvippEn{

			[JsonProperty("bikes")]
			public Bikes[] Bikes { get; set; }
			}
		public class Bikes
			{
				public double Latitude { get; set; }
				public double Longitude { get; set; }
				public int Battery {get; set;}
				[JsonProperty("is_reserved")]
				public bool IsReserved { get; set; } //scootere som er i bruk
			}

	}
}



