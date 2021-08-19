import { StepDto } from './step.dto';
import { TagDto } from './tag.dto';
import { IngridientDto } from './ingredient.dto';

export interface RecipeDto {
    name: string;
    description: string;
    photo: string | null;
    persons: number | null;
    cookingTimeInMinutes: number | null;
    likes: number | null;
    saved: number | null;
    tags: Array<TagDto> | null;
    steps: Array<StepDto> | null;
    ingridients: Array<IngridientDto> | null;
}