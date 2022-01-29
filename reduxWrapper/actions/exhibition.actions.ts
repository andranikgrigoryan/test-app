import { createAsyncThunk } from '@reduxjs/toolkit';
import { PAGE_SIZE } from 'constants/exhibition';
import { ExhibitionApi } from 'shared/api/exhibition.api';
import { Exhibition } from 'shared/models/ExhbitionModel/exhibition.model';

export const getExhibitions = createAsyncThunk(
   'exhibition/getExhibitions',
   async (page: number, thunkAPI) => {
      const result = await ExhibitionApi.getExhibitions(page, PAGE_SIZE);
      const exhibitions = result.data.map((item: any) => Exhibition.createExhibition(item));
      const { pagination } = result;
      if (result.error) {
         throw new Error(result.errorInfo);
      }
      return { exhibitions, pagination };
   },
);

export const getExhibitionById = createAsyncThunk(
   'exhibition/getExhibitionById',
   async (id: number, thunkAPI) => {
      const result = await ExhibitionApi.getExhibitionById(id);
      const exhibition = Exhibition.createExhibition(result.data);
      if (result.error) {
         throw new Error(result.errorInfo);
      }
      return exhibition;
   },
);
