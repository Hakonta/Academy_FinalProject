using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Academy_FinalProject.FormatData;
using Academy_FinalProject.ImportAPI;
using Academy_FinalProject.Models;
using Microsoft.AspNetCore;
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
            FormattingDataTier formattingTier = new FormattingDataTier();
            var fetchTierTask = tier.FetchTierDataMethod();
            var scooters = formattingTier.CreateTierScooters(fetchTierTask.Result);
            Assert.AreEqual("Tier", scooters[0].ProviderName);
        }
        [Test]
        public void TestProviderNameVoi()
        {
            FetchVoiData tier = new FetchVoiData();
            FormattingDataVoi formattingVoi = new FormattingDataVoi();
            var fetchVoiTask = tier.FetchVoiDataMethod();
            var scooters = formattingVoi.CreateVoiScooters(fetchVoiTask.Result);
            Assert.AreEqual("Voi", scooters[0].ProviderName);
        }

        [Test]
        public void TestingBysykkel()
        {
            FetchBysykler bysykler = new FetchBysykler();
            var something = bysykler;
            FormattingDataBysykkel formattingDataBysykkel = new FormattingDataBysykkel();
            var fetchBysykkelTask = bysykler.FetchStationInfoData();
            var bikes = formattingDataBysykkel.CreateBikesInfo(fetchBysykkelTask.Result, fetchBysykkelTask.Result);
            Assert.GreaterOrEqual(bikes[0].StationCapacity, 1);
        }

    }
}