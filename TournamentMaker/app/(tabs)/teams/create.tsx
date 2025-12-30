import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFieldArray,
} from "react-hook-form";
import { TeamFormValues } from "@/src/types";

const Create = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamFormValues>({
    defaultValues: {
      teamName: "",
      players: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "players",
  });

  const onSubmit: SubmitHandler<TeamFormValues> = (data) => console.log(data);

  const shouldRemove = fields.length > 4;

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.text}>Csapat neve</Text>
        <Controller
          control={control}
          name="teamName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
        {errors.teamName && (
          <Text style={styles.errorText}>{errors.teamName.message}</Text>
        )}
      </View>

      <View style={styles.row}>
        <Text style={[styles.text, { flex: 1 }]}>Játékos nevek</Text>
        <Pressable
          style={styles.iconButton}
          onPress={() => append({ name: "" })}
        >
          <Text style={styles.iconButtonText}>+</Text>
        </Pressable>
      </View>

      {fields.map((field, index) => (
        <View key={field.id} style={styles.row}>
          <Controller
            control={control}
            name={`players.${index}.name`}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                style={styles.input}
                placeholder={`Játékos ${index + 1}`}
              />
            )}
          />

          {shouldRemove && (
            <Pressable style={styles.iconButton} onPress={() => remove(index)}>
              <Text style={styles.iconButtonText}>-</Text>
            </Pressable>
          )}
        </View>
      ))}
      <View style={styles.buttonContaier}>
        <Button
          title="Hozzáad"
          onPress={handleSubmit(onSubmit)}
          color="green"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  block: {
    marginBottom: 25,
    gap: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    gap: 10,
    minHeight: 44,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    minHeight: 44,
    fontSize: 16,
    textAlignVertical: "center",
    borderRadius: 8,
  },

  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: "green",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  iconButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },

  errorText: {
    color: "red",
  },

  buttonContaier: {
    marginTop: 12,
  },
});

export default Create;
