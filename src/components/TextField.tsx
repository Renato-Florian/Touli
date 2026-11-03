import React from 'react';
import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/spacing';
import { fonts, typography } from '../theme/typography';

type Props = Pick<
  TextInputProps,
  | 'value'
  | 'onChangeText'
  | 'placeholder'
  | 'secureTextEntry'
  | 'keyboardType'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'returnKeyType'
  | 'onSubmitEditing'
> & {
  label: string;
  hint?: string; // texto pequeño a la derecha de la etiqueta
  leftIcon: React.ReactNode;
  rightAccessory?: React.ReactNode;
  backgroundColor?: string;
};

// Campo de formulario como el del login de Figma: etiqueta + entrada de 50 px.
export function TextField({
  label,
  hint,
  leftIcon,
  rightAccessory,
  backgroundColor = colors.surface.input,
  ...inputProps
}: Props) {
  return (
    <View style={styles.field}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {hint ? <Text style={styles.hint}>{hint}</Text> : null}
      </View>
      <View style={[styles.input, { backgroundColor }]}>
        {leftIcon}
        <TextInput
          {...inputProps}
          accessibilityLabel={label}
          placeholderTextColor={colors.text.secondary}
          style={styles.textInput}
        />
        {rightAccessory}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: { gap: 9 },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontFamily: fonts.semiBold, fontSize: 11, color: colors.text.primary },
  hint: { fontFamily: fonts.regular, fontSize: 9, color: colors.text.secondary },
  input: {
    height: 50,
    borderRadius: radius.r12,
    borderWidth: 1,
    borderColor: colors.border.default,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    flex: 1,
    ...typography.cuerpo,
    color: colors.text.primary,
    paddingVertical: 0,
  },
});
