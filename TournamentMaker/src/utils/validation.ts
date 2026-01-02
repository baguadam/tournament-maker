import * as yup from "yup";
import { TeamFormValues } from "../types";

export const teamsSchema: yup.ObjectSchema<TeamFormValues> = yup.object({
  teamName: yup
    .string()
    .min(3, "Túl rövid csapatnév! (min. 3 karakter)!")
    .required("Csapatnév megadása kötelező!")
    .defined(),
  players: yup
    .array()
    .of(
      yup.object({
        name: yup
          .string()
          .min(3, "Túl rövid játékosnév! (min. 3 karakter)!")
          .required("Játékosnév megadása kötelező!"),
      })
    )
    .min(4, "Legalább 4 játékost adj meg!")
    .defined(),
});
