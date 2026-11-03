import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Bell } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/spacing';
import { fonts } from '../theme/typography';

type Props = {
  context: string; // texto pequeño en mayúsculas, ej. "ESTUDIANTE TLS"
  title: string; // nombre de la pantalla
  unreadCount?: number; // número del globo naranja de la campana (0 = sin globo)
  onPressBell?: () => void;
  onBack?: () => void; // si se pasa, muestra la flecha "Volver" en lugar de la marca TLS
};

// Cabecera de Figma ("Cabecera", 66 px de alto): marca TLS, contexto + título y campana.
export function AppHeader({ context, title, unreadCount = 0, onPressBell, onBack }: Props) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <Pressable accessibilityRole="button" accessibilityLabel="Volver" onPress={onBack} hitSlop={10}>
          <ArrowLeft size={20} color={colors.text.primary} />
        </Pressable>
      ) : (
        <LinearGradient
          colors={[colors.mascot.purple, colors.brand.accent]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.brandMark}
        >
          <Text style={styles.brandText}>TLS</Text>
        </LinearGradient>
      )}

      <View style={styles.titles}>
        <Text style={styles.context}>{context}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notificaciones"
        disabled={!onPressBell}
        onPress={onPressBell}
        style={styles.bell}
      >
        <Bell size={18} color={colors.brand.primary} />
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount > 99 ? '99+' : unreadCount}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 66,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.background.page,
  },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: { fontFamily: fonts.extraBold, fontSize: 12, color: colors.text.inverse },
  titles: { flex: 1, gap: 3 },
  context: { fontFamily: fonts.semiBold, fontSize: 9, color: colors.text.secondary },
  title: { fontFamily: fonts.bold, fontSize: 17, color: colors.text.primary },
  bell: { width: 35, height: 38, alignItems: 'center', justifyContent: 'center' },
  badge: {
    position: 'absolute',
    top: 1,
    left: 17,
    width: 16,
    height: 16,
    borderRadius: radius.pill,
    backgroundColor: colors.brand.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { fontFamily: fonts.bold, fontSize: 8, color: colors.brand.accentInk },
});
