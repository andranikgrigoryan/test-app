import { ExhibitionInterface } from 'shared/models/ExhbitionModel/exhibition.model';

export interface ExhibitionState {
	exhibitions: ExhibitionInterface[];
	error: any;
	loading: boolean;
	selectedExhibition: ExhibitionInterface;
	totalItems: number;
	currentPage: number;
}
