import { StepDto } from './step.dto';
import { TagDto } from './tag.dto';
import { IngridientDto } from './ingredient.dto';

export interface RecipeDto {
    id?: number;
    name: string;
    description: string;
    photo?: string;
    persons?: number;
    cookingTimeInMinutes?: number;
    likes?: number;
    saved?: number;
    tags: Array<TagDto>;
    steps: Array<StepDto>;
    ingredients: Array<IngridientDto>;
}