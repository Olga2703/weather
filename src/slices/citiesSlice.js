import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import uniqid from "uniqid";

const API_KEY = "215d517a61f27aeb7e43b325b15e0887";

const citiesAdapter = createEntityAdapter();
const initialState = citiesAdapter.getInitialState();

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (city) => {
    if (city.trim().length === 0) {
      return [];
    }
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${API_KEY}`
    );
    return response.data;
  }
);

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: citiesAdapter.addOne,
    addCities: citiesAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      if (action.payload.length === 0) {
        citiesAdapte.
      }
      action.payload.forEach((city) => {
        const id = uniqid();
        state.entities[id] = {
          name: city.local_names.ru ?? city.name,
        };
        state.ids.push(id);
      });
    });
  },
});

export const { actions } = citiesSlice;
export const selectors = citiesAdapter.getSelectors((state) => state.cities);
export default citiesSlice.reducer;
