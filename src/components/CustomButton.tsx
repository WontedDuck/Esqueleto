import { TouchableOpacity, Text } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  className?: string; 
  textClassName?: string;
  disabled?: boolean;
}

export function CustomButton({ title, onPress, className = '', textClassName = '', disabled = false }: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`bg-primary rounded-xl py-4 items-center justify-center ${disabled ? 'opacity-50' : 'opacity-100'} ${className}`}
    >
      <Text className={`text-textbutton text-base font-bold ${textClassName}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}