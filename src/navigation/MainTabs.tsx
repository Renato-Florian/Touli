import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Calendar, CircleUser, GraduationCap, House } from 'lucide-react-native';
import { TabIconPill } from '../components/TabIconPill';
import AgendaScreen from '../screens/AgendaScreen';
import CursosScreen from '../screens/CursosScreen';
import InicioScreen from '../screens/InicioScreen';
import PerfilScreen from '../screens/PerfilScreen';
import TouliScreen from '../screens/TouliScreen';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const ICON_SIZE = 18;

function TabLabel({ focused, children }: { focused: boolean; children: string }) {
  // TODO(Figma): confirmar el color exacto de la etiqueta activa.
  return (
    <Text style={[focused ? typography.navegacion : typography.navegacionBase, styles.label, focused && styles.labelActive]}>
      {children}
    </Text>
  );
}

// Barra inferior "Navegación móvil" de Figma: Inicio · Cursos · Touli · Agenda · Perfil.
export default function MainTabs() {
  const insets = useSafeAreaInsets();
  const iconColor = (focused: boolean) => (focused ? colors.brand.primary : colors.text.secondary);

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface.card,
          borderTopWidth: 1,
          borderTopColor: colors.border.default,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
          paddingBottom: 9 + insets.bottom,
          height: 65 + insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused}>Inicio</TabLabel>,
          tabBarIcon: ({ focused }) => (
            <TabIconPill focused={focused}>
              <House size={ICON_SIZE} color={iconColor(focused)} />
            </TabIconPill>
          ),
        }}
      />
      <Tab.Screen
        name="Cursos"
        component={CursosScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused}>Cursos</TabLabel>,
          tabBarIcon: ({ focused }) => (
            <TabIconPill focused={focused}>
              <GraduationCap size={ICON_SIZE} color={iconColor(focused)} />
            </TabIconPill>
          ),
        }}
      />
      <Tab.Screen
        name="Touli"
        component={TouliScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused}>Touli</TabLabel>,
          tabBarIcon: ({ focused }) => (
            <TabIconPill focused={focused}>
              <Image
                source={require('../../assets/images/touli-simbolo.png')}
                style={styles.touliSymbol}
                resizeMode="contain"
              />
            </TabIconPill>
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused}>Agenda</TabLabel>,
          tabBarIcon: ({ focused }) => (
            <TabIconPill focused={focused}>
              <Calendar size={ICON_SIZE} color={iconColor(focused)} />
            </TabIconPill>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabLabel focused={focused}>Perfil</TabLabel>,
          tabBarIcon: ({ focused }) => (
            <TabIconPill focused={focused}>
              <CircleUser size={ICON_SIZE} color={iconColor(focused)} />
            </TabIconPill>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: { color: colors.text.secondary, marginTop: 5 },
  labelActive: { color: colors.text.primary },
  touliSymbol: { width: 18, height: 18 },
});
