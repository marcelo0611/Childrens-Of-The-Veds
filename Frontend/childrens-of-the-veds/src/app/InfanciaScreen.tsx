import { router } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type CategoryKey = 'all' | '0-2' | '3-5' | '6-9';

type Step = {
  id: string;
  title: string;
  icon: string;
  body: string;
};

type Tutorial = {
  id: string;
  title: string;
  icon: string;
  duration: string;
  category: CategoryKey;
  steps: Step[];
};

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: '0-2', label: '0 a 2 anos (Bebês)' },
  { key: '3-5', label: '3 a 5 anos (Primeira Infância)' },
  { key: '6-9', label: '6 a 9 anos (Anos Escolares)' },
];

const MOCK_TUTORIALS: Tutorial[] = [
  {
    id: 't1',
    title: 'Rotina de Sono Saudável para Bebês',
    icon: '🌙🛏️',
    duration: '3 min',
    category: '0-2',
    steps: [
      { id: 's1', title: 'Passo 1', icon: '🕒', body: 'Estabeleça horários consistentes para dormir e cochilos.' },
      { id: 's2', title: 'Passo 2', icon: '🛁', body: 'Crie uma rotina calma: banho, massagem e cantinho acolhedor.' },
      { id: 'gold', title: 'Dica Ouro', icon: '⭐', body: 'Evite telas e ruídos fortes na hora de dormir.' },
    ],
  },
  {
    id: 't2',
    title: 'Alimentação Respeitosa e Introdução Alimentar',
    icon: '🍎🍽️',
    duration: '4 min',
    category: '0-2',
    steps: [
      { id: 's1', title: 'Passo 1', icon: '👩‍👧', body: 'Ofereça alimentos em texturas seguras e respeite sinais de fome.' },
      { id: 's2', title: 'Passo 2', icon: '🧑‍🍳', body: 'Introduza novos alimentos repetidamente sem pressão.' },
      { id: 'gold', title: 'Dica Ouro', icon: '🌿', body: 'Varie cores e formatos para tornar a refeição atrativa.' },
    ],
  },
  {
    id: 't3',
    title: 'Desenvolvimento Emocional: Como Lidar com Birras',
    icon: '❤️🛡️',
    duration: '5 min',
    category: '3-5',
    steps: [
      { id: 's1', title: 'Passo 1', icon: '👂', body: 'Mantenha a calma e ofereça presença emocional.' },
      { id: 's2', title: 'Passo 2', icon: '🗣️', body: 'Nomeie emoções: ajude a criança a reconhecer o sentimento.' },
      { id: 'gold', title: 'Dica Ouro', icon: '🤝', body: 'Combine limites com empatia — segurança com acolhimento.' },
    ],
  },
  {
    id: 't4',
    title: 'Incentivo à Leitura e Brincadeiras Lúdicas',
    icon: '📚🧸',
    duration: '3 min',
    category: '6-9',
    steps: [
      { id: 's1', title: 'Passo 1', icon: '📖', body: 'Leia em voz alta diariamente com entonação e interação.' },
      { id: 's2', title: 'Passo 2', icon: '🎨', body: 'Combine histórias com brincadeiras sensoriais e artísticas.' },
      { id: 'gold', title: 'Dica Ouro', icon: '🏆', body: 'Crie um cantinho da leitura com materiais acessíveis.' },
    ],
  },
];

export default function InfanciaScreen() {
  const [category, setCategory] = useState<CategoryKey>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = MOCK_TUTORIALS.filter((t) => category === 'all' || t.category === category);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            accessibilityLabel="Voltar ao Menu Inicial"
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.headerTitleWrap}>
            <Text style={styles.title}>Fase da Infância</Text>
            <Text style={styles.subtitle}>(0 a 9 anos)</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>Desenvolvimento Inicial</Text>
          </View>
        </View>

        <View style={styles.tabsWrap}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              onPress={() => setCategory(cat.key)}
              style={[
                styles.tabButton,
                category === cat.key && styles.tabButtonActive,
              ]}
            >
              <Text style={[styles.tabLabel, category === cat.key && styles.tabLabelActive]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {filtered.map((tut) => {
            const isOpen = expandedId === tut.id;
            return (
              <View key={tut.id} style={styles.cardWrap}>
                <TouchableOpacity
                  onPress={() => setExpandedId(isOpen ? null : tut.id)}
                  style={styles.card}
                  accessibilityRole="button"
                >
                  <View style={styles.cardRow}>
                    <View style={styles.iconWrap}>
                      <Text style={styles.iconText}>{tut.icon}</Text>
                    </View>

                    <View style={styles.cardMain}>
                      <Text style={styles.cardTitle}>{tut.title}</Text>
                      <Text style={styles.cardMeta}>{tut.duration}</Text>
                    </View>

                    <Text style={styles.chev}>{isOpen ? '▾' : '▸'}</Text>
                  </View>
                </TouchableOpacity>

                {isOpen ? (
                  <View style={styles.accordion}>
                    {tut.steps.map((s) => (
                      <View key={s.id} style={styles.stepRow}>
                        <View style={styles.stepIcon}>
                          <Text style={styles.stepIconText}>{s.icon}</Text>
                        </View>
                        <View style={styles.stepMain}>
                          <Text style={styles.stepTitle}>{s.title}</Text>
                          <Text style={styles.stepBody}>{s.body}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                ) : null}
              </View>
            );
          })}

          <TouchableOpacity
            style={styles.nextPhaseButton}
            onPress={() => router.push('/PreAdolescenciaScreen')}
          >
            <Text style={styles.nextPhaseText}>Próxima fase: Pré-Adolescência</Text>
          </TouchableOpacity>

          <View style={{ height: 28 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const PALETTE = {
  babyBlue: '#8ECAE6',
  paleBlue: '#E0F2FE',
  aqua: '#A8DADC',
  deepText: '#0F172A',
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: PALETTE.paleBlue },
  container: {
    flex: 1,
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    backgroundColor: PALETTE.paleBlue,
    gap: 8,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { fontSize: 20, color: PALETTE.deepText, fontWeight: '700' },
  headerTitleWrap: { flex: 1, marginLeft: 8 },
  title: { color: PALETTE.deepText, fontSize: 18, fontWeight: '800' },
  subtitle: { color: '#475569', fontSize: 12, marginTop: 2 },
  badge: {
    backgroundColor: PALETTE.babyBlue,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: { color: '#082B3A', fontSize: 11, fontWeight: '700' },
  tabsWrap: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    backgroundColor: PALETTE.paleBlue,
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  tabButtonActive: {
    backgroundColor: PALETTE.aqua,
  },
  tabLabel: { fontSize: 12, color: '#0F172A' },
  tabLabelActive: { fontWeight: '700' },
  scrollContent: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 24 },
  cardWrap: { marginBottom: 12 },
  card: {
    backgroundColor: '#F8FCFF',
    borderRadius: 14,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#DCF5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: { fontSize: 24 },
  cardMain: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#0F172A' },
  cardMeta: { marginTop: 4, fontSize: 11, color: '#64748B' },
  chev: { fontSize: 20, color: '#0F172A' },
  accordion: {
    marginTop: 8,
    backgroundColor: '#F7FBFF',
    borderRadius: 12,
    padding: 10,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  stepIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepIconText: { fontSize: 14 },
  stepMain: { flex: 1 },
  stepTitle: { fontSize: 12, fontWeight: '700', color: '#0F172A' },
  stepBody: { marginTop: 2, fontSize: 12, lineHeight: 18, color: '#334155' },
  nextPhaseButton: {
    marginTop: 12,
    backgroundColor: '#A8DADC',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextPhaseText: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '700',
  },
});
