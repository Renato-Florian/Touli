import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Building2, Check, CircleHelp, Contact, Eye, EyeOff, Headset, Lock } from 'lucide-react-native';
import { ActionButton } from '../components/ActionButton';
import { TextField } from '../components/TextField';
import { useAuth } from '../context/AuthContext';
import { DEMO_USER } from '../data/demoUser';
import { colors } from '../theme/colors';
import { radius } from '../theme/spacing';
import { fonts, typography } from '../theme/typography';

// Pantalla "Inicio de sesión" de Figma (nodo 100:3618). Login de DEMOSTRACIÓN.
export default function LoginScreen() {
  const { signIn } = useAuth();
  const [code, setCode] = useState<string>(DEMO_USER.email);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberSession, setRememberSession] = useState(true); // solo visual en esta etapa
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const result = signIn(code, password);
    if (!result.ok) setError(result.error);
    // Si es correcto, AuthContext guarda el usuario y el navegador cambia solo a "Main".
  };

  const notAvailable = (what: string) =>
    Alert.alert('No disponible en la demostración', `${what} se implementará en una etapa posterior.`);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Barra superior: TLS CAMPUS · ES · ayuda */}
          <View style={styles.topBar}>
            <Text style={styles.campus}>TLS CAMPUS</Text>
            <View style={styles.topBarRight}>
              <View style={styles.pill}>
                <Text style={styles.pillText}>ES</Text>
              </View>
              <CircleHelp size={17} color={colors.brand.primary} />
            </View>
          </View>

          {/* Presentación de Touli */}
          <View style={styles.presentation}>
            <View style={styles.mascotBox}>
              <Image
                source={require('../../assets/images/touli-completo.png')}
                style={styles.mascot}
                resizeMode="contain"
                accessibilityLabel="Touli, el compañero virtual"
              />
            </View>
            <View style={styles.identity}>
              <Text style={[typography.marca, { color: colors.text.primary }]}>Touli</Text>
              <View style={styles.pill}>
                <Text style={styles.pillText}>Acompañamiento Académico</Text>
              </View>
              <Text style={styles.promise}>
                Tu compañero virtual de bienestar y rendimiento Toulouse Lautrec
              </Text>
            </View>
          </View>

          {/* Tarjeta de acceso */}
          <View style={styles.accessArea}>
            <View style={styles.card}>
              <TextField
                label="Código o correo institucional"
                hint="@tls.edu.pe"
                value={code}
                onChangeText={(t) => {
                  setCode(t);
                  setError(null);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                leftIcon={<Contact size={16} color={colors.brand.primary} />}
              />
              <TextField
                label="Contraseña"
                hint="Sensible a mayúsculas"
                value={password}
                onChangeText={(t) => {
                  setPassword(t);
                  setError(null);
                }}
                placeholder="••••••••"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="go"
                onSubmitEditing={handleSubmit}
                backgroundColor={colors.background.page}
                leftIcon={<Lock size={16} color={colors.brand.primary} />}
                rightAccessory={
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    onPress={() => setShowPassword((v) => !v)}
                    hitSlop={10}
                  >
                    {showPassword ? (
                      <EyeOff size={18} color={colors.text.secondary} />
                    ) : (
                      <Eye size={18} color={colors.text.secondary} />
                    )}
                  </Pressable>
                }
              />

              <View style={styles.preferences}>
                <Pressable
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: rememberSession }}
                  onPress={() => setRememberSession((v) => !v)}
                  style={styles.remember}
                >
                  <View style={[styles.checkbox, rememberSession && styles.checkboxOn]}>
                    {rememberSession && <Check size={10} color={colors.text.inverse} strokeWidth={3} />}
                  </View>
                  <Text style={styles.rememberText}>Recordar sesión</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => notAvailable('La recuperación de contraseña')}
                >
                  <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
                </Pressable>
              </View>

              {error ? (
                <Text accessibilityRole="alert" style={styles.error}>
                  {error}
                </Text>
              ) : null}

              <ActionButton label="Ingresar a Touli" onPress={handleSubmit} />

              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>O CONTINÚA CON</Text>
                <View style={styles.dividerLine} />
              </View>

              <Pressable
                accessibilityRole="button"
                onPress={() => notAvailable('El acceso institucional (SSO)')}
                style={styles.sso}
              >
                <Building2 size={17} color={colors.brand.primary} />
                <Text style={styles.ssoText}>Acceso Institucional Toulouse (SSO)</Text>
              </Pressable>
            </View>

            {/* Ayuda para ingresar */}
            <View style={styles.help}>
              <Headset size={22} color={colors.brand.primary} />
              <View style={styles.helpTexts}>
                <Text style={styles.helpTitle}>¿Necesitas ayuda para ingresar?</Text>
                <Text style={styles.helpBody}>
                  Contacta a la Mesa de Ayuda Estudiantil o acércate al módulo virtual de bienestar.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background.page },
  flex: { flex: 1 },
  scroll: { flexGrow: 1 },

  topBar: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  campus: { fontFamily: fonts.bold, fontSize: 11, color: colors.text.primary },
  topBarRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  pill: {
    backgroundColor: colors.background.page,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: radius.pill,
  },
  pillText: { ...typography.etiqueta, color: colors.text.primary },

  presentation: {
    alignItems: 'center',
    gap: 15,
    paddingTop: 16,
    paddingBottom: 28,
    paddingHorizontal: 24,
  },
  mascotBox: { width: 142, height: 142, alignItems: 'center', justifyContent: 'center' },
  mascot: { width: 116, height: 116 },
  identity: { alignItems: 'center', gap: 9, width: '100%' },
  promise: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 21, // 160%
    color: colors.text.secondary,
    textAlign: 'center',
    width: 285,
  },

  accessArea: { paddingHorizontal: 20, paddingBottom: 28, gap: 20 },
  card: {
    backgroundColor: colors.surface.card,
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 18,
    padding: 18,
    gap: 12,
    shadowColor: '#161616',
    shadowOpacity: 0.02,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 3 },
  },

  preferences: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  remember: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.border.default,
    backgroundColor: colors.surface.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxOn: { backgroundColor: colors.brand.primary, borderColor: colors.brand.primary },
  rememberText: { fontFamily: fonts.regular, fontSize: 10, color: colors.text.secondary },
  forgot: { fontFamily: fonts.semiBold, fontSize: 10, color: colors.brand.primary },

  // Estado de error: NO existe en el diseño de Figma todavía (provisional).
  error: { ...typography.ayuda, color: colors.error.foreground },

  divider: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  dividerLine: { flex: 1, height: 1, backgroundColor: colors.background.page },
  dividerText: { fontFamily: fonts.regular, fontSize: 9, color: colors.text.secondary },

  sso: {
    minHeight: 49,
    borderRadius: radius.r12,
    backgroundColor: colors.background.page,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  ssoText: { flex: 1, fontFamily: fonts.semiBold, fontSize: 11, lineHeight: 15, color: colors.text.primary },

  help: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 15,
    borderRadius: radius.r16,
    backgroundColor: colors.background.page,
  },
  helpTexts: { flex: 1, gap: 6 },
  helpTitle: { fontFamily: fonts.regular, fontSize: 12, color: colors.text.primary },
  helpBody: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 17.6, color: colors.text.secondary },
});
