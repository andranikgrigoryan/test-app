import { createSlice } from '@reduxjs/toolkit';
import { Exhibition } from 'shared/models/ExhbitionModel/exhibition.model';
import { ExhibitionState } from 'shared/models/ExhbitionModel/exhibitionState.model';
import { getExhibitions, getExhibitionById } from 'reduxWrapper/actions';

const initialState: ExhibitionState = {
   exhibitions: [],
   error: null,
   loading: false,
   selectedExhibition: new Exhibition(),
   totalItems: 20,
   currentPage: 1,
};

export const exhibitionSlice = createSlice({
   name: 'exhibition',
   initialState,
   reducers: {
      initSelectedExhibition: (state) => {
         state.selectedExhibition = new Exhibition();
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getExhibitions.pending, (state) => {
            state.loading = true;
         })
         .addCase(getExhibitions.fulfilled, (state, action) => {
            const { exhibitions, pagination } = action.payload;
            state.exhibitions = [...state.exhibitions, ...exhibitions];
            state.totalItems = pagination.total;
            state.currentPage = pagination.current_page;
            state.loading = false;
         })
         .addCase(getExhibitions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.selectedExhibition = new Exhibition();
         })
         .addCase(getExhibitionById.pending, (state) => {
            state.loading = true;
         })
         .addCase(getExhibitionById.fulfilled, (state, action) => {
            state.selectedExhibition = action.payload;
            state.loading = false;
         })
         .addCase(getExhibitionById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
         });
   },
});

export const { initSelectedExhibition } = exhibitionSlice.actions;

export default exhibitionSlice.reducer;
