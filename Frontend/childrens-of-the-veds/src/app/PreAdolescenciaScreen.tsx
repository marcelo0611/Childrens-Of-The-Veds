import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Guide = {
  id: string;
  title: string;
  icon: string;
  accent: string;
  summary: string;
  steps: { label: string; detail: string }[];
};

const GUIDES: Guide[] = [
  {
    id: 'puberdade',
    title: 'Entendendo as Mudanças Corporais e Hormonais',
    icon: '🌱',
    accent: '#A8DADC',
    summary: 'Ajudar seu filho a compreender a puberdade sem vergonha, medo ou comparação.',
    steps: [
      { label: 'O que dizer', detail: 'Explique que o corpo está passando por mudanças naturais e que tudo isso faz parte do crescimento.' },
      { label: 'O que evitar', detail: 'Evite comentários que comparem sua aparência, corpo ou desenvolvimento com o de outras pessoas.' },
      { label: 'Ação prática', detail: 'Converse em um momento tranquilo e encoraje perguntas sobre sono, humor, acne e mudanças físicas.' },
    ],
  },
  {
    id: 'telas',
    title: 'Uso Saudável de Telas e Redes Sociais',
    icon: '📱',
    accent: '#D8F3DC',
    summary: 'Estabelecer limites bons sem transformar a tecnologia em fonte de culpa ou conflito.',
    steps: [
      { label: 'O que dizer', detail: 'Fale sobre o uso consciente da tela, o cuidado com o conteúdo e a importância do descanso.' },
      { label: 'O que evitar', detail: 'Não use ameaças ou punições agressivas; isso costuma abrir resistência e esconder o problema.' },
      { label: 'Ação prática', detail: 'Defina horários, acompanhe plataformas que ele usa e converse sobre segurança e comportamento online.' },
    ],
  },
  {
    id: 'escola',
    title: 'Apoio Escolar sem Sufocar: Criando Hábitos de Estudo',
    icon: '📚',
    accent: '#CFE9D9',
    summary: 'Dar autonomia ao filho sem perder o papel de guia e apoio emocional.',
    steps: [
      { label: 'O que dizer', detail: 'Mostre que você acredita na capacidade dele e que a rotina de estudo é um hábito de cuidado, não uma cobrança.' },
      { label: 'O que evitar', detail: 'Evite comparar notas, reforçar culpa por dificuldades ou controlar cada detalhe do estudo.' },
      { label: 'Ação prática', detail: 'Ajude a montar uma rotina simples com horários, local de estudo e pequenas metas reais.' },
    ],
  },
  {
    id: 'comunicacao',
    title: 'Comunicação Eficiente: Como Evitar Conflitos Diários',
    icon: '💬',
    accent: '#BFE7D5',
    summary: 'Fortalecer o diálogo para reduzir atritos e melhorar a relação com a família.',
    steps: [
      { label: 'O que dizer', detail: 'Use frases curtas, claras e acolhedoras: “Quero entender como você está se sentindo” e “Vamos resolver juntos”.' },
      { label: 'O que evitar', detail: 'Evite discursos longos, acusações, ou responder com irritação quando ele estiver cansado ou defensivo.' },
      { label: 'Ação prática', detail: 'Escolha momentos calmos para conversar e proponha soluções em conjunto, em vez de impor regras no calor do momento.' },
    ],
  },
];

export default function PreAdolescenciaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.deviceFrame}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            accessibilityLabel="Voltar ao Menu Inicial"
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.headerText}>
            <Text style={styles.title}>Pré-Adolescência</Text>
            <Text style={styles.ageText}>(10 a 13 anos)</Text>
            <Text style={styles.subtitle}>Transição, autonomia e novas descobertas</Text>
          </View>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.alertCard}>
            <Text style={styles.alertBadge}>Aviso Importante</Text>
            <Text style={styles.alertText}>
              Nessa fase, o acolhimento sem julgamento fortalece a confiança. Escutar antes
              de corrigir ajuda seu filho a se abrir com honestidade e segurança.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Tutoriais e Guia Prático</Text>

          {GUIDES.map((guide) => (
            <View key={guide.id} style={styles.guideCard}>
              <View style={styles.guideHeader}>
                <View style={[styles.iconWrap, { backgroundColor: guide.accent }]}>
                  <Text style={styles.iconText}>{guide.icon}</Text>
                </View>

                <View style={styles.guideHeadText}>
                  <Text style={styles.guideTitle}>{guide.title}</Text>
                  <Text style={styles.guideSummary}>{guide.summary}</Text>
                </View>
              </View>

              <View style={styles.stepsCard}>
                <Text style={styles.stepsTitle}>Passo a Passo para Conversar com seu Filho</Text>
                {guide.steps.map((step) => (
                  <View key={`${guide.id}-${step.label}`} style={styles.stepRow}>
                    <Text style={styles.stepLabel}>{step.label}</Text>
                    <Text style={styles.stepDetail}>{step.detail}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => router.push('/InfanciaScreen')}
          >
            <Text style={styles.footerButtonText}>Voltar para a Infância</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const palette = {
  bg: '#F5FBF7',
  softGreen: '#D8F3DC',
  aqua: '#A8DADC',
  mint: '#CDEEDD',
  text: '#12342F',
  muted: '#4D6B63',
  white: '#FFFFFF',
  accent: '#126B5C',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DFF3E7',
  },
  deviceFrame: {
    flex: 1,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: palette.bg,
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(18, 59, 47, 0.08)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: palette.softGreen,
    gap: 12,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  backIcon: {
    fontSize: 26,
    color: palette.text,
    fontWeight: '700',
    lineHeight: 26,
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: palette.text,
    fontSize: 24,
    fontWeight: '800',
  },
  ageText: {
    color: palette.muted,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  subtitle: {
    color: palette.text,
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 28,
  },
  alertCard: {
    backgroundColor: '#E5F7EC',
    borderRadius: 18,
    padding: 16,
    borderLeftWidth: 5,
    borderLeftColor: palette.accent,
    marginBottom: 20,
  },
  alertBadge: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  alertText: {
    color: palette.text,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },
  sectionTitle: {
    color: palette.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },
  guideCard: {
    backgroundColor: palette.white,
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(18, 59, 47, 0.05)',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  guideHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 26,
  },
  guideHeadText: {
    flex: 1,
  },
  guideTitle: {
    color: palette.text,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    marginBottom: 4,
  },
  guideSummary: {
    color: palette.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  stepsCard: {
    backgroundColor: '#F4FBF5',
    borderRadius: 14,
    padding: 12,
  },
  stepsTitle: {
    color: palette.text,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 10,
  },
  stepRow: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(18, 59, 47, 0.06)',
  },
  stepLabel: {
    color: palette.accent,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    marginBottom: 4,
  },
  stepDetail: {
    color: palette.text,
    fontSize: 13,
    lineHeight: 19,
  },
  footerButton: {
    backgroundColor: palette.aqua,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  footerButtonText: {
    color: palette.text,
    fontSize: 14,
    fontWeight: '800',
  },
});
