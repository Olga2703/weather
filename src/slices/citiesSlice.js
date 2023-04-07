import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "215d517a61f27aeb7e43b325b15e0887";

const citiesAdapter = createEntityAdapter();
const initialState = citiesAdapter.getInitialState();

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${API_KEY}`
    );
    return response;
  }
);

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: citiesAdapter.addOne,
    addCities: citiesAdapter.addMany,
  },
});

export const { actions } = citiesSlice;
export const selectors = citiesAdapter.getSelectors((state) => state.cities);
export default citiesSlice.reducer;
