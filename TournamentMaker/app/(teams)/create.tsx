import { Text, TextInput, View, Button } from "react-native";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFieldArray,
} from "react-hook-form";

interface FormValues {
  teamName: string;
  players: { name: string }[];
}

const Create = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      teamName: "",
      players: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "players",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <View>
      <Text>Csapat neve</Text>
      <Controller
        control={control}
        name="teamName"
        render={({ field: { onChange, value } }) => (
          <TextInput onChangeText={onChange} value={value} />
        )}
      />
      {errors.teamName && (
        <Text style={{ color: "red" }}>{errors.teamName.message}</Text>
      )}

      <View>
        <Text>Játékos nevek</Text>
        <Button title="+" onPress={() => append({ name: "" })} />
      </View>

      {fields.map((field, index) => (
        <View key={field.id}>
          <Controller
            control={control}
            name={`players.${index}.name`}
            render={({ field: { onChange, value } }) => (
              <TextInput onChangeText={onChange} value={value} />
            )}
          />

          {fields.length > 4 && (
            <Button title="-" onPress={() => remove(index)} />
          )}
        </View>
      ))}

      <Button title="Hozzáad" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Create;
