import { Api } from 'shared/api/api';

const baseUrl = 'https://api.artic.edu/api/v1/exhibitions';

export class ExhibitionApi extends Api {
   public static getExhibitions(page: number, limit: number) {
      return fetch(
         `${baseUrl}?limit=${limit}&page=${page}`,
         ExhibitionApi.createHeaders(),
      )
         .then(async (response) => await response.json())
         .catch(ExhibitionApi.handleError);
   }

   public static getExhibitionById(id: number) {
      return fetch(`${baseUrl}/${id}`, ExhibitionApi.createHeaders())
         .then(async (response) => await response.json())
         .catch(ExhibitionApi.handleError);
   }
}
