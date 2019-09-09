using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void TestProviderNameTier()
        {
            FetchTierData tier = new FetchTierData();
            var test = tier;
            FormattingDataTier formattingTier = new FormattingDataTier();
            var fetchTierTask = tier.FetchTierDataMethod();
            var scooters = formattingTier.CreateTierScooters(fetchTierTask.Result);
            Assert.AreEqual("Tier", scooters[0].ProviderName);

        }
    }
}