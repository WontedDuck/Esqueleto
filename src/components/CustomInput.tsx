import { View, Text, TextInput, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  label: string;
}

export function CustomInput({ label, ...props }: CustomInputProps) {
  return (
    <View className="mb-4 w-full">
      <Text className="text-text text-sm font-semibold mb-2">
        {label}
      </Text>
      <TextInput
        className="bg-surface border border-muted rounded-xl px-4 py-4 text-base text-textinput placeholder:text-muted"
        {...props}
      />
    </View>
  );
}