"use client";

import Banner from "./components/banner";
import ProfitableOffer from "./components/profitable-offer";
import TopCategories from "./components/top-categories";
import AvailableBlock from "./components/available-block";
import Partners from "./components/partners";
import StatisticsBlock from "./components/statistics-block";
import HeatingCalculation from "./components/heating-calculation";
import FamilyBlock from "./components/family-block";
import BestSellers from "./components/bestsellers";
import Stores from "./components/stores";

const Home = () => {
  return (
    <>
      <Banner />
      <TopCategories title="Թոփ կատեգորիաներ" />
      <ProfitableOffer />
      <Partners />
      <HeatingCalculation />
      <StatisticsBlock />
      <AvailableBlock />
      <FamilyBlock />
      <Stores />
      <BestSellers />
    </>
  );
};

export default Home;
