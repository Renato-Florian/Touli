import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppHeader } from '../components/AppHeader';
import type { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { fonts, typography } from '../theme/typography';

type Props = {
  context: string;
  title: string;
  withBackButton?: boolean;
  children?: React.ReactNode;
};

// Pantalla PROVISIONAL: solo cabecera de Figma + aviso. Se reemplazará pantalla por pantalla.
export function PlaceholderScreen({ context, title, withBackButton = false, children }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <AppHeader
        context={context}
        title={title}
        unreadCount={withBackButton ? 0 : 3}
        onPressBell={withBackButton ? undefined : () => navigation.navigate('Notificaciones')}
        onBack={withBackButton ? () => navigation.goBack() : undefined}
      />
      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardText}>Pantalla en construcción. El diseño de Figma se implementará en la siguiente etapa.</Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background.page },
  body: { flex: 1, paddingHorizontal: 20, paddingTop: 16, gap: 16 },
  card: {
    backgroundColor: colors.surface.card,
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 18,
    padding: 18,
    gap: 8,
  },
  cardTitle: { ...typography.encabezado, color: colors.text.primary },
  cardText: { fontFamily: fonts.regular, fontSize: 12, lineHeight: 19, color: colors.text.secondary },
});
