import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type BoxProps = {
  title: string;
  description?: string;
};

export function Box({ title, description }: BoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  description: {
    fontSize: 14,
    color: theme.colors.secondary,
    marginTop: theme.spacing.xs,
  },
}));
