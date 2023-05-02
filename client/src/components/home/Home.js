import React from "react";
import style from "./home.module.css";
import styleloading from "./loading.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getAllActivities } from "./../../actions/index";
import Card from "../card/Card";
import Paginated from "../paginated/Paginated";
import SearchCountry from "../searchCountry/SearchCountry";
import FilterByContinents from "../filterByContinents/FilterByContinents";
import CreateActivities from "../createActivity/CreateActivities";
import NavBar from "../navbar/NavBar";

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  let currentCountries;

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const [order, setOrder] = useState("");
  
  const indexLast = currentPage * countriesPerPage;
  const indexFirst = indexLast - countriesPerPage;
  currentCountries = countries && countries.slice(indexFirst, indexLast);

  const pagination = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder} />

      <div className={style.containerInferior}>
        <div className={style.containerInferiorSub1}>
          <SearchCountry setCurrentPage={setCurrentPage} />

          <FilterByContinents setCurrentPage={setCurrentPage} />

          <CreateActivities />
        </div>

        <div className={style.containerInferiorSub2}>
          <div className={style.containerPaginated}>
            <Paginated
              countriesPage={countriesPerPage}
              countries={countries && countries.length}
              pagination={pagination}
            />
          </div>

          <div
            className={
              currentCountries.length < 3 ? style.flexContainer : style.grid
            }
          >
            {currentCountries.length > 0 ? (
              currentCountries.map((el, i) => (
                <Card
                  key={i}
                  id={el.id}
                  image={el.image}
                  name={el.name}
                  continent={el.continent}
                />
              ))
            ) : (
              <div className={styleloading.containerLoading}>
                <div className={styleloading.ldsSpinner}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
