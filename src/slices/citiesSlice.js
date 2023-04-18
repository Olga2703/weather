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
      `https://autocomplete.travelpayouts.com/places2?term=${city}&locale=ru&types[]=country&types[]=city`
    );
    const result = response.data.map((cityName) => {
      return { id: cityName.id, name: cityName.name };
    });
    return result;
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
      citiesAdapter.setAll(state, action.payload);
    });
  },
});

export const { actions } = citiesSlice;
export const selectors = citiesAdapter.getSelectors((state) => state.cities);
export default citiesSlice.reducer;
