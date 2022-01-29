export interface ExhibitionInterface {
	id: number;
	title: string;
	description: string;
	shortDescription: string;
	status: string;
	startAt: string;
	endAt: string;
	img: string;
}

export class Exhibition implements ExhibitionInterface {
   constructor(
		public id: number = 0,
		public title: string = '',
		public description: string = '',
		public shortDescription: string = '',
		public status: string = '',
		public startAt: string = '',
		public endAt: string = '',
		public img: string = '',
   ) {}

   public static createExhibition(data: any) {
      return new Exhibition(
         data.id,
         data.title,
         data.description,
         data.short_description,
         data.status,
         data.aic_start_at,
         data.aic_end_at,
         data.image_url,
      );
   }
}
