import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { BehaviorSubject, of, merge, Observable, EMPTY } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  switchMap,
  catchError,
  tap,
  concatMap,
} from "rxjs/operators";

import { ApiService } from "../../services/apiService";
import { messageService } from "../../utils/subjects";
import { responseData, SearchWeather } from "../../utils/types";
import DisplayWeather from "../displayWeather/DisplayWeather";
import Loading from "../Loading/Loading";

const StyledError = styled.div`
  border: 2px solid #ef5c77;
  color: red;
  background-color: #f9dfe0;
  padding: 10px;
border-radius: 3px;
  max-width: 360px;

  margin: 5px auto;
  display: block;
`;

interface SearchCity {
  name: string;
  lat: number;
  lon: number;
}

const FetchApi = () => {
  const [searchCity, setSearchCity] = useState<SearchCity>();
  const [searchWeather, setSearchWeather] = useState<responseData>();

  useEffect(() => {
    const observable = messageService
      .getMessage()
      .pipe(
        map((s) => s.trim()),
        distinctUntilChanged(),
        filter((s) => s.length >= 2),
        debounceTime(500),
        tap(
          (s) => setSearchWeather({loading: true, data:[], error: ''})
        ),
        concatMap((city) =>
          ApiService.get(`/geo/1.0/direct?q=${city}&limit=5`).pipe(
            map((s) => ({name: s[0].name, lat: s[0].lat, lon: s[0].lon})),
            tap((s) => setSearchCity(s)),
            concatMap((resp) =>
              ApiService.get(
                `/data/2.5/forecast?lat=${resp.lat}&lon=${resp.lon}&cnt=40&units=metric`
              ).pipe(
                map((data) =>
                  Object.assign({
                    loading: false,
                    data: data.list,
                    error: "",
                  })
                )
              )
            ),
            catchError((e) =>
              of({
                loading: false,
                data: [],
                error: "No Data Available!",
              })
            )
          )
        )

      )
      .subscribe({
        next: (data) => {
          setSearchWeather({...data});
        },
        error: (a) => console.log(a),
      });

    return () => {
      observable.unsubscribe();
    };
  }, []);

  return (
    <>
      {
        searchWeather?.error ? <StyledError>{searchWeather?.error}</StyledError> :
          searchWeather?.loading ? <Loading /> :
          <DisplayWeather city={searchCity?.name} loading={searchWeather?.loading} searchedWeatherData={searchWeather?.data} error={searchWeather?.error}/>

      }
    </>
  );
};

export default FetchApi;
